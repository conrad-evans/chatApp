import { useState } from "react";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="default container-fluid">
      {user ? <Dashboard /> : <HomePage />}
    </div>
  );
}

export default App;
