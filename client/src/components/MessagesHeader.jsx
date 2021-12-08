import { Box, Stack, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import MessagesHeaderIcons from "./MessagesHeaderIcons";
import { useSelector } from "react-redux";

function MessagesHeader() {
  const activeChat = useSelector((state) => state.chats.activeChat);
  const { name, picture } = activeChat;

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding="2"
      bgColor="gray.600"
    >
      <Stack isInline spacing={4} align="center">
        <Avatar name={name} src={picture} />
        <Box>
          <Text fontSize={16} color="gray.200">
            {name}
          </Text>
          <Text fontSize={13} color="gray.400">
            Last seen today at 12:00 PM
          </Text>
        </Box>
      </Stack>
      <MessagesHeaderIcons />
    </Flex>
  );
}

export default MessagesHeader;
