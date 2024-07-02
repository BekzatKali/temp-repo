const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  if (req.url === "/contact") {
    res.end(
      `
        <h1>Oops!</h1>
        <p>Such a page doesn't exist!!!</p>
        <a href="/"></a>
      `
    );
  }
});

server.listen(5000);
