import { Avatar } from "@chakra-ui/avatar";
import { Text, HStack, VStack } from "@chakra-ui/react";

function Chat() {
  return (
    <HStack>
      <HStack>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <VStack align="start">
          <Text>Dan Abrahmov</Text>
          <Text noOfLines={1}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            magni maxime sit, laborum sunt culpa, a inventore id amet eius
            maiores sint harum illum voluptate consectetur saepe commodi dicta
            incidunt.
          </Text>
        </VStack>
      </HStack>
      <Text>12:39pm</Text>
    </HStack>
  );
}

export default Chat;
