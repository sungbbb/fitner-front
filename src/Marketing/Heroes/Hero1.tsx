import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";

export const eightSecrets = [
  {
    id: 1,
    title: "당신의 이야기 (My Story)",
    description:
      "SCI 논문 기반 설문과 건강검진 자료 분석으로 여러분의 정확한 건강상태를 정밀 진단합니다. 현재 복용하는 약물과 질환정보까지 꼭 확인합니다.",
  },
  {
    id: 2,
    title: "AI 영양 분석 (AI Nutrition Analysis)",
    description:
      "고객 맞춤 데이터, AI 분석 기술, 약사모니터링을 통해 당신에게 꼭 필요한 성분과 꼭 필요한 양을 분석합니다.",
  },
  {
    id: 3,
    title: "전문 약사 1대1 상담 (Professional Pharmacist Consultation)",
    description:
      "분석 결과를 바탕으로 약사가 1대1 상담을 통해 고객에게 가장 이상적인 맞춤 영양제를 찾아냅니다.",
  },
  {
    id: 4,
    title: "믿을 수 있는 제품 배송 (Reliable Product Delivery)",
    description:
      "핏트너가 엄선한 영양제를 배송해드립니다. 복용법과 주의사항에 대한 자세한 설명도 함께 제공됩니다.",
  },
  {
    id: 5,
    title: "지속 모니터링 & 발전 (Continuous Monitoring & Improvement)",
    description:
      "핏트너의 서비스는 여기서 끝나지 않습니다. 주기적인 상담과 건강상태 피드백을 바탕으로 처방을 수정 및 발전시켜 나갑니다.",
  },
  {
    id: 6,
    title: "완벽한 영양 솔루션 (Perfect Nutrition Solution)",
    description:
      "고객 개개인의 정확한 데이터와 전문가 피드백을 지속 반영하여, 가장 완벽한 영양제 조합을 제공해 나갑니다.",
  },
  {
    id: 7,
    title: "라이프스타일 동반자 (Lifestyle Companion)",
    description:
      "영양제뿐 아니라 운동, 식단, 생활습관 등 건강한 삶을 위한 라이프스타일을 만들어갑니다.",
  },
  {
    id: 8,
    title: "건강한 미래 만들기 (Building a Healthy Future)",
    description:
      "핏트너의 완벽한 8단계 솔루션을 따라가면, 고객 여러분의 건강은 과거와 결별하고 새로운 차원으로 바뀔 수밖에 없습니다.",
  },
];

export const HeroWithCropedImage = (props: { onClick: () => void }) => (
  <Box
    position="relative"
    // height={{ lg: "720px" }}
  >
    <Container py={{ base: "16", md: "24" }} height="full">
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        spacing={{ base: "16" }}
        align={{ base: "center", lg: "center" }}
        height="full"
      >
        <Stack spacing={{ base: "8", md: "12" }}>
          {/* <Badge
              variant="pill"
              colorScheme="blue"
              alignSelf="start"
              size={{ base: "md", md: "lg" }}
            >
              New components available
            </Badge> */}
          <Stack
            spacing={{ base: "4", md: "6" }}
            maxW={{ md: "xl", lg: "md", xl: "xl" }}
          >
            <Heading size={{ base: "md", md: "sm" }}>
              핏트너가 당신의 건강을 바꾸는 8단계 비밀
            </Heading>
            {eightSecrets.map((secret) => (
              <Text color="fg.muted" key={secret.id} fontSize={"sm"}>
                {secret.id}. {secret.title} : {secret.description}
              </Text>
            ))}
            <Stack my="2" spacing="4" align={{ base: "center", md: "start" }}>
              <Box>
                <Button size="lg" fontSize="md" onClick={props.onClick}>
                  무료로 내 맞춤 영양제 찾으러 가기
                </Button>
              </Box>

              <Text>당신의 최고의 건강상태를 느껴보세요</Text>
            </Stack>
          </Stack>
        </Stack>
        <Box
          pos={{ lg: "absolute" }}
          right="0"
          bottom="0"
          w={{ base: "full", lg: "50%" }}
          height={{ base: "96", lg: "full" }}
          sx={{
            clipPath: { lg: "polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          }}
        >
          <Img
            boxSize="full"
            objectFit="cover"
            src="https://tinyurl.com/yeyjvptc"
            alt="Lady at work"
          />
        </Box>
      </Stack>
    </Container>
  </Box>
);
