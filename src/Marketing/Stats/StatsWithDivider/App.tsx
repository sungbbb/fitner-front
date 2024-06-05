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
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight={"extrabold"}>
            차이를 느껴보세요
          </Text>
          <Stack w={{ base: "none", md: "full" }}>
            <Stack
              direction={{ base: "column", md: "row" }}
              width="full"
              spacing={{ base: "8", md: "4" }}
              bgColor={"#f8fafa"}
              p={{ base: "24", md: "12" }}
              rounded={8000}
              {...(!isMobile
                ? { divider: <StackDivider borderColor={Gradientline} /> }
                : { divider: <StackDivider /> })}
            >
              {stats.map((stat, id) => (
                <Stat key={id} flex="1" {...stat} />
              ))}
            </Stack>
          </Stack>
          <Stack>
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

export const Gradientline =
  "linear-gradient(to right, #015a68 0%, #015a68 100%, #015a68 50%)";
