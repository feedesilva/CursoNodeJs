const http = require("node:http");
const { findAvailablePort } = require("./Clase 1/FileSystem/13.freePort");

const server = http.createServer((req, res) => {
  console.log("Petición recibida");
  res.end("Hola mundo");
});

findAvailablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
});
