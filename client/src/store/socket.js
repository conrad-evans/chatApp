import { io } from "socket.io-client";

const url = "http://localhost:4000";

const socket = io(url, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
