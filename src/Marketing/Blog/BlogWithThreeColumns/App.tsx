import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { posts } from "./data";

export const BlogWithThreeColumns = (props: { onClick: () => void }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="bg.surface">
      <Container py={{ base: "16", md: "24" }}>
        <Stack spacing={{ base: "12", md: "16" }}>
          <Stack direction="row" justify="space-between">
            <Stack spacing={{ base: "4", md: "5" }}>
              <Stack spacing="3">
                {/* <Text
                  color="accent"
                  fontWeight="semibold"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Our Blog
                </Text> */}
                <Heading size={{ base: "sm", md: "md" }} fontWeight="extrabold">
                  핏트너와 함께라면 당신의 인생은 이렇게 바뀝니다
                </Heading>
              </Stack>
              {/* <Text color="fg.muted" fontSize={{ base: "lg", md: "xl" }}>
                Ice cream pudding dragée macaroon donut marzipan chocolate
              </Text> */}
            </Stack>

            {/* {!isMobile && <Button size="xl">Show all</Button>} */}
          </Stack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={{ base: "12", lg: "8" }}
          >
            {posts.map((post) => (
              <Link key={post.id} _hover={{ textDecor: "none" }} role="group">
                <Stack spacing="8">
                  <Box overflow="hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width="full"
                      height="15rem"
                      objectFit="cover"
                      transition="all 0.2s"
                      _groupHover={{ transform: "scale(1.05)" }}
                    />
                  </Box>
                  <Stack spacing="3">
                    {/* <Text fontSize="sm" fontWeight="semibold" color="accent">
                      {post.category}
                    </Text> */}
                    <Heading size="xs">{post.title}</Heading>
                    <Text color="fg.muted">{post.excerpt}</Text>
                  </Stack>
                  {/* <HStack>
                    <Avatar src={post.author.avatarUrl} boxSize="10" />
                    <Box fontSize="sm">
                      <Text fontWeight="medium">{post.author.name}</Text>
                      <Text color="fg.muted">{post.publishedAt}</Text>
                    </Box>
                  </HStack> */}
                </Stack>
              </Link>
            ))}
          </SimpleGrid>
          <Stack my="2" spacing="4" align={"center"}>
            <Box>
              <Button size="lg" fontSize="md" onClick={props.onClick}>
                무료로 내 맞춤 영양제 찾으러 가기
              </Button>
            </Box>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              textDecorationLine={"underline"}
              textDecorationThickness={"10px"}
              textUnderlineOffset={"-2px"}
              textDecorationColor={"#BEE3F8"}
              textDecorationStyle={"solid"}
            >
              영양제는 잘 골라야 합니다
            </Text>
          </Stack>

          {/* {isMobile && <Button size="xl">Show all</Button>} */}
        </Stack>
      </Container>
    </Box>
  );
};
