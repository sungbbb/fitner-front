import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export const HeroWithImage = (props: { onClick: () => void }) => (
  <Container py={{ base: "16", md: "24" }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
      <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
        <Stack spacing={{ base: "4", md: "6" }}>
          <Heading size={{ base: "md", md: "md" }}>
            핏트너는 당신의 문제를 해결합니다
          </Heading>
          <Stack fontSize={{ base: "lg", md: "sm" }} color="fg.muted">
            <Text>세상에 나와 똑같은 사람은 없습니다.</Text>
            <Text>내가 먹는 영양제도 그래야 합니다.</Text>
            <Text>
              우리는 모두 다른 건강상태, 기저질환, 먹는약, 유전자, 생활습관를
              가지고 있습니다.
            </Text>
            <Text>
              핏트너는 당신을 분석하고 근거 중심으로 고도화된 AI 데이터 분석,
              그리고 1:1 약사 상담을 통해 세상의 모든 영양제 중 당신에게 꼭
              필요한 영양제를 추천해드립니다.
            </Text>
            <Text>
              그리고 지속적인 상담을 통해 끝까지 당신과 함께 건강의 대 변혁을
              이끌어 갈 것입니다.
            </Text>
          </Stack>
        </Stack>
        {/* <Stack spacing="3">
          <Stack direction={{ base: "column", md: "row" }} spacing="3">
            <Input
              placeholder="Enter your email"
              size={{ base: "lg", md: "xl" }}
              maxW={{ lg: "xs" }}
            />
            <Button size={{ base: "lg", md: "xl" }}>Sign Up</Button>
          </Stack>
          <Text textStyle="xs" color="fg.subtle">
            By signing up, you accept our{" "}
            <Link href="#">Terms and Conditions.</Link>
          </Text>
        </Stack> */}
      </Stack>
      <AspectRatio ratio={1}>
        <Image
          objectFit="cover"
          src="https://tinyurl.com/yeyjvptc"
          alt="Lady at work"
        />
      </AspectRatio>
    </SimpleGrid>
    <Stack align={"center"} fontSize={{ md: "lg" }} mt="10">
      <Text>
        이제 모두를 위해 만들어진 두루뭉술한 영양제와는 하루빨리 작별하고
      </Text>
      <Text>내 몸의 건강한 혁명, 핏트너를 시작하세요</Text>
      <Stack direction={{ base: "column", md: "row" }} my="2" spacing="4">
        <Button size="lg" fontSize="md" onClick={props.onClick}>
          무료로 내 맞춤 영양제 찾으러 가기
        </Button>
      </Stack>
    </Stack>
  </Container>
);

export const HeroWithImageReverse = (props: { onClick: () => void }) => (
  <Container py={{ base: "16", md: "24" }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
      <AspectRatio ratio={1}>
        <Image
          objectFit="cover"
          src="https://tinyurl.com/yeyjvptc"
          alt="Lady at work"
        />
      </AspectRatio>
      <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
        <Stack spacing={{ base: "4", md: "6" }}>
          <Heading size={{ base: "md", md: "md" }}>
            당신의 영양제는 이것이 문제입니다.
          </Heading>
          <Stack fontSize={{ base: "lg", md: "sm" }} color="fg.muted">
            <Text>영양제를 드시고 더 건강해 지고 싶으신가요?</Text>
            <Text>하지만 무슨 영양제를 드셔야할지 모르시겠나요?</Text>
            <Text>
              매일매일 쏟아지는 영양제 광고와 상반된 주장에 혼란스럽지
              않으신가요?
            </Text>
            <Text>
              누구는 이게 좋다 누구는 이게 좋다. 좋다는 영양제를 하루에도 한
              움큼씩 먹는다 해도 건강은 바뀌지 않습니다.
            </Text>
            <Text>
              내 몸을 좋게 만들고 있는 것이 맞는지 아닌지도 모르는 체 그저
              맹목적으로 남들이 먹으니까, 지인이 추천해서, 아내가 시켜서 먹는
              영양제로는 당신은 결코 건강해질 수 없습니다
            </Text>
          </Stack>
        </Stack>
        {/* <Stack spacing="3">
          <Stack direction={{ base: "column", md: "row" }} spacing="3">
            <Input
              placeholder="Enter your email"
              size={{ base: "lg", md: "xl" }}
              maxW={{ lg: "xs" }}
            />
            <Button size={{ base: "lg", md: "xl" }}>Sign Up</Button>
          </Stack>
          <Text textStyle="xs" color="fg.subtle">
            By signing up, you accept our{" "}
            <Link href="#">Terms and Conditions.</Link>
          </Text>
        </Stack> */}
      </Stack>
    </SimpleGrid>
  </Container>
);
