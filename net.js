let net = require('net');
let fs = require('fs');

const htmlResponsePage = 'page_sample_html_response.txt';

let server = net.createServer(function(socket) {
  socket.on('data', function(data) {
	   console.log('Received: ' + data);
     fs.createReadStream(htmlResponsePage).pipe(socket);
     //socket.write('Echo server\r\n');
	   // socket.pipe(socket);
  });
});

server.listen(3000, '127.0.0.1');
