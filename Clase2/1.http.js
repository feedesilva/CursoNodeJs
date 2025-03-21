const http = require("node:http");
const fs = require('node:fs')

const desiredPort = process.env.Port ?? 1234;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Bienvenido a mi Página");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`Servidor escuchando en http://localhost:${desiredPort}`);
});
