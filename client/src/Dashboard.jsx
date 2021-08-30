import { useEffect, useState } from "react";
import io from "socket.io-client";
// import Chats from "./Chats";

const socket = io("http://localhost:5000");

function Dashboard({ myId }) {
  const [value, setValue] = useState("");
  const [to, setTo] = useState("");
  // const [activeChat, setActiveChat] = useState(null);
  const [loadedChats, setLoadedChats] = useState([]);

  useEffect(() => {
    socket.on(myId, function (data) {
      const newData = JSON.parse(data);
      console.log(loadedChats);
      let newChats = [...loadedChats, newData];
      console.table(newChats);
      setLoadedChats([...loadedChats, newData]);
    });

    return () => {
      socket.off(myId);
    };
  }, []);

  function onSendMessage(e) {
    e.preventDefault();
    const chat = { message: value, to, from: myId };
    socket.emit("message-sent", JSON.stringify(chat));
    // let newChats = [...loadedChats, chat];
    // console.log(loadedChats);
    // console.table(newChats);
    // setLoadedChats(newChats);
    setValue("");
  }

  return (
    <div className="Dashboard">
      {/* <Chats /> */}
      <div className="messages">
        {loadedChats.map((chat, index) => (
          <div key={index} className="message">
            {chat.message}
          </div>
        ))}
        <form onSubmit={onSendMessage}>
          <input
            placeholder="Enter a message"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="username"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
