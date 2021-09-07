import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";
// import socketMiddleware from "./middleware/socket";

const storeConfig = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api]),
  });
};

export default storeConfig;
