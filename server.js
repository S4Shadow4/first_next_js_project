const { createServer } = require('http');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  const io = new Server(server);

  // Gestion des connexions WebSocket
  io.on('connection', (socket) => {
    console.log('Utilisateur connecté:', socket.id);

    socket.on('sendMessage', (data) => {
      console.log('Message reçu:', data);
      socket.broadcast.emit('receiveMessage', data);
    });

    socket.on('disconnect', () => {
      console.log('Utilisateur déconnecté');
    });
  });

  server.listen(3001, (err) => {
    if (err) throw err;
    console.log('> Prêt sur http://localhost:3001');
  });
});
