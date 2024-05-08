import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { posts } from "./data";
import { MdArrowForward } from "react-icons/md";
import { gradient } from "../../Navbars/NavbarWithCallToAction/App";

export const BlogWithThreeColumns = (props: { onClick: () => void }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="bg.surface">
      <Container py={{ base: "16", md: "24" }}>
        {!isMobile ? (
          <Stack>
            <Center>
              <Image
                w={800}
                src={require("../../../Assets/Image/myLife.jpg")}
              />
            </Center>
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
          </Stack>
        ) : (
          <Stack align={"center"} spacing={0}>
            <Box px={"auto"}>
              <Text fontSize={"md"} fontWeight={"semibold"} py={2}>
                고민할 필요가 없는 최적의 영양제
              </Text>
              <Text fontSize={"sm"}>
                핏트너는 당신의 건강상태, 먹는 약, 원하는 효과,
                <br />
                생활습관 뿐만 아니라 유전자와 마이크로바이옴까지
                <br />
                종합적으로 분석하여 의학적 근거에 기반한
                <br />
                최적의 영양제를 추천해 드립니다.
              </Text>
            </Box>
            <Image src={require("../../../Assets/Image/mobileMyLIfe.jpg")} />
            <HStack justify={"space-between"} mt={-8}>
              <Box flex={1}>
                <Text fontSize={"md"} fontWeight={"semibold"} py={2}>
                  당신만의 주치 약사가 생깁니다.
                </Text>
                <Text fontSize={"sm"}>
                  약을 먹는 분들께는 전문 약사가 1:1로 관리해 드리므로 부작용을
                  최소화하고 효과를 극대화할 수 있습니다.
                </Text>
              </Box>
              <Box flex={1} textAlign={"right"}>
                <Text fontSize={"md"} fontWeight={"semibold"} py={2}>
                  하루하루 더 건강해지는 삶
                </Text>
                <Text fontSize={"sm"}>
                  우리 몸이 필요로 하는 영양소를 골고루 섭취하고, 건강한 생활
                  습관을 실천하면서 전문가의 코칭을 받는다면 어제보다 더
                  건강해질 수밖에 없습니다.
                </Text>
              </Box>
            </HStack>
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
        )}
      </Container>
    </Box>
  );
};
