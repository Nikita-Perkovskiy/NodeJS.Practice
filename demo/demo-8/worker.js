const factorial = require("./factorial");
const { parentPort, workerData } = require("worker_threads");

const compute = ({ array }) => {
  const arr = [];
  for (let index = 0; index < 10000000; index++) {
    arr.push(index * index);
  }
  return array.map((el) => factorial(el));
};

parentPort.postMessage(compute(workerData));
