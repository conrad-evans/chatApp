import { Box, Flex, Center, Button } from "@chakra-ui/react";

function Home() {
  return (
    <Flex
      height="100vh"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button>Welcome</Button>
    </Flex>
  );
}

export default Home;
