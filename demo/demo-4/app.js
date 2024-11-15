const EventEmitter = require("events");
const myEmitter = new EventEmitter();
const logDBConnection = () => {
  console.log("DB connected");
};

myEmitter.on("connected", logDBConnection);
myEmitter.emit("connected");
