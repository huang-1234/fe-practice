let http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('hsq')
  res.end('Hello World');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


let HTTPParser = process.binding('http_parser').HTTPParser;
console.log(HTTPParser);