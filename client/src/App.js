import Dashboard from "./Dashboard";
import Login from "./Login";
import { useSelector } from "react-redux";

function App() {
  const id = useSelector((state) => state.id);
  return <div className="container">{id ? <Dashboard /> : <Login />}</div>;
}

export default App;
