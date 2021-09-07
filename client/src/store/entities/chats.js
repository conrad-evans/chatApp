import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import io from "socket.io-client";

const userId = localStorage.getItem("chattie-id");
console.log(userId);

const socket = io("http://localhost:5000");

const slice = createSlice({
  name: "chats",
  initialState: { allChats: {}, to: "" },
  reducers: {
    messageSent: (chats, action) => {
      const from = userId;
      const { to, allChats } = chats;
      const { message } = action.payload;
      const userChats = allChats[to];
      const chat = { message, to, from };

      if (userChats !== undefined) {
        userChats.push(chat);
      } else {
        allChats[to] = [chat];
      }
    },
  },
});

export const { messageSent } = slice.actions;

export const selectLastChats = createSelector(
  (state) => state.entities.chats.allChats,
  (chats) => {
    let lastChats = [];
    for (const chat in chats) {
      if (chats[chat] !== userId) {
        const length = chats[chat].length;
        lastChats.push(chats[chat][length - 1]);
      }
    }
    return lastChats;
  }
);

export const selectActiveChats = createSelector(
  (state) => state.entities.chats,
  (chats) => {
    const { allChats, to } = chats;
    return allChats[to];
  }
);

export const sendMessage = (message) => {
  socket.emit("send-message", { message });
};

export const activeChatsSelector = (state) => {
  const { allChats, to } = state.entities.chats;
  return allChats[to];
};

export function lastChatsSelector(state) {
  let lastChats = [];
  const { allChats } = state.entities.chats;
  for (const chat in allChats) {
    const chats = allChats[chat];
    lastChats.push(chats[chats.length - 1]);
  }
  return lastChats;
}

export default slice.reducer;
