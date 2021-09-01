function Messages({ activeChat, to, onSendMessage, value, setValue }) {
  return (
    <div className="Messages">
      {to}
      {!activeChat ? (
        <div></div>
      ) : (
        activeChat.map((chat, index) => (
          <div key={index} className="message">
            {chat.message}
          </div>
        ))
      )}
      <form onSubmit={onSendMessage}>
        <input
          placeholder="Enter a message"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Messages;
