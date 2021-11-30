import { VStack } from "@chakra-ui/react";
import Chat from "./Chat";

function Chats() {
  return (
    <VStack width="40%" spacing={3}>
      <Chat />
      <Chat />
      <Chat />
    </VStack>
  );
}

export default Chats;
