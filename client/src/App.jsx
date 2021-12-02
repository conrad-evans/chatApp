import { Box, Flex, Divider } from "@chakra-ui/react";
import MessagesContainer from "./components/MessagesContainer";
import SideTab from "./components/SideTab";

function App() {
  return (
    <Box width="100%" maxHeight="100vh" bg="gray.900" overflow="hidden">
      <Flex maxWidth="1400px" mx="auto">
        <SideTab />
        <Divider orientation="vertical" />
        <MessagesContainer />
      </Flex>
    </Box>
  );
}

export default App;
