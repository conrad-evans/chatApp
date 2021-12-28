import { Flex } from "@chakra-ui/react";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";

function Profile() {
  return (
    <Flex flexDirection="column" height="100vh">
      <ProfileHeader />
      <ProfileBody />
    </Flex>
  );
}

export default Profile;
