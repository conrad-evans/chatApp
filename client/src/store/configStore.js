import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
  });

  return store;
}
