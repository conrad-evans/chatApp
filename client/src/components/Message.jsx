import { useState } from "react";
import { VStack, Text } from "@chakra-ui/react";

function Message({ alignSelf }) {
  const [show, setShow] = useState(false);

  const showMoreText = () => {
    setShow(true);
  };

  const showLessText = () => {
    setShow(false);
  };

  let lines = 2;
  if (show) {
    lines = null;
  }

  return (
    <VStack
      alignSelf={alignSelf}
      maxW="90%"
      alignItems="start"
      spacing={0}
      bgColor={alignSelf ? "#bb86fc" : "#03dac6"}
      p={3}
      borderRadius={10}
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
      {lines && (
        <Text
          fontSize={15}
          fontWeight="bold"
          color="gray.200"
          onClick={showMoreText}
        >
          show more
        </Text>
      )}
      <Text alignSelf="flex-end" fontSize={13} color="gray.200">
        12:00
      </Text>
    </VStack>
  );
}

export default Message;
