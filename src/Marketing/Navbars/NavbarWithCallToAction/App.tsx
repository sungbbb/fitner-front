import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileNavbar";
import { ToggleButton } from "./ToggleButton";

export const NavbarWithCallToAction = ({ ...props }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileNavbar = useDisclosure();
  return (
    <Box as="section" position={"sticky"} top={0} zIndex="docked">
      <Box
        borderBottomWidth="1px"
        bg="bg.surface"
        position="relative"
        // zIndex="tooltip"
      >
        <Container py="4">
          <HStack justify="space-between">
            {/* <Logo /> */}
            {/* <Text fontWeight="bold" fontSize="2xl">
              핏트너
            </Text> */}
            <Image
              src={require("../../../Assets/logo.png")}
              w={"50px"}
              height={"50px"}
              alt="logo"
            />
            {isDesktop ? (
              <HStack spacing="8">
                {/* <ButtonGroup
                  size="lg"
                  variant="text"
                  colorScheme="gray"
                  spacing="8"
                >
                  {["Components", "Pricing", "Marketplace", "Support"].map(
                    (item) => (
                      <Button key={item}>{item}</Button>
                    )
                  )}
                </ButtonGroup>
                <Button>Sign Up</Button> */}
                <Button size="lg" fontSize="md" onClick={props.onClick}>
                  무료로 내 맞춤 영양제 찾으러 가기
                </Button>
              </HStack>
            ) : (
              <>
                <ToggleButton
                  onClick={mobileNavbar.onToggle}
                  isOpen={mobileNavbar.isOpen}
                  aria-label="Open Menu"
                />
                <MobileDrawer
                  isOpen={mobileNavbar.isOpen}
                  onClose={mobileNavbar.onClose}
                />
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
