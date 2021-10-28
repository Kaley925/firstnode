var path = require("path");
var fs = require("fs");

let arr = [
  { name: "garrett", message: "hello" },
  { name: "kaley", message: "sup" },
  { name: "josh", message: "hello world" },
  { name: "jessica", message: "i say words" },
  { name: "maya", message: "cool beans" },
];

fs.writeFile("chirps.json", JSON.stringify(arr), (err) => {
  if (err) {
    return console.log(error);
  }
});
