import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGoogleAuthUrl, loginUser } from "../store/reducers/auth";

import ButtonLink from "./common/ButtonLink";

function HomePage() {
  const dispatch = useDispatch();

  const linkTo = useSelector((state) => state.auth.googleAuthUrl);

  useEffect(() => {
    dispatch(getGoogleAuthUrl());
    dispatch(loginUser());
  });

  return (
    <div className="container center-content">
      <ButtonLink
        linkTo={linkTo}
        styleClass="btn"
        buttonText="login with google"
      />
    </div>
  );
}

export default HomePage;
