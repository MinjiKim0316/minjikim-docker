const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body><h1>hey! Docker works!</h1></body></html>');
});

server.listen(3050, '0.0.0.0', () => {
  console.log('Server running on port 3050');
});
