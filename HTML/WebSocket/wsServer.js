// 导入WebSocket模块:
const WebSocket = require('ws');

// 实例化:
const wss = new WebSocket.Server({
  //端口号
});

console.log("setup server...");

wss.on('connection', function (ws) {
  console.log(`[SERVER] connection()`);
  ws.on('message', function (message) {
    console.log(`[SERVER] Received: ${message}`);
    ws.send(`ECHO: ${message}`, (err) => {
      if (err) {
        console.log(`[SERVER] error: ${err}`);
      }
    });
  })
});