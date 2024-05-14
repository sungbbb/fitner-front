import {
  Box,
  Button,
  ButtonGroup,
  Circle,
  Container,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaArrowUp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Logo } from "./Logo";
import { FiYoutube } from "react-icons/fi";
import { gradient } from "../../Navbars/NavbarWithCallToAction/App";

export const FooterWithSocialIconsOnAccent = ({ ...props }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="#27494E" color="fg.accent.default">
      <Container as="footer" role="contentinfo" py={{ base: "12", md: "24" }}>
        {!isMobile ? (
          <Stack justify={"space-between"} direction={"row"} align={"start"}>
            <Stack spacing={5} fontSize="sm" color={"#d4d4d8"}>
              <HStack divider={<StackDivider />} spacing={5}>
                <Text>이용약관</Text>
                <Text>개인정보취급방침</Text>
              </HStack>
              <Stack
                direction={{ base: "column", lg: "row" }}
                align={"start"}
                gap={6}
              >
                <Image
                  src={require("../../../Assets/Logo/footerLogo.png")}
                  alt="logo"
                />
                <Stack fontSize="xs" color={"#aaaaaa"}>
                  <HStack gap={4}>
                    <Text>상호명 : 핏트너</Text>
                    <Text>대표 : 홍길동</Text>
                    <Text>TEL : 010-0000-0000</Text>
                    <Text>E-mail : fitner@naver.com</Text>
                  </HStack>
                  <HStack gap={4}>
                    <Text>주소 : 서울시 강남구 언주로 147길 42</Text>
                    <Text>사업자등록번호 : 000-00-00000</Text>
                  </HStack>
                  <Text>
                    &copy; {new Date().getFullYear()} FITNER Inc. All rights
                    reserved.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={3}>
              <Text fontSize={"md"} color={"#d4d4d8"}>
                대표전화
              </Text>
              <Text fontSize={"lg"} fontWeight={"600"}>
                010-0000-0000
              </Text>
              <Text fontSize={"sm"} color={"#aaaaaa"}>
                평일:9:00~18:00
              </Text>
              <ButtonGroup variant={"ghost"} size={"sm"}>
                <IconButton
                  color={"#999999"}
                  aria-label="instagram"
                  icon={<FaInstagram size={24} />}
                />
                <IconButton
                  color={"#999999"}
                  aria-label="youtube"
                  icon={<FiYoutube size={24} />}
                />
              </ButtonGroup>
            </Stack>
            <Stack spacing={2}>
              <Box
                bgGradient={gradient}
                w={"70px"}
                h={"70px"}
                rounded={"full"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                _hover={{ transform: "scale(1.1)" }}
              >
                <Image src={require("../../../Assets/Icon/editIcon.png")} />
              </Box>
              <Box
                bgGradient={gradient}
                w={"70px"}
                h={"70px"}
                rounded={"full"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                _hover={{ transform: "scale(1.1)" }}
              >
                <Icon fontSize={"2xl"} as={FaArrowUp} />
              </Box>
            </Stack>
          </Stack>
        ) : (
          <HStack justify={"space-between"} align={"end"}>
            <Stack spacing={6}>
              <HStack divider={<StackDivider />} spacing={5}>
                <Text>이용약관</Text>
                <Text>개인정보취급방침</Text>
              </HStack>
              <Stack spacing={3}>
                <Text fontSize={"md"} color={"#d4d4d8"}>
                  대표전화
                </Text>
                <Text fontSize={"lg"} fontWeight={"600"}>
                  010-0000-0000
                </Text>
                <Text fontSize={"sm"} color={"#aaaaaa"}>
                  평일:9:00~18:00
                </Text>
                <ButtonGroup variant={"ghost"} size={"lg"}>
                  <IconButton
                    color={"#999999"}
                    aria-label="instagram"
                    icon={<FaInstagram size={30} />}
                  />
                  <IconButton
                    color={"#999999"}
                    aria-label="youtube"
                    icon={<FiYoutube size={30} />}
                  />
                </ButtonGroup>
              </Stack>
              <Box>
                <Image
                  src={require("../../../Assets/Logo/footerLogo.png")}
                  alt="logo"
                />
              </Box>
              <Stack fontSize="xs" color={"#aaaaaa"} spacing={1}>
                <Text>상호명 : 핏트너</Text>
                <Text>대표 : 홍길동</Text>
                <Text>TEL : 010-0000-0000</Text>
                <Text>E-mail : fitner@naver.com</Text>
                <Text>주소 : 서울시 강남구 언주로 147길 42</Text>
                <Text>사업자등록번호 : 000-00-00000</Text>
                <Box py={2}>
                  <Text>
                    &copy; {new Date().getFullYear()} FITNER Inc. All rights
                    reserved.
                  </Text>
                </Box>
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <Box
                bgGradient={gradient}
                w={"40px"}
                h={"40px"}
                rounded={"full"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                _hover={{ transform: "scale(1.1)" }}
                onClick={props.onClick}
              >
                <Image
                  w={"20px"}
                  h={"20px"}
                  src={require("../../../Assets/Icon/editIcon.png")}
                />
              </Box>
              <Box
                bgGradient={gradient}
                w={"40px"}
                h={"40px"}
                rounded={"full"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                _hover={{ transform: "scale(1.1)" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Icon fontSize={"xl"} as={FaArrowUp} />
              </Box>
            </Stack>
          </HStack>
        )}
      </Container>
    </Box>
  );
};
