import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import socketMiddleware from "./middleware/socket";
import authReducer from "./reducers/auth";
import chatReducer from "./reducers/chats";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      chats: chatReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([api, socketMiddleware]),
  });

  return store;
}
