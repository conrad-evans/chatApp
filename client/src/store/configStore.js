import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import authReducer from "./reducers/auth";
import contactsReducer from "./reducers/contacts";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      contacts: contactsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api]),
  });

  return store;
}
