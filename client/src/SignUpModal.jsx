import { useState } from "react";
import axios from "axios";

function SignUpModal({ setId, setShowingLogin }) {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/createUser/",
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
      <h2>Sign Up</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setShowingLogin(true)}>Login</button>
      <button type="submit">Create UserName</button>
    </form>
  );
}

export default SignUpModal;
