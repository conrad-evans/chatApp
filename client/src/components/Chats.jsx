import { Stack } from "@chakra-ui/react";
import { scrollBar } from "../styles/customStyles";
import Chat from "./Chat";

function Chats() {
  return (
    <Stack bgColor="gray.800" overflowY="auto" flex="1" css={scrollBar}>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </Stack>
  );
}

export default Chats;
