const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<html><body><h1>Hello, Kim!</h1></body></html>')
})

server.listen(3050, '0.0.0.0', () => {
  console.log('http server port on 3050')
})
