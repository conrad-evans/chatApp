const { createServer } = require("http");
const { Server } = require("socket.io");
const connectToDatabase = require("./setup/database");

connectToDatabase("mongodb://mongo/chats");

const httpServer = createServer();
const io = new Server(httpServer, { path: "/socket" });

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("sendMessage", (data) => {
    const { to } = JSON.parse(data);
    console.log(JSON.parse(data));
    io.emit(to, data);
  });
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`Listening on port::${PORT}`);
});
