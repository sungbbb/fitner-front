import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import { Stat } from "./Stat";
import { gradient } from "../../Navbars/NavbarWithCallToAction/App";

export const StatsWithDivider = (props: { onClick: () => void }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="bg.surface">
      <Container py={{ base: "16", md: "24" }}>
        <Stack
          spacing={{ base: "12", md: "16" }}
          textAlign="center"
          align="center"
          bgImage={require("../../../Assets/Icon/graphArrow.png")}
          backgroundPosition={{ base: "", md: "center calc(100% + 5px)" }} // 반응형 배경 위치 설정
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight={"extrabold"}
            fontFamily={"Cafe24 Ssurround"}
            color="#345459"
          >
            이제 차이를 느껴보세요!
            <Box h={6} w={"full"} mt={-7} rounded="full" bg="#BFF6F6"></Box>
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            width={{ base: "55%", md: "full" }}
            spacing={{ base: "8", md: "4" }}
            bgColor={{ base: "rgba(248, 250, 250, 0.5)", md: "#f8fafa" }}
            p={{ base: "10", md: "8" }}
            rounded={8000}
            divider={
              !isMobile ? (
                <StackDivider borderColor="Gradientline" />
              ) : (
                <StackDivider />
              )
            }
          >
            <Box
              flex="1"
            >
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight={"700"}
                fontFamily={"Cafe24 Ssurround"}
                color="#015A68"
              >
                92%의 고객님들이 핏트너의 서비스에 만족하고 계십니다!
              </Text>
            </Box>
          </Stack>
          <Stack>
            <Button
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
    </Box>
  );
};

export const Gradientline =
  "linear-gradient(to right, #015a68 0%, #015a68 100%, #015a68 50%)";
