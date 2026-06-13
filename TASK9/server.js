/* import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello, this is your custom Node.js server \n");
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
 */ 
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
