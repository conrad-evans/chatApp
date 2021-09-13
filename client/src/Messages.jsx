import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  messageSent,
  activeChatsSelector,
  sendMessage,
} from "./store/chatsReducer";

function Messages() {
  const [value, setValue] = useState("");
  const activeChats = useSelector((state) => activeChatsSelector(state));
  const dispatch = useDispatch();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      dispatch(messageSent({ message: value }));
      setValue("");
      sendMessage(JSON.stringify(value));
    }
  };

  return (
    <div className="Messages">
      {!activeChats ? (
        <div></div>
      ) : (
        activeChats.map((chat, index) => (
          <div key={index} className="message">
            {chat.message}
          </div>
        ))
      )}
      <form onSubmit={handleSendMessage}>
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
