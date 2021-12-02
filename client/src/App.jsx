import { Box, Flex } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  const id = null;
  return (
    <Box width="100%" maxHeight="100vh" height="100%" bg="gray.900" overflow="hidden">
      <Flex maxWidth="1400px" mx="auto" height="100%">
        {id ? <Dashboard /> : <Home />}
      </Flex>
    </Box>
  );
}

export default App;
