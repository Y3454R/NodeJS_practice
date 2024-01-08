const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  // res.write("Welcome to our home page.");
  // res.end();
  if (req.url === "/") {
    res.end("Welcome to our home page.");
  }
  if (req.url === "/about") {
    res.end("Here is our short history.");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>not found!</p>
  <a href='/'>back home </a>
  `);
});

server.listen(5000);

/*
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("hello world");
});

server.listen(5000, () => {
  console.log("server listening on port : 5000...");
});
*/
