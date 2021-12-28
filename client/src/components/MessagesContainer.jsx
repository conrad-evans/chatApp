import { Flex } from "@chakra-ui/react";
import MessagesHeader from "./MessagesHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receivedChat } from "../store/reducers/chats";
import socket from "../store/socket";

function MessagesContainer() {
  const dispatch = useDispatch();

  const me = useSelector((state) => state.auth.email);

  useEffect(() => {
    socket.on(me, (data) => {
      const chat = JSON.parse(data);
      const { from, to, message } = chat;
      dispatch(receivedChat(from, to, message));
    });
  }, [me, dispatch]);

  return (
    <Flex width="70%" flexDirection="column" height="100vh">
      <MessagesHeader />
      <Messages />
      <MessageInput />
    </Flex>
  );
}

export default MessagesContainer;
