import { Stack } from "@chakra-ui/react";
import { scrollBar } from "../styles/customStyles";
import Message from "./Message";

function Messages() {
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
      <Message />
      <Message alignSelf="end" />
      <Message alignSelf="end" />
      <Message />
      <Message alignSelf="end" />
      <Message alignSelf="end" />
      <Message />
      <Message />
      <Message alignSelf="end" />
    </Stack>
  );
}

export default Messages;
