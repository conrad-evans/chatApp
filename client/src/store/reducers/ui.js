import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ui",
  initialState: {
    isShowingChats: true,
    isShowingContacts: false,
    isShowingProfile: false,
  },
  reducers: {
    contactsOpened: (ui) => {
      ui.isShowingContacts = true;
      ui.isShowingChats = false;
    },
    contactsClose: (ui) => {
      ui.isShowingContacts = false;
      ui.isShowingChats = true;
    },
    profileOpened: (ui) => {
      ui.isShowingProfile = true;
      ui.isShowingChats = false;
    },
    profileClosed: (ui) => {
      ui.isShowingProfile = false;
      ui.isShowingChats = true;
    },
  },
});

export const { contactsOpened, contactsClose, profileOpened, profileClosed } =
  slice.actions;

export default slice.reducer;
