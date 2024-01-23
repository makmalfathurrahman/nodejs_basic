import fs from "fs";

// readFile
fs.readFile("message.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

// writeFile
// fs.writeFile("message.txt", "Hello Node.js", "utf8", (data, error) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data);
//   console.log("The file has been saved!");
// });
