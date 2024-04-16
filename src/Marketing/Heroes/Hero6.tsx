import {
  Button,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const HeroWithImageTop = (props: any) => (
  <>
    {/* 이미지나 영상 들어가는 곳 */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.1,
        y: { duration: 1 },
      }}
    >
      <Image
        alt="Placeholder Image"
        src="https://pro.chakra-ui.com/components/marketing/blog/post1.png"
        objectFit="cover"
        // objectPosition="center -140px"
        maxH={{ base: "sm", md: "lg" }}
        width="full"
      />
    </motion.div>
    <Container py={{ base: "16", md: "24" }}>
      <Center>
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={"bold"}>
          핏트너와 함께 차이를 느껴보세요
        </Text>
      </Center>
      {/* <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={16} rowGap={4}>
        <Heading size={{ base: "md", md: "xl" }}>
        핏트너와 함께 차이를 느껴보세요
        </Heading>
        <Stack spacing={{ base: "6", md: "8" }} justifyContent="center">
          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted">
            Choose from over 180+ beautiful and responsive components and build
            your app twice as fast.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing="3">
            <Button size={{ base: "lg", md: "xl" }}>Buy now</Button>
            <Button variant="secondary" size={{ base: "lg", md: "xl" }}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </SimpleGrid> */}
    </Container>
  </>
);
