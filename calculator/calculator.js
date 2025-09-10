const { additionHandler } = require("./add");

const calcHandler = (req, resp) => {
  console.log(req.url, req.method);
  if (req.url.toLowerCase() === "/") {
    resp.setHeader("Content-Type", "text/html");
    resp.write(`
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Calculator</title>
          </head>
          <body>
            <h1>Welcome To New Gen Calculator</h1>
            <a href="/calculator">Calculator</a>
          </body>
        </html>
      `);
    return resp.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    resp.setHeader("Content-Type", "text/html");
    resp.write(`
      <form action="/calculate-result" method="POST">
        <input type="text" name="input1" placeholder="Number 1" />
        <input type="text" name="input2" placeholder="Number 2" />
        <button type="submit" value="submit">Sum</button>
      </form>`);
    return resp.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return additionHandler(req, resp);
  }
  resp.setHeader("Content-Type", "text/html");
  resp.write(`
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Calculator</title>
          </head>
          <body>
            <h1>404 Page Not Found</h1>
            <a href="/">Go Back To Home</a>
          </body>
        </html>
      `);
  return resp.end();
};

exports.calcHandler = calcHandler;
