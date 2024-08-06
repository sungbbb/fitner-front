import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Center,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdArrowDownward, MdArrowForward } from "react-icons/md";

export const BeforeAndAfter = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container py={{ base: "16", md: "24" }} px={{ base: "0", md: "12" }}>
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
            fontFamily={"Cafe24 Ssurround"}
            color="#345459"
          >
            이제 정확성의 힘을 경험하세요
            <Box h={6} w={"full"} mt={-8} rounded="full" bg="#BFF6F6"></Box>
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={0}
            w={"full"}
            borderRadius={"2xl"}
          >
            <Box
              borderLeftRadius={{ base: "none", md: "2xl" }}
              bgSize={"cover"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgImage={require("../Assets/Image/beforeImage.jpg")}
            >
              <Stack
                direction={{ base: "column", md: "row" }}
                justify={"space-between"}
                px={8}
                py={6}
                h={{ base: "auto", md: "full" }}
              >
                <Box h={{ base: "120px", md: "full" }} />
                <Card
                  borderRadius={"2xl"}
                  h={{ base: "auto", md: "full" }}
                  // filter="blur(1px)"
                  // style={{ backdropFilter: "blur(1px)" }}
                  bgColor={"rgba(255,255,255,0.7)"}
                >
                  <CardBody opacity={1}>
                    <Stack spacing={4}>
                      <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight={"bold"}
                        textAlign={{ base: "left", md: "center" }}
                        my={"4"}
                      >
                        핏트너 사용전
                      </Text>
                      <Stack fontSize={{ base: "sm", md: "md" }}>
                        <Text>광고, 지인소개로 영양제 섭취</Text>
                        <Text>부작용, 독성에 노출</Text>
                        <Text>언제까지 얼마나 섭취해야하는지 기준 없음</Text>
                        <Text>생활습관 교정 어려움</Text>
                        <Text>원하는 효과, 건강증진 어려움</Text>
                        <Text>불안감</Text>
                      </Stack>
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>
              {!isMobile ? (
                <Box position={"relative"}>
                  <Image
                    position={"absolute"}
                    bottom={150}
                    right={-4}
                    transform="rotate(-90deg)"
                    src={require("../Assets/Icon/downArrow.png")}
                  />
                </Box>
              ) : (
                <Box position={"relative"}>
                  <Image
                    position={"absolute"}
                    top={-4}
                    right={"50%"}
                    src={require("../Assets/Icon/downArrow.png")}
                  />
                </Box>
              )}
            </Box>
            <Box
              borderRightRadius={{ base: "none", md: "2xl" }}
              bgSize={"cover"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgImage={require("../Assets/Image/afterImage.jpg")}
            >
              <Stack
                direction={{ base: "column", md: "row" }}
                justify={"space-between"}
                px={8}
                py={6}
              >
                <Card
                  borderRadius={"2xl"}
                  h={{ base: "auto", md: "full" }}
                  // style={{ backdropFilter: "blur(1px)" }}
                  bgColor={"rgba(255,255,255,0.7)"}
                >
                  <CardBody opacity={1}>
                    <Stack spacing={4} fontSize={{ base: "sm", md: "md" }}>
                      <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight={"bold"}
                        textAlign={{ base: "left", md: "center" }}
                        my={"4"}
                      >
                        핏트너 사용후
                      </Text>
                      <HStack>
                        <Icon
                          fontSize={22}
                          as={FaCheckCircle}
                          color={"#27494E"}
                        />
                        <Text>
                          확실한 근거 꼭 <strong>필요한 영양제 섭취</strong>
                        </Text>
                      </HStack>
                      <HStack>
                        <Icon
                          fontSize={22}
                          as={FaCheckCircle}
                          color={"#27494E"}
                        />
                        <Text fontWeight={"bold"}>부작용과 독성 관리</Text>
                      </HStack>
                      <HStack>
                        <Icon
                          fontSize={22}
                          as={FaCheckCircle}
                          color={"#27494E"}
                        />
                        <Text>
                          영양제 섭취에 대한 <strong>정확한 가이드라인</strong>
                        </Text>
                      </HStack>
                      <HStack>
                        <Icon
                          fontSize={22}
                          as={FaCheckCircle}
                          color={"#27494E"}
                        />
                        <Text>
                          일대일 전담 <strong>생활습관 코칭</strong>
                        </Text>
                      </HStack>
                      <HStack>
                        <Icon
                          fontSize={22}
                          as={FaCheckCircle}
                          color={"#27494E"}
                        />
                        <Text>
                          원하는 효과 달성 / 확실한 <strong>건강증진</strong>
                        </Text>
                      </HStack>
                      <HStack>
                        <Icon
                          fontSize={22}
                          as={FaCheckCircle}
                          color={"#27494E"}
                        />
                        <Text>
                          건강을 관리받는 <strong>안도감</strong>
                        </Text>
                      </HStack>
                    </Stack>
                  </CardBody>
                </Card>
                <Box h={{ base: "120px", md: "full" }} />
              </Stack>
            </Box>
          </SimpleGrid>
        </Stack>
      </Center>
    </Container>
  );
};
