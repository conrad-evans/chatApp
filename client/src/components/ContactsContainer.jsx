import Contacts from "./Contacts";
import ContactsHeader from "./ContactsHeader";
import { Flex } from "@chakra-ui/react";
import ContactsSearch from "./ContactsSearch";
import ContactsAddContact from "./ContactsAddContact";
import { useSelector } from "react-redux";
import { showAllContacts } from "../store/reducers/chats";

function ContactsContainer() {
  const contacts = useSelector((state) => showAllContacts(state));

  return (
    <Flex flexDirection="column" height="100vh">
      <ContactsHeader />
      {contacts.length > 0 ? <ContactsSearch /> : null}
      {contacts.length > 0 ? <ContactsAddContact /> : null}
      <Contacts />
    </Flex>
  );
}

export default ContactsContainer;
