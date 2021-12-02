import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Icon,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { useState } from "react";

function ContactsSearch() {
  const [search, setSearch] = useState("");

  return (
    <Box padding={3} bgColor="gray.700">
      <InputGroup>
        <InputLeftElement>
          <Icon as={MdSearch} w={6} h={6} color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="Search Contacts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="filled"
          size="md"
          bgColor="gray.600"
          borderRadius="full"
          color="gray.400"
          autoFocus
        />
      </InputGroup>
    </Box>
  );
}

export default ContactsSearch;
