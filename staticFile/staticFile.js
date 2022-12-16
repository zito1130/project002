const express = require("express");
const app = express();
const path = require("path");

// middleware
app.use(express.static("public"));

// send file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// server
app.listen(3000, () => {
  console.log("You are running on port 3000.");
});
