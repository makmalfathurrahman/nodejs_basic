import timers from "timers/promises";

console.info(new Date());

// setInterval
setInterval(() => {
  console.info(new Date());
}, 2000);

// setTimeout
setTimeout(() => {
  console.info(new Date());
}, 2000);

// timerPromises.setInterval
for await (const startTime of timers.setInterval(2000, new Date())) {
  console.info(`Start: ${new Date()}`);
}

// timerPromises.setTimeout
const result = await timers.setTimeout(2000, `Hello World!`);

console.info(new Date());
console.info(result);
