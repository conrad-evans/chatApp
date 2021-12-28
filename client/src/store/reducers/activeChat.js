import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "activeChat",

  initialState: {},

  reducers: {
    activeChatPicked: (activeChat, action) => {
      const { email, picture, name } = action.payload;
      activeChat = { email, picture, name };
    },

    activeChatRemoved: (activeChat) => {
      activeChat = {};
    },
  },
});

const { activeChatPicked, activeChatRemoved } = slice.actions;

export const pickChat = (email, picture, name) => ({
  type: activeChatPicked.type,

  payload: { email, picture, name },
});

export const removeChat = () => ({
  type: activeChatRemoved.type,
});

export const getCurrentChat = createSelector(
  (state) => state.chats.chats,
  (state) => state.chats.activeChat.email,

  (chats, email) => chats[email]
);

export default slice.reducer;
