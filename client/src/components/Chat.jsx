import { Text, Flex, Stack } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { useDispatch } from "react-redux";
import { pickChat } from "../store/reducers/chats";

function Chat({ chat }) {
  const dispatch = useDispatch();
  const { email, picture, name, message } = chat;

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      cursor="pointer"
      padding={3}
      _hover={{ backgroundColor: "#2d3748" }}
      onClick={(e) => dispatch(pickChat(email, picture, name))}
    >
      <Stack isInline align="center" spacing={4}>
        <Avatar name={name} src={picture} />
        <Stack spacing={1}>
          <Text fontSize={16} color="gray.200">
            {name}
          </Text>
          <Text noOfLines={1} fontSize={15} color="gray">
            {message}
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
