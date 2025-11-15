const http = require("http");

const port = 3000;
const hostname = "127.0.0.1";

const fpsServer = http.createServer((request, response) => {
  response.end("Server created successfully...");
});

fpsServer.listen(port, hostname, () => {
  console.log(`Your server is running at http://${hostname}:${port}`);
});
