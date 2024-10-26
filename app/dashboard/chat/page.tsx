"use client";

import { useEffect, useState, FormEvent } from 'react';
import io, { Socket } from 'socket.io-client';

let socket: Socket;

const ChatPage = () => {
  const [message, setMessage] = useState<string>('');
  const [chat, setChat] = useState<string[]>([]);

  useEffect(() => {
    // Connecte le client Socket.io au serveur sur localhost:3001
    socket = io('http://localhost:3001');

    socket.on('receiveMessage', (msg: string) => {
      setChat((prevChat) => [...prevChat, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('sendMessage', message);
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Chat en temps réel</h1>
      <div>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ChatPage;
