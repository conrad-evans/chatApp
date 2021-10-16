const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const connectToDatabase = require("./setup/database");
const setUpRoutes = require("./setup/routes");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

connectToDatabase("mongodb://127.0.0.1:27017/chatApp");
setUpRoutes(app);

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("sendMessage", (data) => {
    const { to } = JSON.parse(data);
    console.log(JSON.parse(data));
    io.emit(to, data);
  });
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port::${4000}`);
});
