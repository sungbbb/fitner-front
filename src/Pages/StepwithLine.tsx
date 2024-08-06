import {
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const StepwithLine = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container py={{ base: "16", md: "24" }}>
      <Center w={"full"} h={{ base: "auto", md: "full" }}>
        <Stack
          w={"full"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={{ base: "8", md: "12" }}
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            textAlign={"center"}
            color="#345459"
          >
            당신의 이야기를 들려주세요!<br />
            나머지는 다 저희가 할게요
            <Box h={6} w={"full"} mt={-8} rounded="full" bg="#BFF6F6"></Box>
          </Text>
          <Box p={{ base: "4", md: "12" }}>
            {!isMobile ? (
              <Image src={require("../Assets/Image/stepImage.png")} />
            ) : (
              <Image src={require("../Assets/Image/mobilestepImage.png")} />
            )}
          </Box>
          {/* <Stack>
            <HStack>
              <Image src={require("../Assets/Icon/icon1.png")} />
              <Stack>
                <Text
                  color={"#004A56"}
                  fontWeight={"semibold"}
                  fontSize={{ base: "lg", md: "2xl" }}
                >
                  SCI 논문 기반 건강설문
                </Text>
                <Text fontSize={{ base: "lg", md: "xl" }}>
                  SCI 논문 기반 건강설문으로 당신의 이야기를 들려주세요
                </Text>
              </Stack>
            </HStack>
            <HStack>
              <Stack>
                <Text
                  color={"#004A56"}
                  fontWeight={"semibold"}
                  fontSize={{ base: "lg", md: "2xl" }}
                >
                  AI 데이터 분석, 1:1 약사상담
                </Text>
                <Text fontSize={{ base: "lg", md: "xl" }}>
                  AI 데이터 분석, 1:1 약사상담을 통해 오직 당신을 위한
                  맞춤영양제를 배송해드립니다
                </Text>
              </Stack>
              <Image src={require("../Assets/Icon/icon3.png")} />
            </HStack>
            <HStack>
              <Image src={require("../Assets/Icon/icon5.png")} />
              <Stack>
                <Text
                  color={"#004A56"}
                  fontWeight={"semibold"}
                  fontSize={{ base: "lg", md: "2xl" }}
                >
                  섭취 후 효과판단, 지속적인 피드백
                </Text>
                <Text fontSize={{ base: "lg", md: "xl" }}>
                  영양제 섭취 후 효과판단, 지속적인 피드백을 통해 최적의
                  맞춤영양제로 발전시키고 당신의 건강을 바꿉니다.
                </Text>
              </Stack>
            </HStack>
          </Stack> */}
        </Stack>
      </Center>
    </Container>
  );
};
