const http = require("http");
const fs = require("fs");
const url = require("url");

const door = 3000;

const server = http.createServer((req, res) => {
  const urlQuery = url.parse(req.url, true);
  const filename = urlQuery.pathname.substring(1);

  const fileExists = fs.existsSync(filename);
  const fileIsHTMLExtension = filename.includes("html");

  if (fileExists && fileIsHTMLExtension) {
    fs.readFile(filename, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    fs.readFile("404.html", (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }
});

server.listen(door, () => {
  console.log(`Server running at the door ${door}`);
});
