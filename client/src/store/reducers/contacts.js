import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "contacts",

  initialState: [],

  reducers: {
    addContacts: (contacts, action) => {
      contacts.push(action.payload);
    },
    contactAdded: (contacts, action) => {
      const { email, name, picture } = action.payload;

      const contact = { email, name, picture };

      contacts.push(contact);
    },
  },
});

const { contactAdded, addContacts } = slice.actions;

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

export default slice.reducer;
