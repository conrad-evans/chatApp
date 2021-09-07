import io from "socket.io-client";

const socket = io("http://localhost:5000");

const socketMiddleware =
  ({ disaptch }) =>
  (next) =>
  (action) => {
    if (action.type !== "apiCallBegan") {
      return next(action);
    }

    const { data, onSuccess, onError } = action.payload;
  };

export default socketMiddleware;
