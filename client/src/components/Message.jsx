import { useSelector } from "react-redux";

function Message({ chat, idx }) {
  const { message, to, from } = chat;
  const email = useSelector((state) => state.auth.email);

  if (email === from) {
    return (
      <div key={idx} className="message message_1">
        <div>{message}</div>
        <div>{from}</div>
      </div>
    );
  }
  return (
    <div key={idx} className="message message_2">
      <div>{message}</div>
      <div>{from}</div>
    </div>
  );
}

export default Message;
