function Main() {
  return (
    <main className="main">
      <div className="chats-section">
        <input
          type="text"
          className="input chats-search"
          placeholder="Search"
        />
        <div className="chats"></div>
      </div>
      <div className="messages-section">
        <div className="messages-header">Header</div>
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
    </main>
  );
}

export default Main;
