import { Box, Container, HStack, Stack, Text } from "@chakra-ui/react";
import { testimonials } from "./data";
import { Testimonial } from "./Testimonial";

export const TestimonialWithRating = () => (
  <Box as="section" py={{ base: "16", md: "24" }}>
    <Stack spacing={0} align="center" py={{ base: "8", md: "12" }}>
      <Box w={"fit-content"} p={2}>
        <HStack spacing={0}>
          <Text
            color="#015A68"
            textStyle={{ base: "3xl", md: "4xl" }}
            fontWeight="medium"
          >
            500,000
          </Text>
          <Text textStyle={{ base: "3xl", md: "4xl" }} fontWeight="medium">
            명이
          </Text>
        </HStack>
        <Box h={6} w={"full"} mt={-5} rounded="full" bg="#BFF6F6"></Box>
      </Box>
      <Text textStyle={{ base: "3xl", md: "4xl" }} fontWeight="medium">
        맞춤 영양제를 추천 받았습니다.
      </Text>
    </Stack>
    <Container>
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "stretch" }}
        spacing="16"
      >
        {testimonials.map((testimonial, id) => (
          <Testimonial key={id} {...testimonial} />
        ))}
      </Stack>
    </Container>
  </Box>
);
