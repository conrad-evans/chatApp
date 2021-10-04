import { useSelector } from "react-redux";
import Chat from "./Chat";
import { showAllContacts } from "../store/reducers/chats";

function Chats() {
  const contacts = useSelector((state) => showAllContacts(state));

  console.log(contacts);

  return (
    <div className="chats-section">
      <input type="text" className="input chats-search" placeholder="Search" />
      <div className="chats">
        {contacts.length > 0 ? (
          <Chat chats={contacts} />
        ) : (
          <h1>Add contacts to chat</h1>
        )}
      </div>
    </div>
  );
}

export default Chats;
