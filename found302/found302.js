const express = require("express");
const { send } = require("express/lib/response");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/zito", (req, res) => {
  res.send("This is zito's page");
});

app.get("/chen", (req, res) => {
  res.status(302);
  res.send("This page has been moved to other places.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
