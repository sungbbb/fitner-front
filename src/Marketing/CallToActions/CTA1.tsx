import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const CTA1 = (props: { onClick: () => void }) => (
  <Box as="section" bg="bg.surface">
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "8", md: "10" }}>
        <Stack spacing={{ base: "4", md: "5" }} align="center">
          <Heading size={{ base: "sm", md: "md" }} fontWeight="extrabold">
            신청서 작성하기
          </Heading>
          {/* <Text color="fg.muted" maxW="2xl" textAlign="center" fontSize="xl">
            With this beautiful and responsive React components you will realize
            your next project in no time.
          </Text> */}
        </Stack>
        <Stack
          spacing="3"
          direction={{ base: "column", sm: "row" }}
          justify="center"
        >
          <Button variant="secondary" size="xl" onClick={scrollToTop}>
            더 알아보기
          </Button>
          <Button onClick={props.onClick} size="xl">
            무료로 내 맞춤 영양제 찾으러 가기
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
