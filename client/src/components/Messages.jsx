import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentChat, sendMessage } from "../store/reducers/chats";
import socket from "../store/socket";

function Messages() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const me = useSelector((state) => state.auth.email);
  const activeChat = useSelector((state) => state.chats.activeChat);
  const chats = useSelector((state) => getCurrentChat(state));

  useEffect(() => {
    socket.on(me, (data) => {
      const chat = JSON.parse(data);

      // dispatch(chat);
    });
  });

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (value) {
      dispatch(sendMessage(me, activeChat.email, value));
      setValue("");
    }
  };

  return (
    <div className="messages-section">
      <div className="messages-header">
        <img src={activeChat.picture} alt={activeChat.name} />
        <span>{activeChat.name}</span>
      </div>
      <div className="messages">
        {chats ? (
          chats.map((chat) => <li>{chat.message}</li>)
        ) : (
          <h1>No messages</h1>
        )}
      </div>
      <form className="message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type a message"
          className="input message-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-circle">/</button>
      </form>
    </div>
  );
}

export default Messages;
