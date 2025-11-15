const http = require("http");

const port = 3000;
const hostname = "127.0.0.1";

const fpsServer = http.createServer((request, response) => {
  response.writeHead(202, {'content-type': 'text/html'});
  response.write('<h1>This is a h1 tag</h1>')
  response.end()
});

fpsServer.listen(port, hostname, () => {
  console.log(`Your server is running at http://${hostname}:${port}`);
});