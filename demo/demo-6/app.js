const fs = require("fs");
console.log("Init");

setTimeout(() => {
  console.log(performance.now(), "Timer 0");
}, 0);

setTimeout(() => {
  console.log(performance.now(), "Timer 100");
}, 100);

setImmediate(() => {
  console.log(performance.now(), "Immediate");
});

console.log("Final");

setTimeout(() => {
  for (let index = 0; index < 1000000000; index++) {}
  console.log(performance.now(), "for done");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise done");
});

process.nextTick(() => {
  console.log("Tick");
});

fs.readFile(__filename, () => {
  console.log("File Read");
});
