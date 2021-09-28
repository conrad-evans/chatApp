import { useEffect } from "react";
import Button from "./common/Button";

function HomePage() {
  useEffect(() => {}, []);
  return (
    <div className="container center-content">
      <Button styleClass="btn" buttonText="login with google" />
    </div>
  );
}

export default HomePage;
