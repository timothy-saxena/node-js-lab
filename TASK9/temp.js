import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
    res.end("praise the lord");
});

server.listen(port, () => {
    console.log(`server running on port ${port}`);
});
