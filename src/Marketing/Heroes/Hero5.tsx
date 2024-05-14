import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import { gradient } from "../Navbars/NavbarWithCallToAction/App";

export const HeroWithImage = (props: { onClick: () => void }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container py={{ base: "16", md: "24" }}>
      <Stack gap={{ base: "24", md: "0" }}>
        <Stack
          spacing={0}
          direction={{ base: "column", md: "row" }}
          zIndex={111}
        >
          <Stack
            spacing={{ base: "8", md: "12" }}
            justifyContent="center"
            borderTopLeftRadius={8000}
            borderTopRightRadius={{ base: 8000, md: "none" }}
            borderBottomLeftRadius={{ base: "none", md: 8000 }}
            bgColor={"#f8f9f8"}
            flex={1}
          >
            <Stack
              spacing={"4"}
              zIndex={111}
              p={16}
              mt={{ base: 16, md: "0" }}
              ml={{ base: 0, md: 12 }}
            >
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
                당신의 영양제는 이것이 문제입니다.
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                누구는 이게 좋다 누구는 이게 좋다. 좋다는 영양제를 하루에도 한
                움큼씩 먹는다 해도 건강은 바뀌지 않습니다. 내 몸을 좋게 만들고
                있는 것이 맞는지 아닌지도 모르는 체 그저 맹목적으로 남들이
                먹으니까, 지인이 추천해서, 아내가 시켜서 먹는 영양제로는 당신은
                결코 건강해질 수 없습니다.
              </Text>
            </Stack>
          </Stack>
          <AspectRatio flex={1} ratio={{ base: 1, md: 2 }}>
            <Image
              borderBottomRightRadius={8000}
              borderTopRightRadius={{ base: "none", md: 8000 }}
              borderBottomLeftRadius={{ base: 8000, md: "none" }}
              objectFit="cover"
              src={require("../../Assets/Image/pills1.png")}
              // src="https://tinyurl.com/yeyjvptc"
              alt="Lady at work"
            />
          </AspectRatio>
        </Stack>
        <Center position={"relative"}>
          <Box h={{ base: "auto", md: "300px" }}>
            <Image
              src={require("../../Assets/Image/illust2.png")}
              w={{ base: "auto", md: "600px" }}
              h={{ base: "auto", md: "500px" }}
              alt="illustration"
              position={"absolute"}
              bottom={{ base: -36, md: -3 }}
              right={{ base: 0, md: 0 }}
              objectFit={"cover"}
            />
            <Image
              src={require("../../Assets/Image/lilust1.png")}
              h={{ base: "auto", md: "360px" }}
              alt="illustration"
              position={"absolute"}
              bottom={{ base: -36, md: -3 }}
              right={{ base: 0, md: 0 }}
              objectFit={"cover"}
              zIndex={10}
            />
          </Box>
        </Center>
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          spacing={0}
          zIndex={111}
        >
          <AspectRatio flex={1} ratio={{ base: 1, md: 2 }}>
            <Image
              borderBottomLeftRadius={8000}
              borderBottomRightRadius={{ base: 8000, md: "none" }}
              borderTopLeftRadius={{ base: "none", md: 8000 }}
              objectFit="cover"
              // src="https://tinyurl.com/yeyjvptc"
              src={require("../../Assets/Image/pills2.png")}
              alt="Lady at work"
            />
          </AspectRatio>
          <Stack
            flex={1}
            spacing={{ base: "8", md: "12" }}
            justifyContent="center"
            bgColor={"#f8f9f8"}
            borderTopRightRadius={8000}
            borderBottomRightRadius={{ base: "none", md: 8000 }}
            borderTopLeftRadius={{ base: 8000, md: "none" }}
          >
            <Stack spacing={"4"} p={16} mt={{ base: 16, md: "0" }}>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
                핏트너는 당신의 문제를 해결합니다.
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                핏트너는 당신을 분석하고 근거 중심으로 고도화된 AI 데이터 분석,
                그리고 1:1 약사 상담을 통해 세상의 모든 영양제 중 당신에게 꼭
                필요한 영양제를 추천해드립니다. 그리고 지속적인 상담을 통해
                끝까지 당신과 함께 건강의 대 변혁을 이끌어 갈 것입니다.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack align={"center"} spacing={0}>
        <Stack direction={{ base: "column", md: "row" }} my="10">
          <Button
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
  );
};

export const HeroWithImageReverse = (props: { onClick: () => void }) => (
  <Container py={{ base: "16", md: "24" }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={0}>
      <AspectRatio ratio={2}>
        <Image
          borderLeftRadius={8000}
          objectFit="cover"
          // src="https://tinyurl.com/yeyjvptc"
          // src={require("../../Assets/water.jpg")}
          alt="Lady at work"
        />
      </AspectRatio>
      <Stack
        spacing={{ base: "8", md: "12" }}
        justifyContent="center"
        borderRightRadius={8000}
        bgColor={"#f8f9f8"}
      >
        <Stack spacing={"4"} p={"16"}>
          <Heading size={{ base: "sm", md: "sm" }}>
            핏트너는 당신의 문제를 해결합니다.
          </Heading>
          <Text>
            핏트너는 당신을 분석하고 근거 중심으로 고도화된 AI 데이터 분석,
            그리고 1:1 약사 상담을 통해 세상의 모든 영양제 중 당신에게 꼭 필요한
            영양제를 추천해드립니다. 그리고 지속적인 상담을 통해 끝까지 당신과
            함께 건강의 대 변혁을 이끌어 갈 것입니다.
          </Text>
        </Stack>
      </Stack>
    </SimpleGrid>
    <Stack
      direction={{ base: "column", md: "row" }}
      justify={"center"}
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
  </Container>
);
