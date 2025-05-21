"use client"

import { useEffect, useRef, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { CardFooter } from './ui/card'
import { Input } from './ui/input'
import { v4 as uuidv4 } from 'uuid';

interface Message {
  text: string
  sender: 'user' | 'bot'
}

export function ChatMensage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    let currentSessionId = localStorage.getItem('chatSessionId');
    if (!currentSessionId) {
      currentSessionId = uuidv4();
      localStorage.setItem('chatSessionId', currentSessionId);
    }
    setSessionId(currentSessionId);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || !sessionId) return;

    const newMessage: Message = { text: text, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');

    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text, sessionId: sessionId }),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      const data = await response.json();
      const botResponse: Message = { text: data.response, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);

    } catch (error) {
      console.error('Erro ao enviar/receber mensagem:', error);
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage(input);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col">

      <div ref={chatContainerRef} className='h-[600px] w-full space-y-4 p-4 overflow-auto'>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-3 mb-4 items-end ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'bot' && (
              <Avatar className="shrink-0">
                <AvatarFallback>BT</AvatarFallback>
                <AvatarImage src="https://img.freepik.com/fotos-premium/mascote-da-fatia-de-pizza_1254967-86774.jpg?semt=ais_hybrid&w=740" />
              </Avatar>
            )}

            <div
              className={`
                leading-relaxed
                ${
                  msg.sender === 'user'
                    ? 'bg-amber-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none'
                    : 'bg-gray-200 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'
                }
                p-3
                max-w-[75%]
                break-words
              `}
            >
              {msg.text}
            </div>

            {msg.sender === 'user' && (
              <Avatar className="shrink-0">
                <AvatarFallback>US</AvatarFallback>
                <AvatarImage src="https://img.freepik.com/vetores-livres/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?semt=ais_hybrid&w=740" />
              </Avatar>
            )}
          </div>
        ))}
      </div>

      <CardFooter className="space-x-3 p-4 border-t items-center shrink-0">
        <Input
          placeholder="Faça seu Pedido"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          className="flex-grow min-h-[40px]"
        />
        <Button
          type="submit"
          onClick={() => sendMessage(input)}
        >
          Enviar
        </Button>
      </CardFooter>
    </div>
  )
}