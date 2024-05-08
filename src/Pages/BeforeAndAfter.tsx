import {
  AspectRatio,
  Card,
  CardBody,
  Center,
  Container,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdArrowDownward, MdArrowForward } from "react-icons/md";

export const BeforeAndAfter = () => {
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
          <Heading size={{ base: "sm", md: "md" }} fontWeight="extrabold">
            이제 정확성의 힘을 경험하세요.
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={0}
            h={300}
            borderRadius={"2xl"}
          >
            <Stack overflow={"hidden"} h={{ base: "auto", md: "full" }}>
              <Image
                src={require("../Assets/Image/beforeImage.jpg")}
                objectFit={"cover"}
                alt="before"
                borderLeftRadius={"2xl"}
              />
              <Card w={"full"} p={{ base: "4", md: "8" }} opacity={0.6}>
                <CardBody>
                  <Stack>
                    <Text>핏트너 사용전</Text>

                    <Text>광고, 지인소개로 영양제 섭취</Text>
                    <Text>부작용, 독성에 노출</Text>
                    <Text>언제까지 얼마나 섭취해야하는지 기준 없음</Text>
                    <Text>생활습관 교정 어려움</Text>
                    <Text>원하는 효과, 건강증진 어려움</Text>
                    <Text>불안감</Text>
                  </Stack>
                </CardBody>
              </Card>
            </Stack>
            <Stack overflow={"hidden"} h={{ base: "auto", md: "full" }}>
              <Image
                src={require("../Assets/Image/afterImage.jpg")}
                objectFit={"cover"}
                alt="after"
                borderRightRadius={"2xl"}
              />
              <Card w={"full"} p={{ base: "4", md: "8" }} opacity={0.6}>
                <CardBody>
                  <Stack>
                    <Text>핏트너 사용후</Text>

                    <Text>확실한 근거 꼭 필요한 영양제 섭취</Text>
                    <Text>부작용과 독성 관리</Text>
                    <Text>영양제 섭취에 대한 정확한 가이드라인</Text>
                    <Text>일대일 전담 생활습관 코칭</Text>
                    <Text>원하는 효과 달성 확실한 건강증진</Text>
                    <Text>건강을 관리받는 안도감</Text>
                  </Stack>
                </CardBody>
              </Card>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Center>
    </Container>
  );
};

{
  /* 
<Card w={"full"} p={{ base: "4", md: "8" }}>
              <CardBody>
                <Stack
                  spacing={{ base: "4", md: "6" }}
                  opacity={0.6}
                  fontSize={{ base: "sm", md: "md" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text>핏트너 사용전</Text>

                  <Text>광고, 지인소개로 영양제 섭취</Text>
                  <Text>부작용, 독성에 노출</Text>
                  <Text>언제까지 얼마나 섭취해야하는지 기준 없음</Text>
                  <Text>생활습관 교정 어려움</Text>
                  <Text>원하는 효과, 건강증진 어려움</Text>
                  <Text>불안감</Text>
                </Stack>
              </CardBody>
            </Card>
            <Card w={"full"} p={{ base: "4", md: "8" }}>
              <CardBody>
                <Stack
                  spacing={{ base: "4", md: "6" }}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight={"bold"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    textDecorationLine={"underline"}
                    textDecorationThickness={"10px"}
                    textUnderlineOffset={"-2px"}
                    textDecorationColor={"#BEE3F8"}
                    textDecorationStyle={"solid"}
                    color={"accent"}
                  >
                    핏트너 사용후
                  </Text>

                  <Text>확실한 근거 꼭 필요한 영양제 섭취</Text>
                  <Text>부작용과 독성 관리</Text>
                  <Text>영양제 섭취에 대한 정확한 가이드라인</Text>
                  <Text>일대일 전담 생활습관 코칭</Text>
                  <Text>원하는 효과 달성 확실한 건강증진</Text>
                  <Text>건강을 관리받는 안도감</Text>
                </Stack>
              </CardBody>
            </Card>
*/
}
