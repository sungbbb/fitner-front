import { Box, BoxProps, Container } from "@chakra-ui/react";
import { Placeholder } from "./Placeholder";
import { FooterWithSocialIconsOnAccent } from "../../Footers/FooterWithSocialIconsOnAccent/App";

export const Footer = ({ ...props }) => {
  return (
    <FooterWithSocialIconsOnAccent {...props} />
    // <Box as="footer" role="contentinfo" bg="bg.accent.default" {...props}>
    //   <Container>
    //     <Placeholder minH="20">Footer</Placeholder>
    //   </Container>
    // </Box>
  );
};
