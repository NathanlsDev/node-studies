const express = require("express");
const app = express();
const door = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(door, () => {
  console.log(`App running at door ${door}`);
});
