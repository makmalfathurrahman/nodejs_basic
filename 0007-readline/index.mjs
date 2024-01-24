import * as readline from "node:readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("What is your name? ", (name) => {
  console.info(`Hello, my name is ${name}`);
  input.close();
});
