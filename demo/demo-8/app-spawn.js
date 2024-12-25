//exec
const { exec, spawn } = require("child_process");

const childProcess = exec("ls", (error, stdout, stderr) => {
  if (error) {
    console.log(error.message);
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

childProcess.on("exit", (code) => {
  console.log("code 100");
});

//spawn

const childProcess2 = spawn("ls");
childProcess2.stdout.on("data", (data) => {
  console.log("data with spawn:", data);
});
