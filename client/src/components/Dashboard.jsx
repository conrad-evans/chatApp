import { Divider } from "@chakra-ui/react";
import MessagesContainer from "./MessagesContainer";
import SideTab from "./SideTab";

function Dashboard() {
  return (
    <>
      <SideTab />
      <Divider orientation="vertical" />
      <MessagesContainer />
    </>
  );
}

export default Dashboard;
