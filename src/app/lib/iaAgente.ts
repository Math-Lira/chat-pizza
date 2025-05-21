import prisma from '../../../prisma/client';

interface OrderDetails {
  pizza?: string | null;
  pizzaSize?: string | null;
  drink?: string | null;
  dessert?: string | null;
}

function normalizeString(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function capitalize(str: string | undefined | null): string {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function generateResponse(message: string, sessionId: string): Promise<string> {
  const normalizedMessage = normalizeString(message);

  let currentSession = await prisma.session.findUnique({
    where: { sessionId: sessionId },
    include: { orderDetails: true },
  });

  if (!currentSession) {
    currentSession = await prisma.session.create({
      data: {
        sessionId: sessionId,
        lastQuestion: null,
        orderDetails: {
          create: {}
        }
      },
      include: { orderDetails: true },
    });
  }

  if (!currentSession.orderDetails) {
      currentSession.orderDetails = await prisma.orderDetails.create({
          data: { sessionId: currentSession.sessionId }
      });
      currentSession = await prisma.session.findUnique({
          where: { sessionId: sessionId },
          include: { orderDetails: true },
      }) as typeof currentSession;
  }

  const pizzas = ['margarita', 'calabresa', 'portuguesa', 'frango'];
  const bebidas = ['coca', 'fanta', 'guarana', 'agua'];
  const sobremesas = ['brownie', 'pudim', 'brigadeiro', 'coockies'];
  const pizzaSizes: { [key: string]: string } = {
    'pequena': '4 pedaços',
    'media': '8 pedaços',
    'grande': '12 pedaços'
  };

  let response: string = '';
  let newLastQuestion: string | null = currentSession.lastQuestion;
  let updatedOrderDetails: OrderDetails = { ...currentSession.orderDetails };

  const isInitialGreetingKeywords = normalizedMessage.includes('ola') || normalizedMessage.includes('oi');
  const isStartNewOrderKeyword = normalizedMessage.includes('iniciar novo pedido');
  const hasExistingOrder = updatedOrderDetails.pizza || updatedOrderDetails.drink || updatedOrderDetails.dessert;

  if (isInitialGreetingKeywords) {
      if (currentSession.lastQuestion === null || currentSession.lastQuestion === 'initial_greeting') {
          // Garante que o pedido esteja limpo ao iniciar um novo atendimento
          updatedOrderDetails = { pizza: null, pizzaSize: null, drink: null, dessert: null };
          newLastQuestion = 'initial_greeting';
          response = 'Olá! Bem-vindo à nossa pizzaria! O que gostaria de pedir hoje? Temos cardápio, pizzas, bebidas e sobremesas.';
      }
      else if (hasExistingOrder && newLastQuestion !== 'confirm_new_order_start') {
          newLastQuestion = 'confirm_new_order_start';
          response = 'Você já tem um pedido em andamento. Deseja iniciar um novo pedido e limpar o atual? (Sim/Não)';
      } else {
          response = 'Olá novamente! O que mais posso ajudar?';
          newLastQuestion = currentSession.lastQuestion;
      }
  }

  else if (isStartNewOrderKeyword) {
      updatedOrderDetails = { pizza: null, pizzaSize: null, drink: null, dessert: null };
      newLastQuestion = 'initial_greeting';
      response = 'Certo! Pedido anterior cancelado. Olá! Bem-vindo à nossa pizzaria! O que gostaria de pedir hoje? Temos cardápio, pizzas, bebidas e sobremesas.';
  }
  else if (currentSession.lastQuestion === 'confirm_new_order_start') {
      if (normalizedMessage.includes('sim')) {
          updatedOrderDetails = { pizza: null, pizzaSize: null, drink: null, dessert: null };
          newLastQuestion = 'initial_greeting';
          response = 'Certo! Pedido anterior cancelado. Olá! Bem-vindo à nossa pizzaria! O que gostaria de pedir hoje? Temos cardápio, pizzas, bebidas e sobremesas.';
      } else if (normalizedMessage.includes('nao')) {
          response = 'Ok, continuando com o pedido atual. O que mais gostaria?';
          newLastQuestion = 'unknown';
      } else {
          response = 'Não entendi sua resposta. Por favor, diga "Sim" para iniciar um novo pedido ou "Não" para continuar com o atual.';
          newLastQuestion = 'confirm_new_order_start';
      }
  }

  else if (normalizedMessage.includes('cardapio') || normalizedMessage.includes('menu') || normalizedMessage.includes('o que voces tem')) {
    newLastQuestion = 'asked_menu';
    response = `Nosso cardápio inclui:
    Pizzas: ${pizzas.map((p) => capitalize(p)).join(', ')}.
    Bebidas: ${bebidas.map((b) => capitalize(b)).join(', ')}.
    Sobremesas: ${sobremesas.map((s) => capitalize(s)).join(', ')}.
    Qual item gostaria de saber mais ou pedir?`;
  }

  else if (normalizedMessage.includes('obrigado') || normalizedMessage.includes('tchau') || normalizedMessage.includes('adeus')) {
    updatedOrderDetails = { pizza: null, pizzaSize: null, drink: null, dessert: null };
    newLastQuestion = 'initial_greeting';
    response = 'De nada! Volte sempre à nossa pizzaria! Se precisar de algo, é só falar "Olá" ou "Oi" para um novo atendimento.';
  }

  else if (normalizedMessage.includes('finalizar') || normalizedMessage.includes('confirmar pedido') || normalizedMessage.includes('confirmar')) {
      if (!hasExistingOrder) {
          newLastQuestion = 'no_items_to_confirm';
          response = 'Para finalizar, por favor, me diga o que você gostaria de pedir primeiro.';
      } else {
          newLastQuestion = 'confirming_order';
          const summary = [];
          if (updatedOrderDetails.pizza) {
              const pizzaSizeInfo = updatedOrderDetails.pizzaSize && pizzaSizes[updatedOrderDetails.pizzaSize]
                  ? `(${capitalize(updatedOrderDetails.pizzaSize)}, ${pizzaSizes[updatedOrderDetails.pizzaSize]})`
                  : '';
              summary.push(`Pizza: ${capitalize(updatedOrderDetails.pizza)} ${pizzaSizeInfo}`);
          }
          if (updatedOrderDetails.drink) {
              summary.push(`Bebida: ${capitalize(updatedOrderDetails.drink)}`);
          }
          if (updatedOrderDetails.dessert) {
              summary.push(`Sobremesa: ${capitalize(updatedOrderDetails.dessert)}`);
          }
          const orderSummary = summary.length > 0 ? `Seu pedido atual é: ${summary.join(', ')}.` : 'Não entendi o que você pediu.';
          response = `${orderSummary} Confirma seu pedido? (Sim/Não)`;
      }
  }

  else if (currentSession.lastQuestion === 'confirming_order') {
    if (normalizedMessage.includes('sim') || normalizedMessage.includes('confirmo') || normalizedMessage.includes('pode finalizar')) {
      const isPizzaInOrder = !!updatedOrderDetails.pizza;
      let deliveryTimeMessage = '';

      if (isPizzaInOrder) {
          deliveryTimeMessage = 'O tempo de preparo para pedidos com pizza é de aproximadamente 40 minutos.';
      } else {
          deliveryTimeMessage = 'Seu pedido estará pronto em breve!';
      }

      updatedOrderDetails = { pizza: null, pizzaSize: null, drink: null, dessert: null };
      newLastQuestion = 'initial_greeting';
      response = `Excelente! Agradecemos a preferência! ${deliveryTimeMessage} Obrigado por escolher nossa pizzaria e volte sempre! Se precisar de algo, é só falar "Olá" ou "Oi".`;
    } else if (normalizedMessage.includes('nao') || normalizedMessage.includes('cancelar')) {
        updatedOrderDetails = { pizza: null, pizzaSize: null, drink: null, dessert: null };
        newLastQuestion = 'initial_greeting';
        response = 'Tudo bem, seu pedido foi cancelado. Podemos começar um novo pedido? Para iniciar, diga "Olá" ou "Oi".';
    } else {
        response = 'Não entendi sua confirmação. Por favor, diga "Sim" para confirmar ou "Não" para cancelar.';
        newLastQuestion = 'confirming_order';
    }
  }

  if (response === '') {
      if (normalizedMessage.includes('pizza') && !updatedOrderDetails.pizza) {
        newLastQuestion = 'asked_pizza';
        response = `Temos ${pizzas.map((p) => capitalize(p)).join(', ')}. Qual você gostaria?`;
      } else {
          for (const pizza of pizzas) {
            if (normalizedMessage.includes(pizza)) {
              newLastQuestion = 'pizza_selected';
              updatedOrderDetails.pizza = pizza;
              response = `Excelente escolha! Uma pizza de ${capitalize(pizza)}. Qual tamanho você gostaria? Temos pequena (${pizzaSizes.pequena}), média (${pizzaSizes.media}) e grande (${pizzaSizes.grande}).`;
              break;
            }
          }
      }

      if (response === '' && currentSession.lastQuestion === 'pizza_selected' && updatedOrderDetails.pizza) {
        const sizeKeys = Object.keys(pizzaSizes);
        for (const size of sizeKeys) {
          if (normalizedMessage.includes(size)) {
            updatedOrderDetails.pizzaSize = size;
            newLastQuestion = 'size_selected';
            response = `Confirmado! Uma pizza de ${capitalize(updatedOrderDetails.pizza)} no tamanho ${capitalize(size)}. Algo mais para acompanhar? Ou podemos finalizar seu pedido?`;
            break;
          }
        }
        if (response === '') {
            response = `Não entendi o tamanho da pizza. Por favor, escolha entre pequena, média ou grande.`;
            newLastQuestion = 'pizza_selected';
        }
      }

      if (response === '') {
          for (const bebida of bebidas) {
            if (normalizedMessage.includes(bebida)) {
              updatedOrderDetails.drink = bebida;
              newLastQuestion = 'item_added';
              response = `Perfeito! Uma ${capitalize(bebida)} adicionada. Deseja alguma sobremesa ou algo mais? Ou podemos finalizar seu pedido?`;
              break;
            }
          }
      }

      if (response === '') {
          for (const sobremesa of sobremesas) {
            if (normalizedMessage.includes(sobremesa)) {
              updatedOrderDetails.dessert = sobremesa;
              newLastQuestion = 'item_added';
              response = `Ótima! Um(a) ${capitalize(sobremesa)} adicionado(a). Deseja mais alguma coisa? Ou podemos finalizar seu pedido?`;
              break;
            }
          }
      }
  }

  if (response === '') {
      if (normalizedMessage.includes('bebida') || normalizedMessage.includes('refri') || normalizedMessage.includes('suco') || normalizedMessage.includes('agua')) {
        newLastQuestion = 'asked_drink';
        response = `Temos ${bebidas.map((b) => capitalize(b)).join(', ')}. Qual você prefere?`;
      } else if (normalizedMessage.includes('sobremesa') || normalizedMessage.includes('doce')) {
        newLastQuestion = 'asked_dessert';
        response = `Temos ${sobremesas.map((s) => capitalize(s)).join(', ')}. Qual você gostaria?`;
      }
  }

  if (response === '') {
    newLastQuestion = 'unknown';
    response = 'Não entendi sua solicitação. Poderia repetir ou perguntar de outra forma?';
  }

  await prisma.session.update({
    where: { id: currentSession.id },
    data: {
      lastQuestion: newLastQuestion,
      orderDetails: {
        update: {
          pizza: updatedOrderDetails.pizza,
          pizzaSize: updatedOrderDetails.pizzaSize,
          drink: updatedOrderDetails.drink,
          dessert: updatedOrderDetails.dessert,
        },
      },
    },
  });

  return response;
}