import {
  AspectRatio,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Image,
  Img,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SidebarButton } from "../../Application/Sidebars/SidebarWithCollapsable/SidebarButton";
import { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import { gradient } from "../Navbars/NavbarWithCallToAction/App";

export const eightSecrets = [
  {
    id: 1,
    title: "당신의 이야기",
    description:
      "SCI 논문 기반 설문과 건강검진 자료 분석으로 여러분의 정확한 건강상태를 정밀 진단합니다. 현재 복용하는 약물과 질환정보까지 꼭 확인합니다.",
    icon: require("../../Assets/Icon/buttonicon1.png"),
    whiteicon: require("../../Assets/Icon/buttoniconW1.png"),
    image: require("../../Assets/Image/secret1.jpg"),
  },
  {
    id: 2,
    title: "AI 영양 분석",
    description:
      "고객 맞춤 데이터, AI 분석 기술, 약사모니터링을 통해 당신에게 꼭 필요한 성분과 꼭 필요한 양을 분석합니다.",
    icon: require("../../Assets/Icon/buttonicon2.png"),
    whiteicon: require("../../Assets/Icon/buttoniconW2.png"),
    image: require("../../Assets/Image/secret2.jpg"),
  },
  {
    id: 3,
    title: "전문 약사 1대1 상담",
    description:
      "분석 결과를 바탕으로 약사가 1대1 상담을 통해 고객에게 가장 이상적인 맞춤 영양제를 찾아냅니다.",
    icon: require("../../Assets/Icon/buttonicon3.png"),
    whiteicon: require("../../Assets/Icon/buttoniconW3.png"),
    image: require("../../Assets/Image/secret3.jpg"),
  },
  {
    id: 4,
    title: "믿을 수 있는 제품 배송",
    description:
      "핏트너가 엄선한 영양제를 배송해드립니다. 복용법과 주의사항에 대한 자세한 설명도 함께 제공됩니다.",
    icon: require("../../Assets/Icon/buttonicon4.png"),
    whiteicon: require("../../Assets/Icon/buttoniconW4.png"),
    image: require("../../Assets/Image/secret4.jpg"),
  },
  {
    id: 5,
    title: "지속 모니터링 & 발전",
    description:
      "핏트너의 서비스는 여기서 끝나지 않습니다. 주기적인 상담과 건강상태 피드백을 바탕으로 처방을 수정 및 발전시켜 나갑니다.",
    icon: require("../../Assets/Icon/buttonicon5.png"),
    whiteicon: require("../../Assets/Icon/buttoniconW5.png"),
    image: require("../../Assets/Image/secret5.jpg"),
  },
  {
    id: 6,
    title: "완벽한 영양 솔루션",
    description:
      "고객 개개인의 정확한 데이터와 전문가 피드백을 지속 반영하여, 가장 완벽한 영양제 조합을 제공해 나갑니다.",
    icon: require("../../Assets/Icon/buttonicon6.png"),
    whiteicon: require("../../Assets/Icon/buttoniconW6.png"),
    image: require("../../Assets/Image/secret6.jpg"),
  },
  {
    id: 7,
    title: "라이프스타일 동반자",
    description:
      "영양제뿐 아니라 운동, 식단, 생활습관 등 건강한 삶을 위한 라이프스타일을 만들어갑니다.",
    icon: require("../../Assets/Icon/buttonicon7.png"),
    whiteicon: require("../../Assets/Icon/buttoniconW7.png"),
    image: require("../../Assets/Image/secret7.jpg"),
  },
  {
    id: 8,
    title: "건강한 미래 만들기",
    description:
      "핏트너의 완벽한 8단계 솔루션을 따라가면, 고객 여러분의 건강은 과거와 결별하고 새로운 차원으로 바뀔 수밖에 없습니다.",
    icon: require("../../Assets/Icon/buttonicon8.png"),
    whiteicon: require("../../Assets/Icon/buttoniconW8.png"),
    image: require("../../Assets/Image/secret8.jpg"),
  },
];

export const HeroWithCropedImage = (props: { onClick: () => void }) => {
  const [seleted, setSelected] = useState(1);
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container py={{ base: "16", md: "24" }} height="full">
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
        >
          핏트너가 당신의 건강을 바꾸는 8단계 비밀
        </Text>
        <Container>
          <Tabs
            variant={"unstyled"}
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "5", md: "20" }}
            h={{ base: "full", md: "auto" }}
          >
            {!isMobile ? (
              <TabList
                flexDirection={"column"}
                bgColor={"gray.50"}
                borderRadius={"lg"}
                h={"full"}
              >
                {eightSecrets.map((item, id) => (
                  <Tab
                    w={300}
                    key={id}
                    borderRadius={"lg"}
                    onClick={() => setSelected(item.id)}
                    bgColor={seleted === item.id ? "#004A56" : "none"}
                    color={seleted === item.id ? "white" : "black"}
                  >
                    <Flex
                      w={"full"}
                      h={15}
                      justify={"flex-start"}
                      gap={3}
                      align={"center"}
                      fontSize={"xl"}
                      fontWeight={600}
                    >
                      {
                        <Image
                          src={seleted === item.id ? item.whiteicon : item.icon}
                        />
                      }
                      {item.title}
                    </Flex>
                  </Tab>
                ))}
              </TabList>
            ) : (
              <TabList flexWrap={"wrap"} gap={2}>
                {eightSecrets.map((item, id) => (
                  <Tab
                    key={id}
                    borderRadius={"3xl"}
                    fontSize={"sm"}
                    onClick={() => setSelected(item.id)}
                    bgColor={seleted === item.id ? "#004A56" : "gray.100"}
                    color={seleted === item.id ? "white" : "black"}
                  >
                    {item.title}
                  </Tab>
                ))}
              </TabList>
            )}

            <TabPanels h={{ base: "auto", md: 608 }}>
              {eightSecrets.map((item, id) => (
                <TabPanel key={id} p={0}>
                  <Stack spacing={4}>
                    <AspectRatio ratio={16 / 10}>
                      <Image
                        borderRadius={"xl"}
                        h={"full"}
                        src={item.image}
                        objectFit={"cover"}
                      />
                    </AspectRatio>
                    <Box>
                      <Flex py={3} align={"center"} gap={3}>
                        <Image src={item.icon} />
                        <Text
                          fontSize={{ base: "lg", md: "xl" }}
                          fontWeight={"600"}
                        >
                          {item.title}
                        </Text>
                      </Flex>
                      <Text fontSize={{ base: "sm", md: "md" }}>
                        {item.description}
                      </Text>
                    </Box>
                  </Stack>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
          <Stack align={"center"}>
            <Stack
              direction={{ base: "column", md: "row" }}
              justify={"center"}
              // mx={"16"}
              my="10"
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
        </Container>
      </Stack>
    </Container>
  );
};
