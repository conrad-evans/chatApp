import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "chats",

  initialState: { contacts: [], activeChat: {}, chats: {} },

  reducers: {
    addContacts: (chats, action) => {
      chats.contacts = action.payload;
    },
    contactAdded: (chats, action) => {
      const { email, name, picture } = action.payload;

      const contact = { email, name, picture };

      chats.contacts.push(contact);
    },
    activeChatPicked: (chats, action) => {
      const { email, picture, name } = action.payload;

      chats.activeChat = { email, picture, name };
    },
  },
});

const { contactAdded, addContacts, activeChatPicked } = slice.actions;

export const pickChat = (email, picture, name) => ({
  type: activeChatPicked.type,
  payload: { email, picture, name },
});

export const saveContact = (email) =>
  apiCallBegan({
    data: { email },
    url: "/api/v1/contacts",
    method: "post",
    onSuccess: contactAdded.type,
  });

export const getAllContacts = () =>
  apiCallBegan({
    url: "/api/v1/contacts",
    method: "get",
    onSuccess: addContacts.type,
  });

export const showAllContacts = createSelector(
  (state) => state.chats.contacts,
  (contacts) => contacts
);

export default slice.reducer;
