const http = require("http");
const door = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<h1>Hello, it's my first server with HTML</h1><p>Testing update</p>"
  );
});

server.listen(door, () => {
  console.log(`Server running at the door ${door}`);
});
