import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello, this is your custom Node.js server \n");
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
