let greeting = require("./greeting");

let myName = "Dosh";

greeting.night(myName);
greeting.sayHi(myName);

let http = require("http");

let sever = http.createServer((req, res) => {
  res.write("Hello user.");
  res.end();
});

sever.listen(3501, () => {
  console.log("Sever is running on port 3501.");
});
