import { Flex } from "@chakra-ui/react";
import { scrollBar } from "../styles/customStyles";
import Contact from "./Contact";

function Contacts() {
  return (
    <Flex paddingY={2} bgColor="gray.800" flex="1" flexDirection="column" overflowY="auto" __css={scrollBar}>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </Flex>
  );
}

export default Contacts;
