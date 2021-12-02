import { Text, Flex, Stack } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";

function Chat() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      cursor="pointer"
      padding={3}
      _hover={{ backgroundColor: "#2d3748" }}
    >
      <Stack isInline align="center" spacing={4}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Stack spacing={1}>
          <Text fontSize={16} color="gray.200">
            Dan Abrahmov
          </Text>
          <Text noOfLines={1} fontSize={15} color="gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            magni maxime sit, laborum sunt culpa, a inventore id amet eius
            maiores sint harum illum voluptate consectetur saepe commodi dicta
            incidunt.
          </Text>
        </Stack>
      </Stack>
      <Text fontSize={13} color="gray">
        12:39pm
      </Text>
    </Flex>
  );
}

export default Chat;
