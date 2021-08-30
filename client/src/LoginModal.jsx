import { useState } from "react";
import axios from "axios";

function LoginModal({ setId, setShowingLogin }) {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/login/",
        data: { username: value },
      });
      setId(value);
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Login</button>
      <button onClick={() => setShowingLogin(false)}>Create UserName</button>
    </form>
  );
}

export default LoginModal;
