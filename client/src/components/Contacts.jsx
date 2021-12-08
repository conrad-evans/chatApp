import { Flex } from "@chakra-ui/react";
import { showAllContacts } from "../store/reducers/chats";
import { scrollBar } from "../styles/customStyles";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import AddContact from "./AddContact";

function Contacts() {
  const contacts = useSelector((state) => showAllContacts(state));

  return (
    <Flex
      paddingY={2}
      bgColor="gray.800"
      flex="1"
      flexDirection="column"
      overflowY="auto"
      __css={scrollBar}
    >
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <AddContact />
      )}
    </Flex>
  );
}

export default Contacts;
