import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";

function App() {
  const email = useSelector((state) => state.auth.email);

  return (
    <div className="default container-fluid">
      {!email ? <Dashboard /> : <HomePage />}
    </div>
  );
}

export default App;
