const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<html>");
    resp.write("<head><title>User Form</title></head>");
    resp.write('<body><form action="/submit" method="post">');
    resp.write("<h2>Submit The Form</h2>");
    resp.write('<label for="name">Name:');
    resp.write(
      '<input type="text" name="name" id="name" placeholder="Enter Your Name" />'
    );
    resp.write("<br /><br />");
    resp.write('<label for="male">Male</label>');
    resp.write('<input type="radio" id="male" name="gender" value="male" />');
    resp.write('<label for="female">Female</label>');
    resp.write(
      '<input type="radio" id="female" name="gender" value="female" />'
    );
    resp.write('<label for="other">Other</label>');
    resp.write('<input type="radio" id="other" name="gender" value="other" />');
    resp.write("<br /><br />");
    resp.write('<button type="submit" value="submit">Submit</button>');
    resp.write("</form></body>");
    resp.write("</html>");
    return resp.end();
  } else if (req.url === "/submit-data") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<html>");
    resp.write("<head><title>User Form</title></head>");
    resp.write("<body>");
    resp.write("<h3>Form Data Submitted Successfully!</h3>");
    resp.write("</body>");
    resp.write("</html>");
  } else if (
    req.url.toLocaleLowerCase() === "/submit" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("Hello.txt", "Rishabh Singh");
    resp.statusCode = 302;
    resp.setHeader("Location", "/");
    return resp.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`The Server Is Running at http://localhost:${port}`);
});
