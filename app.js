// Load http module 
var http = require('http');
// Load fs module
var fs = require('fs');

// Configuring server to respond with file content to all requests
var server = http.createServer(function(request, response) {
    fs.readFile('sample.txt', 'utf-8', function(error, data){
        response.writeHead('200', {'Content-Type': 'text/plain'});
        response.write(data);
        console.log(data);
        response.end();
    });
});

// Listen to the port
server.listen(8000);