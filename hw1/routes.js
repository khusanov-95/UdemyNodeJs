const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>initial title</title></head>");
    res.write(
      "<body><h1>Hello</h1><form action='/create-user' method='POST'><label for='user-name'>User name:</label><input  type='text' name='user-name'/><button type='submit'>Create</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>users title</title></head>");
    res.write(
      "<body><ul><li>user1</li><li>user2</li><li>user3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      console.log(message);
      return res.end();
    });
  }
};

module.exports = requestHandler;
