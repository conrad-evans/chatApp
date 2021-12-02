import Contacts from "./Contacts";
import ContactsHeader from "./ContactsHeader";
import { Flex } from "@chakra-ui/react";
import ContactsSearch from "./ContactsSearch";

function ContactsContainer() {
  return (
    <Flex flexDirection="column" height="100vh">
      <ContactsHeader />
      <ContactsSearch />
      <Contacts />
    </Flex>
  );
}

export default ContactsContainer;
