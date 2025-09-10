const additionHandler = (req, resp) => {
  const body = [];
  console.log("Inside Add Module");
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const paresedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(paresedBody);
    const bodyObject = {};
    for (const [key, value] of params) {
      bodyObject[key] = value;
    }
    const result = Number(bodyObject.input1) + Number(bodyObject.input2);
    console.log(result);

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
            <h2>The Sum Of Two Numbers = ${result}</h2>
          </body>
        </html>
      `);
    return resp.end();
  });
};

exports.additionHandler = additionHandler;
