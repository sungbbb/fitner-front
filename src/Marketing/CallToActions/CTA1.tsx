import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import { gradient } from "../Navbars/NavbarWithCallToAction/App";
import { bgGradient } from "../Heroes/Hero3";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const CTA1 = (props: { onClick: () => void }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box as="section" bgGradient={bgGradient}>
      <Container>
        {!isMobile ? (
          <Stack
            direction={{ base: "column", md: "row" }}
            justify={"space-between"}
          >
            <Stack
              spacing={{ base: "8", md: "10" }}
              py={{ base: "12", md: "16" }}
            >
              <Heading size={{ base: "sm", md: "md" }} fontWeight="extrabold">
                나에게 꼭 맞는 영양제 찾으러 가기
              </Heading>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing="4"
                px={{ base: "16", md: "0" }}
              >
                <Button
                  // colorScheme="blue"
                  px="8"
                  rounded="full"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                  onClick={props.onClick}
                  rightIcon={<MdArrowForward />}
                  bgGradient={gradient}
                >
                  나에게 꼭 맞는 영양제 찾기
                </Button>
              </Stack>
            </Stack>
            <Box w={300} position="relative">
              <Image
                src={require("../../Assets/Image/illust.png")}
                objectFit={"cover"}
                position={"absolute"}
                bottom={0}
                overflow={"hidden"}
              />
            </Box>
            <Box />
          </Stack>
        ) : (
          <Stack spacing={"4"} pt={{ base: "12", md: "16" }}>
            <Text fontSize={"2xl"} fontWeight="extrabold" textAlign={"center"}>
              나에게 꼭 맞는 영양제 찾으러 가기
            </Text>
            <Stack align={"center"}>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing="4"
                px={{ base: "16", md: "0" }}
                zIndex={111}
              >
                <Button
                  // colorScheme="blue"
                  px="8"
                  rounded="full"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                  onClick={props.onClick}
                  rightIcon={<MdArrowForward />}
                  bgGradient={gradient}
                >
                  신청서 작성하기
                </Button>
              </Stack>
            </Stack>
            <Box
              h={200}
              position={"relative"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                h={280}
                position={"absolute"}
                objectFit={"cover"}
                bottom={0}
                src={require("../../Assets/Image/illust.png")}
              />
            </Box>
          </Stack>
        )}
      </Container>
    </Box>
  );
};
