var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><head><meta charset="utf-8"/></head><body>Version 2.0</body></html>');
}).listen(5000);
