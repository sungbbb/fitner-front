import {
  Box,
  Button,
  Circle,
  Container,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { testimonials } from "./data";
import { Testimonial } from "./Testimonial";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const TestimonialWithRating = () => (
  <Box as="section" py={{ base: "16", md: "24" }}>
    <Stack spacing={0} align="center" py={{ base: "8", md: "12" }}>
      <Box w={"fit-content"} p={2} fontWeight={"600"}>
        <HStack spacing={0}>
          <Text
            color="#345459"
            textStyle={{ base: "2xl", md: "4xl" }}
            fontFamily={"Cafe24 Ssurround"}
            fontWeight={"800"}
            fontStyle="normal"
          >
            당신은
          </Text>
        </HStack>
      </Box>
      <Text
        textStyle={{ base: "2xl", md: "4xl" }}
        fontWeight={"800"}
        color="#345459"
        fontFamily={"Cafe24 Ssurround"}
        fontStyle="normal"
      >
        더 건강해 질 수 있습니다.
        <Box h={6} w={"full"} mt={-6} rounded="full" bg="#BFF6F6"></Box>
      </Text>
    </Stack>
    <Container>
      <HStack spacing={4}>
        <Circle
          bgColor={"white"}
          size="12"
          display={{ base: "none", lg: "flex" }}
        >
          <FaChevronLeft color="#015A68" />
        </Circle>
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ base: "center", lg: "stretch" }}
          spacing="16"
          px={{ base: "8", lg: "0" }}
        >
          {testimonials.map((testimonial, id) => (
            <Testimonial key={id} {...testimonial} />
          ))}
        </Stack>
        <Circle
          bgColor={"white"}
          size="12"
          display={{ base: "none", lg: "flex" }}
        >
          <FaChevronRight color="#015A68" />
        </Circle>
      </HStack>
      <Stack my={10} align={"center"}>
        <Button
          size={"lg"}
          rounded="full"
          variant={"outline"}
          px={12}
          colorScheme="gray"
          bgColor={"white"}
          border={"1px solid #d9d9d9"}
        >
          더보기
        </Button>
      </Stack>
    </Container>
  </Box>
);
