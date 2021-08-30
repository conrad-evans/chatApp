import { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

function Login({ setId }) {
  const [isShowingLogin, setIsShowingLogin] = useState(true);

  return (
    <div>
      <h1>Welcome to Chattie</h1>
      {isShowingLogin ? (
        <LoginModal setId={setId} setShowingLogin={setIsShowingLogin} />
      ) : (
        <SignUpModal setId={setId} setShowingLogin={setIsShowingLogin} />
      )}
    </div>
  );
}

export default Login;
