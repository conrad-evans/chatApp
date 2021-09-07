import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
// import socketMiddleware from "./middleware/socket";

const storeConfig = () => {
  return configureStore({ reducer });
};

export default storeConfig;
