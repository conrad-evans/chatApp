import { useState } from "react";
import axios from "axios";

function Chats({ chats, chatHeaders, setActiveChat, setTo }) {
  const [value, setValue] = useState("");

  const handleAddContact = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:6000/addContact", {});
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {chatHeaders.map((chat, index) => (
          <li
            className="Chat-Header"
            onClick={() => {
              setActiveChat(chats[chat.from]);
              setTo(chat.from);
            }}
            key={index}
            style={{ cursor: "pointer" }}
          >
            {chat.from}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddContact}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}

export default Chats;
