import { Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";

function Contact() {
  return (
    <Stack
      isInline
      spacing={3}
      padding={3}
      cursor="pointer"
      align="center"
      _hover={{ backgroundColor: "#2d3748" }}
    >
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Stack spacing={1}>
        <Text fontSize={16} color="gray.200">
          Dan Abrahmov
        </Text>
        <Text noOfLines={1} fontSize={15} color="gray">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          magni maxime sit, laborum sunt culpa, a inventore id amet eius maiores
          sint harum illum voluptate consectetur saepe commodi dicta incidunt.
        </Text>
      </Stack>
    </Stack>
  );
}

export default Contact;
