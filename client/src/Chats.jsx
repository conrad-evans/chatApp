import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { lastChatsSelector } from "./store/chatsReducer";

function Chats() {
  const [value, setValue] = useState("");
  const lastChats = useSelector((state) => lastChatsSelector(state));

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
        {!lastChats ? (
          <div></div>
        ) : (
          lastChats.map((chat, index) => (
            <li className="Chat-Header" key={index}>
              <div>{chat.to}</div>
              <div>{chat.message}</div>
            </li>
          ))
        )}
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
