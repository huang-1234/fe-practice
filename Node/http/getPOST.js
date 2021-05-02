// const http = require('http');
const url = require('url');
const util = require('util');
// 载入http核心模块
const http = require("http");
// 创建一个server对象
const server = http.createServer((req, res) => {
  // 通过res对象，输出一些内容
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.write("<h1>http服务器</h1>");
  res.write("<p>使用Node.js创建一个http服务器</p>");
  rse.write(weather)
  res.end();
});
// 开启server的监听
server.listen(3000, () => {
  console.log("http server is listening in port 3000...");
});