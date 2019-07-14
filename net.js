var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
	   console.log('Received: ' + data);
     fs.createReadStream('test.txt').pipe(socket);
     //socket.write('Echo server\r\n');
	   // socket.pipe(socket);
  });
});

server.listen(3000, '127.0.0.1');
