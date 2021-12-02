import { Flex, Stack, Tooltip, IconButton } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { IoMdMore } from "react-icons/io";
import { RiChatNewLine } from "react-icons/ri";

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
      <Stack isInline>
        <Tooltip label="New chat">
          <IconButton
            icon={<RiChatNewLine size={"24px"} />}
            color="gray.100"
            variant="ghost"
            borderRadius="full"
            _hover={{ backgroundColor: "#718096" }}
          />
        </Tooltip>
        <Tooltip label="Menu">
          <IconButton
            icon={<IoMdMore size={"24px"} />}
            color="gray.100"
            variant="ghost"
            borderRadius="full"
            _hover={{ backgroundColor: "#718096" }}
          />
        </Tooltip>
      </Stack>
    </Flex>
  );
}

export default ChatsTopBar;
