import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ChatContainer from "./ChatContainer";
import ContactsContainer from "./ContactsContainer";
import Profile from "./Profile";

function SideTab() {
  const ui = useSelector((state) => state.ui);

  const { isShowingChats, isShowingContacts, isShowingProfile } = ui;
  // console.log(auth);

  return (
    <Flex width="30%" flexDirection="column" height="100vh">
      {isShowingChats && <ChatContainer />}
      {isShowingContacts && <ContactsContainer />}
      {isShowingProfile && <Profile />}
    </Flex>
  );
}

export default SideTab;
