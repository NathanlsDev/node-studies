const express = require("express");
const app = express();
const door = 3000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

const checkAuth = (req, res, next) => {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("User's logged in, continue...");
    next();
  } else {
    console.log("User's not logged, no access!");
    next();
  }
};

app.use(checkAuth);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(door, () => {
  console.log(`App running at door ${door}`);
});
