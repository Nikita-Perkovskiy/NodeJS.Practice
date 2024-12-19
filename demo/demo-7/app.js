// const a = 5;

// function double(a) {
//   return a * a;
// }

// function logDouble(a) {
//   console.log(double(a));
// }

// setTimeout(() => {
//   console.log("timeout");
// }, 10000);

// console.log(`previos a ${a}`);
// logDouble(a);

// function b() {
//   return d();
// }

// function d() {
//   return c();
// }

// function c() {
//   console.log(a);
// }

// b();

// const crypto = require("crypto");
// const start = performance.now();

// process.env.UV_THREADPOOL_SIZE = 8;
// for (let index = 0; index < 50; index++) {
//   crypto.pbkdf2("test", "salt", 1000000, 64, "sha512", () => {
//     console.log(performance.now() - start);
//   });
// }

// for (let index = 0; index < 50; index++) {
//   https.get("www.google.pl", (res) => {
//     res.on((data) => {});
//     res.on((end) => {
//       console.log(performance.now() - start);
//     });
//   });
// }

const perf_hooks = require("perf_hooks");
const performanceObserver = new perf_hooks.PerformanceObserver(
  (items, observer) => {
    console.log(items.getEntries());
    const entry = items.getEntriesByName("slow").pop();
    console.log(entry.name, entry.duration);
    observer.disconnect;
  }
);
performanceObserver.observe({ entryTypes: "measure" });
function slow() {
  performance.mark("start");

  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push(i);
  }

  performance.mark("end");
  performance.measure("slow", "start", "end");

  console.log(performance.getEntriesByName("slow"));
}

slow();
