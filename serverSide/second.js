const http = require("http");

const server = http.createServer((req, resp) => {
  console.log(req.url, req.headers, req.method);
  //  process.exit();
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
