import { useSelector } from "react-redux";

function Messages() {
  const activeChat = useSelector((state) => state.chats.activeChat);

  return (
    <div className="messages-section">
      <div className="messages-header">
        <img src={activeChat.picture} alt={activeChat.name} />
        <span>{activeChat.name}</span>
      </div>
      <div className="messages"></div>
      <form className="message-form">
        <input
          type="text"
          placeholder="Type a message"
          className="input message-input"
        />
        <button className="btn btn-circle">/</button>
      </form>
    </div>
  );
}

export default Messages;
