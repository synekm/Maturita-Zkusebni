const http = require("http");
const path = require("path");

http.createServer(require(path.join(__dirname, 'app'))).listen("8000", "127.0.0.1", () => {
    console.log("Server is running at http://127.0.0.1:8000");
});