const http = require('http');
http.createServer(function (req, res) { res.end('ok'); }).listen(process.env.PORT || 3000, '127.0.0.1');
