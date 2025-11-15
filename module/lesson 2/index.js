const { error } = require("console");
const fs = require("fs");

// Async Function method


// fs.writeFile(
//   "demo.txt",
//   "this is simple text using writeFile",
//   function (error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("successful");
//     }
//   }
// );

// fs.appendFile(
//   "demo.txt",
//   " Now append new text",
//   function (error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("successful");
//     }
//   }
// );

// fs.readFile("demo.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// fs.rename("demo.txt", "filesytem.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file rename Suceessful");
//   }
// });


fs.unlink("filesytem.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file delete Suceessful");
  }
});

// fs.exists("filesytem.txt", (result) => {
//   if (result) {
//     console.log("found");
//   } else {
//     console.log("not found");
//   }
// });

// sync funtion method
fs.existsSync("filesytem.txt")
