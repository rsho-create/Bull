const express = require("express");
const cors = require("cors");
const router = require("./routes/posts")

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => res.send("Welcome to Bull"));
server.use("/posts", router);

module.exports = server;
