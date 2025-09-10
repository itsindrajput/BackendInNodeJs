/*
Create a page that shows a navigation bar of Myntra with the following links:
Home Men Women Kids Cart
Clicking on each link page should navigate to that page and a welcome to section text is shown there.
*/

const http = require("http");
const server = http.createServer((req, resp) => {
  console.log(req.url, req.method);

  if (req.url === "/home") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<h1>Welcome To Myntra</h1>");
    resp.write("<a href='/back'>Go Back To Home</a>");
    return resp.end();
  } else if (req.url === "/men") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<h1>Welcome To Myntra -> Men Section</h1>");
    resp.write("<a href='/back'>Go Back To Home</a>");
    return resp.end();
  } else if (req.url === "/women") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<h1>Welcome To Myntra -> Women Section</h1>");
    resp.write("<a href='/back'>Go Back To Home</a>");
    return resp.end();
  } else if (req.url === "/kid") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<h1>Welcome To Myntra -> Kid Section</h1>");
    resp.write("<a href='/back'>Go Back To Home</a>");
    return resp.end();
  } else if (req.url === "/cart") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<h1>Welcome To Cart Page</h1>");
    resp.write("<a href='/back'>Go Back To Home</a>");
    return resp.end();
  }

  resp.setHeader("Content-Type", "text/html");
  resp.write(`
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Task One</title>
        </head>
        <body>
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/men">Men</a></li>
              <li><a href="/women">Women</a></li>
              <li><a href="/kid">Kid</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </nav>
        </body>
      </html>
    `);
  return resp.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server Is Running at http://localhost:${port}`);
});
