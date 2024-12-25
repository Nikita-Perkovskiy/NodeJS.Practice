process.on("message", (msg) => {
  if (msg === "stop") {
    process.disconnect();
    return;
  }
  console.log("message:", msg);
  process.send("Pong");
});
