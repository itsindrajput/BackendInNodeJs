const http = require("http");
const reqHandler = require("./userInput");

const server = http.createServer(reqHandler);

const port = 3000;
server.listen(port, () => {
  console.log(`The Server Is Running at http://localhost:${port}`);
});
