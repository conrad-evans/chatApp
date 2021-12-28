import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { useDisclosure } from "@chakra-ui/react";
import AddContactModal from "./AddContactModal";

function AddContact() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <IconButton
        icon={<IoMdAdd size={"24px"} />}
        color="gray.400"
        variant="ghost"
        marginBottom="10px"
        borderRadius="full"
        _hover={{ backgroundColor: "#4a5568" }}
        onClick={onOpen}
      />
      <Heading size="md" color="gray.400">
        Add Friends to chat
      </Heading>
      <AddContactModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default AddContact;
