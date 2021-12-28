import { Text, IconButton, Input, Flex, Stack } from "@chakra-ui/react";
import { MdModeEdit, MdDone } from "react-icons/md";
import { useState } from "react";

function About() {
  const [state, setState] = useState({
    about: "",
    editingAbout: false,
    error: false,
  });

  const { editingAbout, about } = state;

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitAbout = (e) => {
    e.preventDefault();
    if (!about) {
      setState({ ...state, error: true });
      return;
    }
    toggleEditingAbout();
  };

  const toggleEditingAbout = () => {
    setState({ ...state, editingAbout: !editingAbout });
  };

  return (
    <Stack marginBottom="10px">
      <Text color="blue.300" fontSize={18}>
        About
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        {editingAbout ? (
          <>
            <Input
              name="about"
              value={about}
              onChange={handleOnChange}
              variant="flushed"
              color="white"
              autoFocus
            />
            <IconButton
              onClick={submitAbout}
              icon={<MdDone size="24px" />}
              variant="ghost"
              color="gray.400"
              _hover={{ bgColor: "gray.700" }}
              borderRadius="full"
            />
          </>
        ) : (
          <>
            <Text color="gray.100">{about}</Text>
            <IconButton
              onClick={toggleEditingAbout}
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

export default About;
