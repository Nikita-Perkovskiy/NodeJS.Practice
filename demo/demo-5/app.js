const startTime = performance.now();
console.log("start");
setTimeout(() => {
  const currentTime = performance.now();
  console.log(currentTime - startTime);
}, 1000);

setTimeout(() => {
  const startTime = performance.now();
  for (let index = 0; index < 100000000000; index++) {}
  console.log(performance.now() - startTime, "Done");
});
console.log("end");
