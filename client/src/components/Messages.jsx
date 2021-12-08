import { Stack, Box } from "@chakra-ui/react";
import { scrollBar } from "../styles/customStyles";
import { useSelector } from "react-redux";
import { getCurrentChat } from "../store/reducers/chats";
import Message from "./Message";

function Messages() {
  const chats = useSelector((state) => getCurrentChat(state));

  return (
    <Stack
      spacing={1}
      flex="1"
      overflowY="scroll"
      paddingX={20}
      paddingY={2}
      bgColor="gray.800"
      css={scrollBar}
    >
      {chats ? (
        chats.map((chat, index) => <Message key={index} chat={chat} />)
      ) : (
        <Box></Box>
      )}
    </Stack>
  );
}

export default Messages;
