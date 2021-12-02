import { Flex } from "@chakra-ui/react";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";

function Profile() {
  return (
    <Flex flexDirection="column">
      <ProfileHeader />
      <ProfileBody />
    </Flex>
  );
}

export default Profile;
