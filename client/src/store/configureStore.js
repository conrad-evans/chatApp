import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const storeConfig = () => {
  return configureStore({ reducer });
};

export default storeConfig;
