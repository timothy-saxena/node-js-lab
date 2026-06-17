#event.js
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
#os.js
import os from "os";
let currentOS = {
name: os.type(),
architecture: os.arch(),
platform: os.platform(),
release: os.release(),
version: os.version(),
freemem: (os.freemem() / 1024 ** 3).toFixed(2) + ` GB`,
};
console.log("Details of OS");
console.log(currentOS);
#path.js
/* import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("File Name:", path.basename(__filename));
console.log("Full Path:", __filename);
console.log("Location:", __dirname);
*/
import path from "path";

const myFILEpath = "C:\\Users\\Anurodh Saxena\\Documents\\MGIT\\atten.html";

console.log("File Name:", path.basename(myFILEpath));
console.log("Extension:", path.extname(myFILEpath));
console.log("Directory:", path.dirname(myFILEpath));
console.log("Is Absolute:", path.isAbsolute(myFILEpath));
console.log("Parsed Object:", path.parse(myFILEpath));
#server.js
/*
import http from "http";
http.createServer((req, res) => {
res.end("Hello World");
}).listen(3000);
console.log("Server running on port 3000");
*/
import http from "http";
const port = 3000;
const server = http.createServer((req, res) => {
res.end("Hi praise the lord jesus");
});
server.listen(port, () => {
console.log(`server running on port ${port}`);
});