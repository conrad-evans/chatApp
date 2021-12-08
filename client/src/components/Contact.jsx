import { Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { useDispatch } from "react-redux";
import { pickChat } from "../store/reducers/chats";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const { email, picture, name, about } = contact;

  return (
    <Stack
      isInline
      spacing={3}
      padding={3}
      cursor="pointer"
      align="center"
      _hover={{ backgroundColor: "#2d3748" }}
      onClick={(e) => dispatch(pickChat(email, picture, name))}
    >
      <Avatar name={name} src={picture} />
      <Stack spacing={1}>
        <Text fontSize={16} color="gray.200">
          {name}
        </Text>
        <Text noOfLines={1} fontSize={15} color="gray">
          {about}
        </Text>
      </Stack>
    </Stack>
  );
}

export default Contact;
