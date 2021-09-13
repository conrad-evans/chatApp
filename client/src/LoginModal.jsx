import { useState } from "react";
import { login } from "./store/chatsReducer";
import { useDispatch } from "react-redux";

function LoginModal({ setShowingLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length > 1 && password.length > 1) {
      dispatch(login(username, password));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <button onClick={() => setShowingLogin(false)}>Create UserName</button>
    </form>
  );
}

export default LoginModal;
