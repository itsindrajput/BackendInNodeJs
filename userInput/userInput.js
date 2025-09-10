const fs = require("fs");

const userHandler = (req, resp) => {
  if (req.url === "/") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<html>");
    resp.write("<head><title>User Form</title></head>");
    resp.write('<body><form action="/submit-data" method="post">');
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
  } else if (req.url === "/submit-data" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const paresedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(paresedBody);
      // const bodyObj = {};
      // for (const [key, value] of params) {
      //   bodyObj[key] = value;
      // }
      // OR
      const bodyObj = Object.fromEntries(params);
      fs.writeFileSync("Hello.txt", JSON.stringify(bodyObj));
      console.log(bodyObj);
    });

    resp.setHeader("Content-Type", "text/html");
    resp.write("<html>");
    resp.write("<head><title>User Form</title></head>");
    resp.write("<body>");
    resp.write("<h3>Form Data Submitted Successfully!</h3>");
    resp.write("</body>");
    resp.write("</html>");
  }
};

module.exports = userHandler;
