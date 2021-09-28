import { configureStore } from "@reduxjs/toolkit";
import chatsReducer from "./chatsReducer";
import api from "./middleware/api";
import socketMiddleware from "./middleware/socket";

const storeConfig = () => {
  return configureStore({
    reducer: { chats: chatsReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([api, socketMiddleware]),
  });
};

export default storeConfig;
