import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { features } from "./data";
import { MdArrowForward } from "react-icons/md";
import { gradient } from "../Navbars/NavbarWithCallToAction/App";

export const Features = (props: { onClick: () => void }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box as="section" bg="bg.surface">
      <Stack w={"full"} mx={"auto"} py={{ base: "0", md: "24" }}>
        {!isMobile ? (
          <Stack direction={{ base: "column", md: "row" }}>
            <Container flex={1} w={"full"}>
              <Stack
                py={{ base: "3", md: "6" }}
                w={"full"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  fontSize={{ base: "xl", md: "3xl" }}
                  fontWeight={"900"}
                  fontFamily={"Cafe24 Ssurround"}
                  color="#345459"
                >
                  핏트너가 드리는 5가지 약속
                  <Box h={6} w={"full"} mt={-6} rounded="full" bg="#BFF6F6"></Box>
                </Text>
              </Stack>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                columnGap={{ base: 10, md: 16 }}
                rowGap={{ base: 4, md: 8 }}
              >
                {features.map((feature) => (
                  <Stack key={feature.name} spacing={{ base: "4", md: "5" }}>
                    <Square
                      size={{ base: "10", md: "16" }}
                      bg="gray.100"
                      borderRadius="lg"
                      p={4}
                    >
                      <Image src={feature.icon} />
                    </Square>
                    <Stack spacing={{ base: "1", md: "2" }} flex="1">
                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight={"600"}
                      >
                        {feature.name}
                      </Text>
                      <Text fontSize={{ base: "sm", md: "md" }}>
                        {feature.description}
                      </Text>
                    </Stack>
                  </Stack>
                ))}
              </SimpleGrid>
              <Stack
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center", md: "start" }}
                my="10"
                spacing="4"
                px={{ base: "16", md: "0" }}
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
            <Box flex={1}>
              <Image
                borderLeftRadius={"2xl"}
                h={"full"}
                objectFit="cover"
                bgPosition={"center"}
                src={require("../../Assets/Image/promises.jpg")}
              />
            </Box>
          </Stack>
        ) : (
          <Box
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            p={12}
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${require("../../Assets/Image/promises.jpg")})`,
            }}
          >
            <Stack py={6} align={"center"}>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight={"700"}
                  fontFamily={"Cafe24 Ssurround"}
                  color="#345459"
                >
                  핏트너가 드리는 5가지 약속
                  <Box h={6} w={"full"} mt={-6} rounded="full" bg="#BFF6F6"></Box>
                </Text>
            </Stack>
            <SimpleGrid column={1} rowGap={6}>
              {features.map((feature) => (
                <Stack
                  key={feature.name}
                  spacing={4}
                  align={"center"}
                  textAlign={"center"}
                >
                  <Square size={16} bg="gray.100" borderRadius="lg" p={4}>
                    <Image src={feature.icon} />
                  </Square>
                  <Stack spacing={2} flex="1">
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight={"600"}
                    >
                      {feature.name}
                    </Text>
                    <Text fontSize={{ base: "sm", md: "md" }}>
                      {feature.description}
                    </Text>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
            <Stack align={"center"}>
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
          </Box>
        )}
      </Stack>
    </Box>
  );
};
