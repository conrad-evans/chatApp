import { useDispatch } from "react-redux";
import { pickChat } from "../store/reducers/chats";

function Chat({ chats }) {
  const dispatch = useDispatch();

  return chats.map((chat) => (
    <ul className="chat-list">
      <li
        className="chat-item"
        key={chat._id}
        onClick={(e) => dispatch(pickChat(chat.email, chat.picture, chat.name))}
      >
        <img src={chat.picture} alt={chat.name} />
        <h3 className="chat-item-text-main">{chat.name}</h3>
      </li>
    </ul>
  ));
}

export default Chat;
