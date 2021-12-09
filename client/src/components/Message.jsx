import { useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Message({ chat }) {
  const [isShowingText, setIsShowingText] = useState(false);
  const email = useSelector((state) => state.auth.email);

  const { message, from, time } = chat;

  let alignSelf = false;
  if (email === from) {
    alignSelf = true;
  }

  let lines = 17;
  if (isShowingText) {
    lines = null;
  }

  const showMoreText = () => {
    setIsShowingText(true);
  };

  const showLessText = () => {
    setIsShowingText(false);
  };

  return (
    <Stack
      alignSelf={alignSelf ? "end" : "start"}
      maxW="70%"
      alignItems="start"
      spacing={0}
      bgColor={alignSelf ? "blue.600" : "gray.700"}
      p={3}
      borderRadius={10}
      boxShadow="xl"
    >
      <Text
        noOfLines={lines}
        onClick={showLessText}
        fontSize={15}
        color="gray.200"
      >
        {message}
      </Text>
      <Text
        fontSize={15}
        fontWeight="bold"
        color="gray.100"
        onClick={showMoreText}
        cursor="pointer"
      >
        {/* {isShowingText ? "" : "show more"} */}
      </Text>
      <Text alignSelf="flex-end" fontSize={13} color="gray.400">
        {time ? time : "12:00"}
      </Text>
    </Stack>
  );
}

export default Message;
