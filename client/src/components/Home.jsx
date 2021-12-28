import { Flex, Button, Link } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getGoogleAuthUrl, loginUser } from "../store/reducers/auth";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();

  const linkTo = useSelector((state) => state.auth.googleAuthUrl);

  useEffect(() => {
    dispatch(getGoogleAuthUrl());
    dispatch(loginUser());
  }, [dispatch]);

  return (
    <Flex
      height="100vh"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button>
        <Link href={linkTo}>Login</Link>
      </Button>
    </Flex>
  );
}

export default Home;
