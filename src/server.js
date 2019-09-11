const WebSocket = require('ws');
const webSocketServer = new WebSocket.Server({ port: 4001 });

let connectedUsers = [];
webSocketServer.on('connection', (socket) => {
  socket.on('message', (data) => {
    if(JSON.parse(data).bodyText === '/list') {
        let count = 0;
        webSocketServer.clients.forEach((client) => {
          count += 1;
        });

        socket.send(JSON.stringify({userName: 'system', bodyText: count}));
    }
    else {
      webSocketServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    }
  });
});