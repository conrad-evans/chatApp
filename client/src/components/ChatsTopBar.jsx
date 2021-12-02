import { Flex } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import ChatsTopBarIcons from "./ChatsTopBarIcons";

function ChatsTopBar() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bgColor="gray.600"
      padding="2"
    >
      <Avatar
        cursor="pointer"
        name="Sage Adebayo"
        src="https://bit.ly/sage-adebayo"
      />
      <ChatsTopBarIcons />
    </Flex>
  );
}

export default ChatsTopBar;
