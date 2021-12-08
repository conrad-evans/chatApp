import { Input, Stack, IconButton } from "@chakra-ui/react";
import { IoMdSend, IoMdAttach } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../store/reducers/chats";

function MessageInput() {
  const [message, setMessage] = useState("");

  const me = useSelector((state) => state.auth.email);
  const activeChat = useSelector((state) => state.chats.activeChat);

  const dispatch = useDispatch();

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!message) {
      return;
    }
    dispatch(sendMessage(me, activeChat.email, message));
    setMessage("");
  };

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
      <form
        style={{ display: "flex", width: "100%" }}
        onSubmit={handleSendMessage}
      >
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
          type="submit"
          color="gray.400"
          variant="ghost"
          borderRadius="full"
          _hover={{ backgroundColor: "#4a5568" }}
        />
      </form>
    </Stack>
  );
}

export default MessageInput;
