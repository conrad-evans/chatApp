import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "contacts",

  initialState: [],

  reducers: {
    addContact: (contacts, action) => {
      const { email, name } = action.payload;

      const contact = { email, name };

      contacts.push(contact);
    },
  },
});

const { addContact } = slice.actions;

export const saveContact = (email) =>
  apiCallBegan({
    data: { email },
    url: "/api/contacts",
    method: "get",
    onSuccess: addContact.type,
  });

export default slice.reducer;
