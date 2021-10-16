import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllContacts } from "../store/reducers/chats";

import Header from "./Header";
import Main from "./Main";
import socket from "../store/socket";

socket.connect();

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  });
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default Dashboard;
