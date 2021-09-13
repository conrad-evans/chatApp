import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveChats } from "./store/chatsReducer";

function Messages() {
  const [value, setValue] = useState("");
  const activeChats = useSelector((state) => selectActiveChats(state));
  const dispatch = useDispatch();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      setValue("");
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
