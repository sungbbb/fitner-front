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
import { stats } from "./data";
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
        >
          <Heading size={{ base: "sm", md: "md" }} fontWeight={"extrabold"}>
            고객 만족도
          </Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            width="full"
            spacing={{ base: "8", md: "4" }}
            bgColor={"#f8fafa"}
            p={{ base: "6", md: "10" }}
            rounded={8000}
            {...(!isMobile ? { divider: <StackDivider /> } : {})}
          >
            {stats.map((stat, id) => (
              <Stat key={id} flex="1" {...stat} />
            ))}
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} my="2" spacing="4">
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
    </Box>
  );
};
