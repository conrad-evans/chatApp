import ChatSearch from "./ChatSearch";
import ChatsTopBar from "./ChatsTopBar";
import Chats from "./Chats";

function ChatContainer() {
  return (
    <>
      <ChatsTopBar />
      <ChatSearch />
      <Chats />
    </>
  );
}

export default ChatContainer;
