import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import io from "socket.io-client";
import { apiCallBegan } from "../api";

const userId = localStorage.getItem("chattie-id");

const socket = io("http://localhost:5000");

const slice = createSlice({
  name: "chats",
  initialState: { allChats: {}, to: "", userId },
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
    userLoggedIn: (chats, action) => {
      const { username } = action.payload;
      chats.userId = username;
      localStorage.setItem("chattie-id", username);
    },
  },
});

export const { messageSent, userLoggedIn } = slice.actions;

export const login = (username, password) =>
  apiCallBegan({
    method: "post",
    url: "/api/v1/user/createUser",
    data: { username, password },
    onSuccess: userLoggedIn.type,
  });

export const signUp = () => {};

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
