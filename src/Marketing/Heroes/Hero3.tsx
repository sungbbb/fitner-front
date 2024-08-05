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
            {/* <Stack fontSize={{ base: "sm", md: "lg" }} mt="4" maxW="lg">
              <Text>
                수많은 영양제 광고, 지인추천 영양제를 드시고 건강이
                좋아지셨나요?
              </Text>
              <Text>당신의 몸이 간절히 원하는 영양제는 따로 있습니다.</Text>
            </Stack> */}
            <Center h={{ base: "100vh", md: "100vh" }}>
              <Stack
                mt={{ base: -48, md: 0 }}
                w={"full"}
                maxW={{ base: "xl", md: "7xl" }}
                alignItems={{ base: "center", md: "flex-start" }}
              >
                <Heading
                  as="h1"
                  size={{ base: "sm", md: "3xl" }}
                  fontWeight="extrabold"
                  fontFamily={"yg-jalnan"}
                  className="text-gradient"
                  py={4}
                >
                  나 그리고 AI + 약사
                </Heading>
                <Stack fontSize={{ base: "sm", md: "lg" }} mt="4" maxW="lg">
                  <Text color="#505050">
                    나에게 꼭 필요한 것만<br />
                    나에게 꼭 필요한 만큼<br />
                    차원이 다른 1:1 개인 맞춤 영양제의 시작<br />
                    지금 바로 더 건강해지세요.
                  </Text>

                  {/* <Text>
                모두에게 좋은 약은 없습니다. 나에게 좋은 약은 있습니다.
              </Text> */}
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
                    {/* <HStack
                as="a"
                transition="background 0.2s"
                justify={{ base: "center", md: "flex-start" }}
                href="#"
                color="white"
                rounded="full"
                fontWeight="bold"
                px="6"
                py="3"
                _hover={{ bg: "whiteAlpha.300" }}
              >
                <span>Talk to Sales</span>
                <HiChevronRight />
              </HStack> */}
                  </Stack>
                  {/* <Text>당신의 건강을 바꿀 첫걸음을 바로 시작하세요</Text> */}
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
              base: require("../../Assets/new_main.png"),
              lg: require("../../Assets/new_main.png"),
            })}
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="center center"
            position="absolute"
          />
          <Box
            // bgGradient={bgGradient}
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

export const bgGradient = "linear-gradient(45deg, #9FF0FB 0%, #C4FEB0 100%)";
