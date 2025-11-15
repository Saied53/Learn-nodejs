const fs = require("fs");

fs.writeFile(
  "demo.txt",
  "this is simple text using writeFile",
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("successful");
    }
  }
);
