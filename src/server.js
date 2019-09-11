const WebSocket = require('ws');
const webSocketServer = new WebSocket.Server({ port: 4001 });

webSocketServer.on('connection', (socket) => {
  socket.on('message', (data) => {
    webSocketServer.clients.forEach((client) => {
      // if (client !== socket && client.readyState === WebSocket.OPEN) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});