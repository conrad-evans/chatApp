import { useEffect, useState } from "react";
import { addChat, addChatReverse, addMessage } from "./funcs";
import io from "socket.io-client";
import Chats from "./Chats";
import Messages from "./Messages";

const socket = io("http://localhost:5000");

function Dashboard({ myId }) {
  const [value, setValue] = useState("");
  const [to, setTo] = useState("");
  const [activeChat, setActiveChat] = useState([]);
  const [chatHeaders, setChatHeaders] = useState([
    { from: "jane", message: "hey am jane" },
    { from: "john", message: "hey am john" },
    { from: "james", message: "hey am james" },
  ]);
  const [chats, setChats] = useState({});

  useEffect(() => {
    socket.on(myId, function (data) {
      const newChat = JSON.parse(data);
      console.log(chats);
      setChats((prevChats) => addChat(prevChats, newChat));
      setChatHeaders((prevChats) => addMessage(prevChats, newChat));
      setActiveChat(chats[to]);
    });

    return () => {
      socket.off(myId);
    };
  }, []);

  function onSendMessage(e) {
    e.preventDefault();
    const chat = {
      to,
      message: value,
      from: myId,
      status: "scheduled",
    };
    setChats((prevChats) => addChatReverse(prevChats, chat));
    setActiveChat(chats[to]);
    setValue("");
    socket.emit("message-sent", JSON.stringify(chat));
  }
  console.log(chats);
  return (
    <div className="Dashboard">
      <Chats
        chats={chats}
        chatHeaders={chatHeaders}
        setActiveChat={setActiveChat}
        setTo={setTo}
      />
      <Messages
        activeChat={activeChat}
        to={to}
        onSendMessage={onSendMessage}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}

export default Dashboard;
