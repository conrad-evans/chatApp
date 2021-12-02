import { Input, Stack, IconButton } from "@chakra-ui/react";
import { IoMdSend, IoMdAttach } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useState } from "react";

function MessageInput() {
  const [message, setMessage] = useState("");

  return (
    <Stack
      isInline
      padding={3}
      spacing={1}
      bgColor="gray.700"
      alignItems="center"
    >
      <IconButton
        icon={<MdOutlineEmojiEmotions size={"24px"} />}
        color="gray.400"
        variant="ghost"
        borderRadius="full"
        _hover={{ backgroundColor: "#4a5568" }}
      />
      <IconButton
        icon={<IoMdAttach size={"24px"} />}
        color="gray.400"
        variant="ghost"
        borderRadius="full"
        _hover={{ backgroundColor: "#4a5568" }}
      />
      <Input
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        size="md"
        variant="filled"
        bgColor="gray.600"
        borderRadius="full"
        color="white"
      />
      <IconButton
        icon={<IoMdSend size={"24px"} />}
        color="gray.400"
        variant="ghost"
        borderRadius="full"
        _hover={{ backgroundColor: "#4a5568" }}
      />
    </Stack>
  );
}

export default MessageInput;
