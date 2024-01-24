import util from "util";

const hello = "Hello";
const world = "World";

console.info(`${hello} ${world}`);
console.info(util.format("%s %s", hello, world));

const sayHello = {
  hello: "HELLO",
  world: "WORLD",
};

console.info(`${sayHello.hello} ${sayHello.world}`);
console.info(`${JSON.stringify(sayHello)}`);
console.info(util.format("%j", sayHello));
