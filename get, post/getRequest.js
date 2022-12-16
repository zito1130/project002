const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/zito", (req, res) => {
  res.send("<h1>This is zito's page.</h1>");
});

app.get("/formHandling", (req, res) => {
  let { fullname, age } = req.query;
  res.send(`Thanks ${fullname} for sending data.`);
});

app.get("*", (req, res) => {
  res.send("<h1>Error.</h1>");
});

app.listen(3000, () => {
  console.log("You are running on port 3000.");
});
