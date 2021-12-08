import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import socketMiddleware from "./middleware/socket";
import authReducer from "./reducers/auth";
import chatReducer from "./reducers/chats";
import uiReducer from "./reducers/ui";
import contactsReducer from "./reducers/contacts";

export default function configureAppStore() {
  const store = configureStore({

    reducer: {
      auth: authReducer,
      contacts: contactsReducer,
      chats: chatReducer,
      ui: uiReducer,
    },
    
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([api, socketMiddleware]),
  });

  return store;
}
