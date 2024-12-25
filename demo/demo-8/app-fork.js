const { fork } = require("child_process");
const forkProcess = fork("fork.js");
forkProcess.on("message", (msg) => {
  console.log("message:", msg);
});
forkProcess.on("close", (code) => {
  console.log("exit:", code);
});
forkProcess.send("ping");
forkProcess.send("stop");
