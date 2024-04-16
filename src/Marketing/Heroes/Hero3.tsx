import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

export const WithImageBackground = (props: { onClick: () => void }) => {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="32" position="relative" zIndex={1}>
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
          <Box
            maxW={{ base: "xl", md: "7xl" }}
            mx="auto"
            px={{ base: "6", md: "8" }}
            color="white"
          >
            <Box maxW="xl">
              <Stack fontSize={{ base: "sm", md: "lg" }} mt="4" maxW="lg">
                <Text>
                  수많은 영양제 광고, 지인추천 영양제를 드시고 건강이
                  좋아지셨나요?
                </Text>
                <Text>당신의 몸이 간절히 원하는 영양제는 따로 있습니다.</Text>
              </Stack>
              <Heading
                as="h1"
                size={{ base: "md", md: "3xl" }}
                mt="4"
                fontWeight="extrabold"
              >
                <Text>당신의 건강을 바꿀</Text>
                <Text>맞춤 영양제를 드립니다</Text>
              </Heading>
              <Stack fontSize={{ base: "sm", md: "lg" }} mt="4" maxW="lg">
                <Text>
                  모두에게 좋은 약은 없습니다. 나에게 좋은 약은 있습니다.
                </Text>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  my="2"
                  spacing="4"
                >
                  <Button
                    colorScheme="blue"
                    px="8"
                    rounded="full"
                    size="lg"
                    fontSize="md"
                    fontWeight="bold"
                    onClick={props.onClick}
                  >
                    무료로 내 맞춤 영양제 찾으러 가기
                  </Button>
                  {/* <HStack
                as="a"
                transition="background 0.2s"
                justify={{ base: "center", md: "flex-start" }}
                href="#"
                color="white"
                rounded="full"
                fontWeight="bold"
                px="6"
                py="3"
                _hover={{ bg: "whiteAlpha.300" }}
              >
                <span>Talk to Sales</span>
                <HiChevronRight />
              </HStack> */}
                </Stack>
                <Text>당신의 건강을 바꿀 첫걸음을 바로 시작하세요</Text>
              </Stack>
            </Box>
          </Box>
        </motion.div>
      </Box>
      {/* BackgroudImage */}
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  );
};
