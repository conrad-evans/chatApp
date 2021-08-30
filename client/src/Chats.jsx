import { useState } from "react";
import axios from "axios";

function Chats({ chats, setActiveChat }) {
  const [value, setValue] = useState("");

  const handleAddContact = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:6000/addContact", {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {chats.map((chat, index) => (
          <li onClick={() => setActiveChat(chat.from)} key={index}>
            {chat.message}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddContact}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Chats;
