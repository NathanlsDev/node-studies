const http = require("http");
const fs = require("fs");

const door = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(door, () => {
  console.log(`Server running at the door ${door}`);
});
