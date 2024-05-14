import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Navbar } from "./Navbar";

export const LayoutWithFullContentHeight = (props: any) => {
  return (
    <Flex direction="column" flex="1">
      <Main {...props} />
    </Flex>
  );
};
