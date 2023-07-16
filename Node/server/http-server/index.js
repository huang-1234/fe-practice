const http = require('http')
const url = require('url');
const fs = require('fs');
const querystring = require('querystring')

function gameServer(request, response) {
  const parsedUrl = url.parse(request.url);
  const sameCount = 0;

  if (parsedUrl.pathname == '/favicon.ico') {
    response.writeHead(200);
    response.end();
    return;
  }
  if (parsedUrl.pathname == '/game') {
    const query = querystring.parse(parsedUrl.query);
    const playerAction = query.action;

    if (playerWonCount > 3) {
      response.writeHead(500);
      response.end('我再也不和你玩了')
    }
    if (playerLastAction && playerAction == playerLastAction) {
      sameCount++;
    } else {
      sameCount = 0;
    }
    if (sameCount >= 3) {
      response.writeHead(400);
      response.end('你作弊')
      sameCount = 9;
    }
    const gameResult = gema
  }
}

http.createServer(gameServer).listen()