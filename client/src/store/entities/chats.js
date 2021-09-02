import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "chats",
  initialState: {},
  reducers: {
    messageSent: (chats, action) => {
      const { to, from, message } = action.payload;
      const userChats = chats[to];
      const chat = { message, to, from };

      if (userChats !== undefined) {
        userChats.push(chat);
      } else {
        chats[to] = [chat];
      }
    },
  },
});

export const getCountHeaders = (state) => (state) => {};

export default slice.reducer;
