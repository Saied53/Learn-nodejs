const http = require("http");
const fs = require("fs");
const { hostname } = require("os");
const { error } = require("console");

const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((request, response) => {
  const handleFile = (statusCode, fileName) => {
    fs.readFile(fileName, (error, data) => {
      response.writeHead(statusCode, { "Content-type": "text/html" });
      response.write(data);
      response.end();
    });
  };

  if (request.url === "/") {
    handleFile(200, "index.html");
  } else if (request.url === "/about") {
    handleFile(200, "about.html");
  } else if (request.url === "/contact") {
    handleFile(200, "contact.html");
  } else {
    handleFile(404, "error.html");
  }
});

server.listen(port, hostname, () => {
  console.log(`server is running at http://${hostName}:${port}`);
});
