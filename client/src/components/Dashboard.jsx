import { Divider } from "@chakra-ui/react";
import MessagesContainer from "./MessagesContainer";
import SideTab from "./SideTab";
import socket from "../store/socket";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllContacts } from "../store/reducers/chats";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.connect();
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <>
      <SideTab />
      <Divider orientation="vertical" />
      <MessagesContainer />
    </>
  );
}

export default Dashboard;
