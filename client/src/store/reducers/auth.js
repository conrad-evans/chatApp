import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "auth",

  initialState: {
    googleAuthUrl: null,
    email: null,
    name: null,
    picture: null,
  },

  reducers: {
    getGoogleUrl: (auth, action) => {
      auth.googleAuthUrl = action.payload;
    },
    userLoggedIn: (auth, action) => {
      const { email, name, picture } = action.payload;
      auth.email = email;
      auth.name = name;
      auth.picture = picture;
      auth.googleAuthUrl = null;
    },
  },
});

const { getGoogleUrl, userLoggedIn } = slice.actions;

export const getGoogleAuthUrl = () =>
  apiCallBegan({
    url: "/auth/google/url",
    method: "get",
    onSuccess: getGoogleUrl.type,
  });

export const loginUser = () =>
  apiCallBegan({
    url: "/auth/me",
    method: "get",
    onSuccess: userLoggedIn.type,
  });

export default slice.reducer;
