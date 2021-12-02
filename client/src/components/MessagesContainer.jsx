import { Flex } from "@chakra-ui/react";
import MessagesHeader from "./MessagesHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

function MessagesContainer() {
  return (
    <Flex width="70%" flexDirection="column" height="100vh">
      <MessagesHeader />
      <Messages />
      <MessageInput />
    </Flex>
  );
}

export default MessagesContainer;
