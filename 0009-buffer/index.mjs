import { Buffer } from "node:buffer";

const buffer = Buffer.from("Hello");

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());

console.info("");

const bufferEncoding = Buffer.from("Hello Encoding", "utf-8");

console.info(bufferEncoding);
console.info(bufferEncoding.toString("ascii"));
console.info(bufferEncoding.toString("hex"));
console.info(bufferEncoding.toString("base64"));

console.info("");

const bufferBase64 = Buffer.from("SGVsbG8gRW5jb2Rpbmc=", "base64");

console.info(bufferBase64.toString("utf-8"));
