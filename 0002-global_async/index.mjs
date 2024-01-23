function getPromise() {
  return Promise.resolve("Hello World!");
}

const result = await getPromise();
console.info(result);
