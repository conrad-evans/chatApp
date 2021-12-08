import { Box, Stack, IconButton, Heading } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import { useDispatch } from "react-redux";
import { contactsClose } from "../store/reducers/ui";

function ContactsHeader() {
  const dispatch = useDispatch();

  return (
    <Box padding={2} paddingTop={20} bgColor="gray.600">
      <Stack isInline spacing={4} align="center">
        <IconButton
          icon={<MdArrowBack size="24px" />}
          variant="ghost"
          color="gray.200"
          borderRadius="full"
          _hover={{ backgroundColor: "#2D3748" }}
          onClick={() => dispatch(contactsClose())}
        />
        <Heading as="h1" size="md" color="gray.200">
          New Chat
        </Heading>
      </Stack>
    </Box>
  );
}

export default ContactsHeader;
