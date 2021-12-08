import { Flex } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { useSelector, useDispatch } from "react-redux";
import ChatsTopBarIcons from "./ChatsTopBarIcons";
import { profileOpened } from "../store/reducers/ui";

function ChatsTopBar() {
  const dispatch = useDispatch();
  const { picture, name } = useSelector((state) => state.auth);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bgColor="gray.600"
      padding="2"
    >
      <Avatar
        cursor="pointer"
        name={name}
        src={picture}
        onClick={() => dispatch(profileOpened())}
      />
      <ChatsTopBarIcons />
    </Flex>
  );
}

export default ChatsTopBar;
