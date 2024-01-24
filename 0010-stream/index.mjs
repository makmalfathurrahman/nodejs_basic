import fs from "fs";

const wStream = fs.createWriteStream("result.log");

wStream.write("Hello ");
wStream.write("World!");
wStream.end();

const rStream = fs.createReadStream("result.log");
rStream.addListener("data", (data) => {
  console.info(data);
  console.info(data.toString());
});
