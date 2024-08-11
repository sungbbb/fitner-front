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
  const isMobile = useBreakpointValue({ base: true, md: false })
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
                spacing={0}
                alignItems={{ base: "flex-start", md: "flex-start" }}
              >
                <Heading
                  width="347px"
                  height="104px"
                  left="calc(50% - 347px/2 - 466.5px)"
                  top="204px"
                  fontFamily="'Cafe24 Ssurround', sans-serif"
                  fontStyle="normal"
                  fontWeight="700"
                  fontSize={{ base: "md", md: "3xl" }}
                  lineHeight={{ base: "30px", md: "52px" }}
                  letterSpacing="-0.01em"
                  color="#0D525C"
                  textAlign="left"
                  mb={{ base: -8, md: 0 }}
                >
                  나에게 꼭 필요한 것만,<br />
                  나에게 꼭 필요한 만큼
                </Heading>
                <Heading
                  as="h1"
                  width={{ base: "293px", md: "962px" }} // 모바일에서 너비 293px, 데스크탑에서 962px
                  height={{ base: "102px", md: "160px" }} // 모바일에서 높이 102px, 데스크탑에서 160px
                  left={{ base: "calc(50% - 293px/2 - 9px)", md: "calc(50% - 962px/2 - 159px)" }} // 모바일과 데스크탑에서 수평 위치 조정
                  top={{ base: "184px", md: "320px" }} // 모바일과 데스크탑에서 수직 위치 조정
                  fontFamily="'Cafe24 Ssurround', sans-serif" // 폰트 패밀리 설정
                  fontStyle="normal" // 폰트 스타일 설정
                  fontWeight="700" // 폰트 두께 설정
                  fontSize={{ base: "2xl", md: "5xl" }} // 모바일에서 폰트 크기 24px, 데스크탑에서 56px
                  lineHeight={{ base: "34px", md: "80px" }} // 모바일에서 줄 높이 34px, 데스크탑에서 80px
                  letterSpacing="-0.01em" // 자간 설정
                  color="#0D525C" // 텍스트 색상 설정
                  textAlign="left"
                  mt={0} // 위 여백을 없앰
                >
                  {isMobile ? (
                    <>
                      차원이 다른<br /> 1:1 개인 맞춤 영양제의 시작<br />
                      지금 바로 더 건강해지세요
                    </>
                  ) : (
                    <>
                      차원이 다른 1:1 개인 맞춤 영양제의 시작<br />
                      지금 바로 더 건강해지세요
                    </>
                  )}
                </Heading>
                <Stack fontSize={{ base: "sm", md: "lg" }} mt="4" maxW="lg">
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    my="2"
                    spacing="0"
                    width={{ base: "xxs", md: "xs" }}
                    height={{ base: "20px", m: "100%" }}
                    left="calc(50% - 291px/2 - 494.5px)" // 수평 위치 설정
                    top="520px" // 수직 위치 설정
                    boxSizing="border-box" // 박스 크기 설정
                    alignItems="flex-start" // 버튼도 왼쪽으로 정렬
                  >
                    <Button
                      px="8"
                      rounded="full"
                      size={{ base: "sm", md: "lg" }}
                      fontWeight="bold"
                      onClick={props.onClick}
                      rightIcon={<MdArrowForward />}
                      bgGradient="linear-gradient(94.15deg, #015A68 0%, #319694 100%)" // 그라데이션 배경
                      borderRadius="8000px" // 매우 둥근 테두리
                      width="100%" // 버튼의 너비를 스택에 맞게 조정
                      height="100%" // 버튼의 높이를 스택에 맞게 조정
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
              base: require("../../Assets/main2.png"), // 모바일에서 사용되는 이미지
              lg: require("../../Assets/main.png"), // 데스크탑에서 사용되는 이미지
            })}
            alt="Main Image"
            w={{ base: "100vh", md: "full" }} // 모바일에서 너비를 375px로 설정, 데스크탑에서는 전체 너비
            h={{ base: "100vh", md: "full" }} // 모바일에서 높이를 640px로 설정, 데스크탑에서는 전체 높이
            objectFit="cover"
            objectPosition="center center"
            position="absolute"
            left={{ base: "calc(50% - 375px/2)", md: "0" }} // 모바일에서 이미지를 중앙에 위치
            top="0" // 상단에 고정
            aspectRatio={16 / 9} // 16:9 비율 유지
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
          w="634.14px;"
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
