const http = require("http");

const door = 3000;

const server = http.createServer((req, res) => {
  res.write("Hello Http");
  res.end();
});

server.listen(door, () => {
  console.log(`Server running at the door ${door}`);
});
