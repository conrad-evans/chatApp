import { Text, IconButton, Input, Flex, Stack } from "@chakra-ui/react";
import { MdModeEdit, MdDone } from "react-icons/md";
import { useState } from "react";

function Name() {
  const [state, setState] = useState({
    name: "",
    editingName: false,
    error: false,
  });

  const { editingName, name } = state;

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitName = (e) => {
    e.preventDefault();
    if (!name) {
      setState({ ...state, error: true });
      return;
    }
    toggleEditingName();
  };

  const toggleEditingName = () => {
    setState({ ...state, editingName: !editingName });
  };

  return (
    <Stack marginBottom="40px">
      <Text color="blue.300" fontSize={18}>
        Your Name
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        {editingName ? (
          <>
            <Input
              name="name"
              value={name}
              onChange={handleOnChange}
              variant="flushed"
              color="white"
              autoFocus
            />
            <IconButton
              onClick={submitName}
              icon={<MdDone size="24px" />}
              variant="ghost"
              color="gray.400"
              _hover={{ bgColor: "gray.700" }}
              borderRadius="full"
            />
          </>
        ) : (
          <>
            <Text color="gray.100">{name}</Text>
            <IconButton
              onClick={toggleEditingName}
              icon={<MdModeEdit size="24px" />}
              variant="ghost"
              color="gray.400"
              _hover={{ bgColor: "gray.700" }}
              borderRadius="full"
            />
          </>
        )}
      </Flex>
    </Stack>
  );
}

export default Name;
