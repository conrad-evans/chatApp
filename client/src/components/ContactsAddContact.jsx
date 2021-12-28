import React from "react";
import { Box, Stack, Heading, IconButton } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import AddContactModal from "./AddContactModal";

function ContactsAddContact() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box padding={3} bgColor="gray.800">
      <Stack isInline align="center" spacing={5}>
        <IconButton
          icon={<IoMdAdd size={"24px"} />}
          color="gray.400"
          variant="ghost"
          marginBottom="10px"
          borderRadius="full"
          _hover={{ backgroundColor: "#4a5568" }}
          onClick={onOpen}
        />
        <Heading fontSize="xl" color="gray.400">
          Add Contact
        </Heading>
      </Stack>
      <AddContactModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default ContactsAddContact;
