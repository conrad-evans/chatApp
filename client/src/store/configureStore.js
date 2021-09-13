import { configureStore } from "@reduxjs/toolkit";
import chatsReducer from "./chatsReducer";
import api from "./middleware/api";

const storeConfig = () => {
  return configureStore({
    reducer: { chats: chatsReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api]),
  });
};

export default storeConfig;
