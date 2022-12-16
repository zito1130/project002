const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/zito", (req, res) => {
  res.send("<h1>This is zito's page.</h1>");
});

app.post("/formHandling", (req, res) => {
  let { fullname, age } = req.body;
  res.send(
    `Thanks for posting. Your name is ${fullname}, and your age is ${age}.`
  );
});

//routing for pattern
// app.get("/fruit/:someFruit", (req, res) => {
//   let { someFruit } = req.params;
//   res.send("You are looking for " + someFruit);
// });

// routing for all
// app.get("*", (req, res) => {
//   res.send("<h1>Error.</h1>");
// });

app.listen(3000, () => {
  console.log("You are running on port 3000.");
});
