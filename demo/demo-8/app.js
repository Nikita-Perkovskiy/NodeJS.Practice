const factorial = require("./factorial");

const compute = (array) => {
  const arr = [];
  for (let index = 0; index < 10000000; index++) {
    arr.push(index * index);
  }
  return array.map((el) => factorial(el));
};

const main = () => {
  performance.mark("start");
  const result = [
    compute([25, 20, 34, 43]),
    compute([25, 20, 34, 43]),
    compute([25, 20, 34, 43]),
    compute([25, 20, 34, 43]),
  ];
  console.log(result);
  performance.mark("end");
  performance.measure("main", "start", "end");
  console.log(performance.getEntriesByName("main").pop());
};

main();
