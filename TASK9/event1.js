/* import EventEmitter from "events";

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
});

myEmitter.emit("greet", "Tim");
 */

import EventEmitter from "events";

const myEE = new EventEmitter();

myEE.on("add", (a, b) => {
    console.log(`a + b = ${a + b}`);
});

myEE.emit("add", 10, 20);
