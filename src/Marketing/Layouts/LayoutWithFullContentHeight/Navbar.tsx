import { Box, Container } from "@chakra-ui/react";
import { Placeholder } from "./Placeholder";
import { NavbarWithCallToAction } from "../../Navbars/NavbarWithCallToAction/App";

export const Navbar = ({ ...props }) => {
  return (
    <NavbarWithCallToAction onClick={props.onClick} />
    // <Box as="nav" role="navigation" bg="bg.accent.default">
    //   <Container>
    //     <Placeholder minH="20">Navigation</Placeholder>
    //   </Container>
    // </Box>
  );
};
