import useLocalStorage from "./useLocalStroage";
import Dashboard from "./Dashboard";
import Login from "./Login";

function ChatApp() {
  const [id, setId] = useLocalStorage("id", "");
  return <div>{id ? <Dashboard myId={id} /> : <Login setId={setId} />}</div>;
}

export default ChatApp;
