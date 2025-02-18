import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const greeting = (name) => {
  console.log("HELLO" + name);
};

const goodbye = (name) => {
  console.log("GOODBYE" + name);
};

//Register Event Listeners
myEmitter.on("greet", greeting);
myEmitter.on("goodbye", goodbye);

//Emit events
myEmitter.emit("greet", "Ariannage");
myEmitter.emit("goodbye", "Ariannage");

//Error Handeling
myEmitter.on("error", (err) => {
  console.log(err);
});
