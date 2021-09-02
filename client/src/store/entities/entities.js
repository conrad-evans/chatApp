import { combineReducers } from "redux";
import chatsReducer from "./chats";

export default combineReducers({ chats: chatsReducer });
