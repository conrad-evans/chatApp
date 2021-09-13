import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "./store/chatsReducer";

function SignUpModal({ setShowingLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length > 4 && password.length > 4) {
      dispatch(signUp(username, password));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
      <button onClick={() => setShowingLogin(true)}>Login</button>
      <button type="submit">Create UserName</button>
    </form>
  );
}

export default SignUpModal;
