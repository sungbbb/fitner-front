import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import { MdArrowForward } from "react-icons/md";
import { gradient } from "../Navbars/NavbarWithCallToAction/App";

export const WithImageBackground = (props: { onClick: () => void }) => {
  return (
    <Box bg="gray.800" as="section" position="relative">
      <Box position="relative" zIndex={1}>
        <Box color="white">
          <Box
            maxW={{ base: "xl", md: "7xl" }}
            mx="auto"
            px={{ base: "4", md: "8" }}
            h={{ base: "100vh", md: "100vh" }}
          >
            <Center h={{ base: "100vh", md: "100vh" }}>
              <Stack
                mt={{ base: -48, md: 0 }}
                w={"full"}
                maxW={{ base: "xl", md: "7xl" }}
                alignItems={{ base: "center", md: "flex-start" }}
              >
                <Heading
                  fontWeight="950"
                  className="text-gradient"
                  fontFamily={"Cafe24 Ssurround"}
                  size={{ base: "sm", md: "xs" }}
                >
                  나에게 꼭 필요한 것만,<br />
                  나에게 꼭 필요한 만큼
                </Heading>
                <Heading
                  as="h1"
                  size={{ base: "sm", md: "sm" }}
                  fontWeight="extrabold"
                  fontFamily={"Cafe24 Ssurround"}
                  className="text-gradient" 
                >
                  차원이 다른 1:1 개인 맞춤 영양제의 시작<br/>
                  지금 바로 더 건강해지세요
                </Heading>
                <Stack fontSize={{ base: "sm", md: "lg" }} mt="4" maxW="lg">
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    my="2"
                    spacing="4"
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
              </Stack>
            </Center>
          </Box>
        </Box>
      </Box>
      {/* BackgroudImage */}
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full" overflow={"hidden"}>
          <Img
            src={useBreakpointValue({
              base: require("../../Assets/main2.png"),
              lg: require("../../Assets/main.png"),
            })}
            // src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="center center"
            position="absolute"
          />
          <Box
            bgGradient={bgGradient}
            opacity={0.7}
            position="absolute"
            w="full"
            h="full"
          />
        </Box>
        <Image
          position={"absolute"}
          src={require("../../Assets/Image/illust.png")}
          alt="Main Image"
          w={{ base: "100%", md: "50%" }}
          h={"auto"}
          objectFit="contain"
          objectPosition="top bottom"
          bottom="0"
          right="0"
        />
      </Flex>
    </Box>
  );
};

export const bgGradient = "linear-gradient(45deg, #E1FAFF 0%, #E7FFDE 100%)";
