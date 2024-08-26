import { Flex } from "@chakra-ui/react";
import { Main } from "./Main";

export const LayoutWithFullContentHeight = (props: any) => {
  return (
    <Flex direction="column" flex="1">
      <Main {...props} />
    </Flex>
  );
};
