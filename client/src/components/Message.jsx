import { useState } from "react";
import { Stack, Text } from "@chakra-ui/react";

function Message({ alignSelf }) {
  const [isShowingText, setIsShowingText] = useState(false);

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
      alignSelf={alignSelf}
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum
        nihil excepturi accusantium, recusandae optio ut esse, accusamus vel
        asperiores laborum porro delectus nesciunt sequi aut non dolorem quam
        beatae!
      </Text>
      <Text
        fontSize={15}
        fontWeight="bold"
        color="gray.100"
        onClick={showMoreText}
        cursor="pointer"
      >
        {isShowingText ? "" : "show more"}
      </Text>
      <Text alignSelf="flex-end" fontSize={13} color="gray.400">
        12:00
      </Text>
    </Stack>
  );
}

export default Message;
