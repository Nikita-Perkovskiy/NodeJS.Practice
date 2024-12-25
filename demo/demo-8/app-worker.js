const { Worker } = require("worker_threads");

const compute = (array) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", {
      workerData: { array },
    });

    worker.on("message", (msg) => {
      console.log(worker.threadId); // Logs the worker's thread ID
      resolve(msg);
    });

    worker.on("error", (err) => {
      reject(err); // Rejects on worker error
    });

    worker.on("exit", () => {
      console.log("Worker finished execution"); // Logs worker exit
    });
  });
};

const main = () => {
  performance.mark("start");
  const result = [
    compute([25, 20, 34, 43]),
    compute([25, 20, 34, 43]),
    compute([25, 20, 34, 43]),
    compute([25, 20, 34, 43]),
  ];
  console.log("result:", result);
  performance.mark("end");
  performance.measure("main", "start", "end");
  console.log(performance.getEntriesByName("main").pop());
};

main();
