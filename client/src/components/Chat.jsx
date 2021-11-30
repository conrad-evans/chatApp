import { Avatar } from "@chakra-ui/avatar";
import { Text, HStack, VStack } from "@chakra-ui/react";

function Chat() {
  return (
    <HStack align="center" cursor="pointer" maxW={400} padding={1}>
      <HStack spacing={2} align="center">
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <VStack align="start" spacing={0}>
          <Text fontSize={16} fontWeight="bold">
            Dan Abrahmov
          </Text>
          <Text noOfLines={1} fontSize={15}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            magni maxime sit, laborum sunt culpa, a inventore id amet eius
            maiores sint harum illum voluptate consectetur saepe commodi dicta
            incidunt.
          </Text>
        </VStack>
      </HStack>
      <Text fontSize={13}>12:39pm</Text>
    </HStack>
  );
}

export default Chat;
