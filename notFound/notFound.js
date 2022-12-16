const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/zito", (req, res) => {
  res.send("This is zito's page.");
});

app.get("*", (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
