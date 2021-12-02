import { Box, Center } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import About from "./About";
import Name from "./Name";

function ProfileBody() {
  return (
    <Box bgColor="gray.800" paddingX={5} height="100vh">
      <Center paddingY="50px">
        <Avatar
          size="2xl"
          cursor="pointer"
          name="Sage Adebayo"
          src="https://bit.ly/sage-adebayo"
        />
      </Center>
      <Name />
      <About />
    </Box>
  );
}

export default ProfileBody;
