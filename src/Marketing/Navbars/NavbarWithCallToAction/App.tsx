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
    <Box as="section" position={"fixed"} top={0} w={"full"} zIndex={999}>
      <Box
        // borderBottomWidth="1px"
        // bg="bg.surface"
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
              src={require("../../../Assets/Logo/Horizontal.png")}
              w={"auto"}
              height={"36px"}
              alt="logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
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
              <Button
                borderRadius={"full"}
                bgGradient={gradient}
                size={{ base: "md", md: "lg" }}
                fontSize={{ base: "sm", md: "md" }}
                onClick={props.onClick}
              >
                나에게 꼭 맞는 영양제 찾기
              </Button>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export const gradient = "linear-gradient(45deg, #015A68 0%, #319694 100%)";
