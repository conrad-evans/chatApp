import { useEffect, useState } from "react";
import io from "socket.io-client";
import Chats from "./Chats";
import Messages from "./Messages";

const socket = io("http://localhost:5000");

function Dashboard({ myId }) {
  const [value, setValue] = useState("");
  const [to, setTo] = useState("");
  const [activeChat, setActiveChat] = useState(null);
  const [loadedChats, setLoadedChats] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket.on(myId, function (data) {
      setLoadedChats((prevChats) => [...prevChats, JSON.parse(data)]);
    });

    // return () => {
    // socket.off(myId);
    // };
  }, [myId]);

  function onSendMessage(e) {
    e.preventDefault();
    const chat = { message: value, to, from: myId, status: "scheduled" };
    socket.emit("message-sent", JSON.stringify(chat));
    const newChats = [...loadedChats, chat];
    setLoadedChats(newChats);
    setValue("");
  }

  return (
    <div className="Dashboard">
      <Chats chats={chats} setActiveChat={setActiveChat} />
      <Messages
        activeChat={activeChat}
        loadedChats={loadedChats}
        onSendMessage={onSendMessage}
      />
    </div>
  );
}

export default Dashboard;
