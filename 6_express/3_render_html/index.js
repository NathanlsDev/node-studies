const express = require("express");
const app = express();
const door = 3000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(door, () => {
  console.log(`App running at door ${door}`);
});
