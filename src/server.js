//http server
const http = require("http");
//pro dynamicke nasazeni najde cestu k slozce
const path = require("path");

//vystvoreni serveru s modulem app na adrese 127.0.0.1:8000
http.createServer(require(path.join(__dirname, "app"))).listen("8000", "127.0.0.1", () => {
    //vypis ze server bezi
    console.log("Server is running at http://127.0.0.1:8000");
});