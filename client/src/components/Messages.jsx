import { VStack } from "@chakra-ui/react";
import Message from "./Message";

function Messages() {
  return (
    <VStack width="70%" spacing={1} align="start">
      <Message />
      <Message alignSelf="end" />
    </VStack>
  );
}

export default Messages;
