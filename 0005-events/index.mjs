import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("Check Hello", () => {
  console.info("Hello");
});

emitter.addListener("Check Name", (name) => {
  console.info(`Hello ${name}`);
});

emitter.emit("Check Hello");
emitter.emit("Check Name", "World!");
