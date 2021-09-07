import { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

function Login({ setId }) {
  const [isShowingLogin, setIsShowingLogin] = useState(true);

  return (
    <div className="">
      <h1>Welcome to Chattie</h1>
      {isShowingLogin ? (
        <LoginModal setShowingLogin={setIsShowingLogin} />
      ) : (
        <SignUpModal setShowingLogin={setIsShowingLogin} />
      )}
    </div>
  );
}

export default Login;
