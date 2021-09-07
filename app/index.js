const express = require("express");
const router = require("./routes/auth");
const http = require("http");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use("/api/v1/user", router);
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user is online");

  socket.on("send-message", function (data) {
    const { to } = JSON.parse(data);

    io.emit(to, data);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
