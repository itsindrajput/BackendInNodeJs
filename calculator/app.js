const http = require("http");
const { calcHandler } = require("./calculator");

const server = http.createServer(calcHandler);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
