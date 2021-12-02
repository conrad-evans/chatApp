import { Box, Stack, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import MessagesHeaderIcons from "./MessagesHeaderIcons";

function MessagesHeader() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding="2"
      bgColor="gray.600"
    >
      <Stack isInline spacing={4} align="center">
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Box>
          <Text fontSize={16} color="gray.200">
            Dan Abrahmov
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
