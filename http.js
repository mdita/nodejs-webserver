let http = require('http');
let fs = require('fs');
let url = require('url');

const PORT = 3000;

let server = http.createServer(function(request, response) {
  const file = 'home.html';
  response.writeHead(200);
  fs.createReadStream(file).pipe(response);
  // response.writeHead(
  //   200,
  //   {"Content-Type": "text/html"});
  // response.end("Hello world\n");
});

server.listen(PORT);
console.log('Server is running on port: ' + PORT);
