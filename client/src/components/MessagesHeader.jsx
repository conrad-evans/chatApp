import { Box, Stack, Flex, Text, IconButton } from "@chakra-ui/react";
import { IoMdMore, IoMdSearch } from "react-icons/io";
import { Avatar } from "@chakra-ui/avatar";

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
      <Stack isInline>
        <IconButton
          icon={<IoMdSearch size={"24px"} />}
          color="gray.100"
          variant="ghost"
          borderRadius="full"
          _hover={{ backgroundColor: "#718096" }}
        />
        <IconButton
          icon={<IoMdMore size={"24px"} />}
          color="gray.100"
          variant="ghost"
          borderRadius="full"
          _hover={{ backgroundColor: "#718096" }}
        />
      </Stack>
    </Flex>
  );
}

export default MessagesHeader;
