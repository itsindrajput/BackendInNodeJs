const http = require("http");

const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<html>");
    resp.write("<head><title>Welcome Rishabh</title></head>");
    resp.write("<body><h1>How are you?</h1></body>");
    resp.write("</html>");
    return resp.end();
  } else if (req.url === "/cart") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<html>");
    resp.write("<head><title>Rishabh | Cart</title></head>");
    resp.write("<body><h1>Product Cart Page</h1></body>");
    resp.write("</html>");
    return resp.end();
  }
  resp.setHeader("Content-Type", "text/html");
  resp.write("<html>");
  resp.write("<head><title>Not Found</title></head>");
  resp.write("<body><h1>The Page Not Found</h1></body>");
  resp.write("</html>");
  return resp.end();
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
