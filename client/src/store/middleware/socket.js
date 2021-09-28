import io from "socket.io-client";
import { socketEmit } from "../socket";

const socket = io("http://localhost:3050/api");

const socketMiddleware =
  ({ disaptch }) =>
  (next) =>
  (action) => {
    if (action.type !== socketEmit.type) {
      return next(action);
    }

    next(action);
    const { data, onSuccess, socketName } = action.payload;

    socket.emit(socketName, JSON.stringify(data));
    console.log(data);
    if (onSuccess) {
      disaptch({ type: onSuccess, payload: data });
    }
  };

export default socketMiddleware;
