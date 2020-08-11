const http = require('http');

var crashed = false;

const requestListener = function (req, res) {
  if (!crashed) {
    res.writeHead(200);
    res.end('App is working!');
  } else {
    res.writeHead(500);
    res.end('Internal server error.');
  }
}

const server = http.createServer(requestListener);
server.listen(8080);

function crash() {
  crashed = true;
  console.log("Application crashed!");
}
var crashMillis = Math.floor(Math.random() * Math.floor(30000)) + 15000;
setTimeout(crash, crashMillis);
