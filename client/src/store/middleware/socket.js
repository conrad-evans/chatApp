import { createAction } from "@reduxjs/toolkit";
import socket from "../socket";

export const socketSendMessage = createAction("socket/sendMessage");

const socketMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== socketSendMessage.type) {
      return next(action);
    }

    next(action);

    const { message, to, from, onSuccess } = action.payload;

    const chat = { message, to, from };
    dispatch({type: onSuccess, payload: chat});

    socket.emit("sendMessage", JSON.stringify(chat));

  };

export default socketMiddleware;
