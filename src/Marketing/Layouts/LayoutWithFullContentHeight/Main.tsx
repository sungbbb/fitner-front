import { Container, Flex, FlexProps } from "@chakra-ui/react";
import { Placeholder } from "./Placeholder";

export const Main = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" {...props}>
      {props.children}
    </Flex>
  );
};
