import EventEmitter from "events";

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
});

myEmitter.emit("greet", "Tim");
