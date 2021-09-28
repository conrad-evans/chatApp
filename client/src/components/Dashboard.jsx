function Dashboard() {
  return (
    <div className="container">
      <header class="header">
        <h1 class="heading-one">/LOGO/ ChatApp</h1>
      </header>
      <main class="main">
        <div class="chats-section">
          <input type="text" class="input chats-search" placeholder="Search" />
          <div class="chats"></div>
        </div>
        <div class="messages-section">
          <div class="messages-header">Header</div>
          <div class="messages"></div>
          <form class="message-form">
            <input
              type="text"
              placeholder="Type a message"
              class="input message-input"
            />
            <button class="btn btn-circle">/</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
