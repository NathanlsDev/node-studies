const express = require("express");
const app = express();
const door = 3000;

const path = require("path");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const basePath = path.join(__dirname, "templates");

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post("users/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`user name: ${name}, and is ${age} years old`);

  res.sendFile(`${basePath}/userform.html`);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Searching user: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(door, () => {
  console.log(`App running at door ${door}`);
});
