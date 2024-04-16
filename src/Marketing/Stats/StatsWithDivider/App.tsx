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
import { Stat } from "./Stat";
import { stats } from "./data";

export const StatsWithDivider = (props: { onClick: () => void }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="bg.surface">
      <Container py={{ base: "16", md: "24" }}>
        <Stack
          spacing={{ base: "12", md: "16" }}
          textAlign="center"
          align="center"
        >
          <Heading size={{ base: "sm", md: "md" }} fontWeight={"extrabold"}>
            고객 만족도
          </Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            maxW="3xl"
            width="full"
            spacing={{ base: "8", md: "4" }}
            {...(!isMobile ? { divider: <StackDivider /> } : {})}
          >
            {stats.map((stat, id) => (
              <Stat key={id} flex="1" {...stat} />
            ))}
          </Stack>
          <Stack
            spacing={{ base: "4", md: "5" }}
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            maxW="3xl"
          >
            <Button size={{ base: "lg", md: "xl" }} onClick={props.onClick}>
              무료로 내 맞춤 영양제 찾으러 가기
            </Button>
            <Text>같은나이, 다른건강 지금 시작하세요</Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
