import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { saveContact } from "../store/reducers/chats";
import { useDispatch } from "react-redux";

function AddContactModal({ isOpen, onClose }) {
  const [state, setState] = useState({
    contact: "",
    isError: false,
  });

  const { contact, isError } = state;
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    if (!contact) {
      setState({ ...state, isError: true });
      return;
    }
    dispatch(saveContact(contact));
    onClose();
  };

  const closeModal = () => {
    setState({ contact: "", isError: false });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent bgColor="gray.200">
        <ModalHeader>
          <Text color="gray.800">Add Contact</Text>
        </ModalHeader>
        <form onSubmit={submitForm}>
          <ModalBody>
            <Input
              isInvalid={isError}
              value={contact}
              onChange={(e) => setState({ ...state, contact: e.target.value })}
              borderColor="gray.600"
              bgColor="gray.300"
            />
            {isError && (
              <Text fontSize="13px" marginTop="5px" color="crimson">
                *Add a valid Google email address
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme="red"
              mr={3}
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              bgColor="gray.700"
              color="gray.100"
              variant="solid"
              type="submit"
              _hover={{ backgroundColor: "#4a5568" }}
            >
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default AddContactModal;
