import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "./Logo";

export const FooterWithSocialIconsOnAccent = () => (
  <Box bg="gray.100" color="fg.accent.default">
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          {/* <Logo /> */}
          {/* <Text fontWeight="bold" fontSize="2xl">
            핏트너
          </Text> */}
          <Image
            src={require("../../../Assets/logo.png")}
            w={"100px"}
            height={"100px"}
            alt="logo"
          />
          {/* <ButtonGroup variant="tertiary.accent">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
          </ButtonGroup> */}
        </Stack>
        <Text fontSize="sm" color="accent">
          &copy; {new Date().getFullYear()} FITNER Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
);
