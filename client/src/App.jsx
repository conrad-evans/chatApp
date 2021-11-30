import { Container, HStack } from "@chakra-ui/react";
import Chats from "./components/Chats";
import Messages from "./components/Messages";

function App() {
  return (
    <Container maxW="container.xl">
      <HStack spacing={4}>
        <Chats />
        <Messages />
      </HStack>
    </Container>
  );
}

export default App;
