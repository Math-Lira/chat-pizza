# 🍕 Chat Pizza

Projeto desenvolvido com Next.js, utilizando TypeScript, Tailwind CSS, Prisma e outras tecnologias modernas. O objetivo é criar uma aplicação web interativa para pedidos de pizza via chat.

## ✨ Tecnologias Utilizadas

* [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Prisma ORM](https://www.prisma.io/)
* [pnpm](https://pnpm.io/)
* [PostgreSQL](https://www.postgresql.org/)

## 📁 Estrutura do Projeto

* `src/`: Código-fonte da aplicação.
* `prisma/`: Schemas e migrações do Prisma.
* `public/`: Arquivos estáticos.
* `package.json`: Dependências e scripts.
* `tsconfig.json`: Configurações do TypeScript.
* `next.config.ts`: Configurações do Next.js.
* `.env`: Variáveis de ambiente (não incluído).

## ⚙️ Pré-requisitos

* [Node.js](https://nodejs.org/) v14+
* [pnpm](https://pnpm.io/)
* [PostgreSQL](https://www.postgresql.org/)

## 🔧 Instalação

```bash
git clone https://github.com/Math-Lira/chat-pizza.git
cd chat-pizza
pnpm install
```

Crie um arquivo `.env` com:

```env
DATABASE_URL="sua_url_do_banco_de_dados"
```

Execute as migrações:

```bash
pnpm prisma migrate dev
```

## 🏃 Executando o Projeto

```bash
pnpm dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponíveis

* `pnpm dev`: Modo desenvolvimento
* `pnpm build`: Build de produção
* `pnpm start`: Inicia produção
* `pnpm lint`: Lint do código

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
