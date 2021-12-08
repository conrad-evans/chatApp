import { Stack } from "@chakra-ui/react";
import { scrollBar } from "../styles/customStyles";
import Chat from "./Chat";
import { useSelector } from "react-redux";
import { showAllActiveChats } from "../store/reducers/chats";
import AddContact from "./AddContact";

function Chats() {
  const activeChats = useSelector((state) => showAllActiveChats(state));

  return (
    <Stack bgColor="gray.800" overflowY="auto" flex="1" css={scrollBar}>
      {activeChats.length > 0 ? (
        activeChats.map((contact, index) => <Chat key={index} chat={contact} />)
      ) : (
        <AddContact />
      )}
    </Stack>
  );
}

export default Chats;
