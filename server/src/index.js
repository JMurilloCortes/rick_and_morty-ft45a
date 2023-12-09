const express = require("express");
const server = express();
const router = require("./routes");
const PORT = 3001;
const cors = require("cors");

server.use(cors());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
});

server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
