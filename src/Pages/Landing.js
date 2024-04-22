import React from "react";
import { LayoutWithFullContentHeight } from "../Marketing/Layouts/LayoutWithFullContentHeight/App";
import { WithImageBackground } from "../Marketing/Heroes/Hero3";
import { LogoGridWithTitle } from "../Marketing/LogoGrid/LogoGridWithTitle/App";
import {
  Image,
  Container,
  Box,
  Flex,
  Stack,
  Heading,
  Table,
  HStack,
  Card,
  Text,
  CardBody,
  Center,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TestimonialWithRating } from "../Marketing/Testimonials/TestimonialWithRating/App";
import { StatsWithDivider } from "../Marketing/Stats/StatsWithDivider/App";
import { HeroWithImage, HeroWithImageReverse } from "../Marketing/Heroes/Hero5";
import { Features } from "../Marketing/Features/App";
import { HeroWithImageTop } from "../Marketing/Heroes/Hero6";
import { HeroWithCropedImage } from "../Marketing/Heroes/Hero1";
import { CheckboxCardGroupContainer } from "../Application/FormElements/CheckboxCardGroup/App";
import { CTA1 } from "../Marketing/CallToActions/CTA1";
import { BlogWithThreeColumns } from "../Marketing/Blog/BlogWithThreeColumns/App";
import { PopupWithImage } from "../E-Commerce/ShopPopup.js/PopupWithImage/App";
import { Navbar } from "../Marketing/Layouts/LayoutWithFullContentHeight/Navbar";
import { MdArrowDownward, MdArrowForward } from "react-icons/md";

function Landing(props) {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <LayoutWithFullContentHeight>
      <Navbar onClick={() => setPopupOpen(true)} />
      <WithImageBackground onClick={() => setPopupOpen(true)} />
      <LogoGridWithTitle />
      <HeroWithImageTop />
      <TestimonialWithRating />
      <StatsWithDivider onClick={() => setPopupOpen(true)} />

      <Box bgColor="gray.100">
        <HeroWithImageReverse onClick={() => setPopupOpen(true)} />
        <HeroWithImage onClick={() => setPopupOpen(true)} />
      </Box>

      <Container py={{ base: "16", md: "24" }}>
        <Center w={"full"} h={{ base: "auto", md: "full" }}>
          <Stack
            w={"full"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={{ base: "8", md: "12" }}
          >
            <Heading size={{ base: "sm", md: "md" }} fontWeight="extrabold">
              당신의 이야기를 들려주세요 나머지는 다 저희가 할게요
            </Heading>
            <Stack
              spacing={{ base: "4", md: "6" }}
              direction={{ base: "column", md: "row" }}
              justifyContent={"center"}
              alignItems={"center"}
              w={"full"}
              h={"full"}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
                direction={{ base: "row", md: "column" }}
              >
                <Image
                  w={{ base: "50%", md: "full" }}
                  src={require("../Assets/file.png")}
                />
                <Text fontSize={{ base: "lg", md: "md" }}>
                  SCI 논문 기반 건강설문으로 당신의 이야기를 들려주세요
                </Text>
              </Stack>
              <Icon
                color="teal.500"
                boxSize={{ base: "10", md: "10" }}
                mt={{ base: "4", md: "0" }}
                as={isMobile ? MdArrowDownward : MdArrowForward}
              />
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
                direction={{ base: "row-reverse", md: "column" }}
              >
                <Image
                  w={{ base: "50%", md: "full" }}
                  src={require("../Assets/thumbsup.png")}
                />
                <Text fontSize={{ base: "lg", md: "md" }}>
                  AI 데이터 분석, 1:1 약사상담을 통해 오직 당신을 위한
                  맞춤영양제를 배송해드립니다
                </Text>
              </Stack>
              <Icon
                color="teal.500"
                boxSize={{ base: "10", md: "10" }}
                mt={{ base: "4", md: "0" }}
                as={isMobile ? MdArrowDownward : MdArrowForward}
              />
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
                direction={{ base: "row", md: "column" }}
              >
                <Image
                  w={{ base: "50%", md: "full" }}
                  src={require("../Assets/lightbulb.png")}
                />
                <Text fontSize={{ base: "lg", md: "md" }}>
                  영양제 섭취 후 효과판단, 지속적인 피드백을 통해 최적의
                  맞춤영양제로 발전시키고 당신의 건강을 바꿉니다.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Center>
      </Container>
      <HeroWithCropedImage onClick={() => setPopupOpen(true)} />
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
            <Stack
              spacing={{ base: "4", md: "6" }}
              direction={{ base: "column", md: "row" }}
              justifyContent={"center"}
              alignItems={"center"}
              w={"full"}
            >
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
              <Icon
                color="teal.500"
                boxSize={{ base: "10", md: "10" }}
                mt={{ base: "4", md: "0" }}
                as={isMobile ? MdArrowDownward : MdArrowForward}
              />
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
            </Stack>
          </Stack>
        </Center>
      </Container>
      <BlogWithThreeColumns onClick={() => setPopupOpen(true)} />
      <Features />
      <CTA1 onClick={() => setPopupOpen(true)} />
      <PopupWithImage isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </LayoutWithFullContentHeight>
  );
}

export default Landing;
