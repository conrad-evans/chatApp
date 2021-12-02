import { Flex } from "@chakra-ui/react";
import ChatContainer from "./ChatContainer";
import Contacts from "./Contacts";
import ContactsContainer from "./ContactsContainer";
import Profile from "./Profile";

function SideTab() {
  return (
    <Flex width="30%" flexDirection="column" height="100vh">
      <ChatContainer />
      {/* <Profile /> */}
      {/* <ContactsContainer /> */}
    </Flex>
  );
}

export default SideTab;
