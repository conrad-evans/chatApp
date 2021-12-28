import { io } from "socket.io-client";

const socket = io("", { path: "/socket", autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
