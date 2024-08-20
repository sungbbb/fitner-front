import { Box, SimpleGrid, Container } from "@chakra-ui/react";
import { Step } from "./Step";

const images = [
  require("../../../Assets/Logo/step1.png"),
  require("../../../Assets/Logo/step2.png"),
  require("../../../Assets/Logo/step3.png"),
  require("../../../Assets/Logo/step4.png"),
];

export const StepsWithCircles = (props: any) => {
  const numberOfSteps = 4;
  const { currentStep } = props;

  return (
    <Box bg="transparent">
      <Container display="flex" justifyContent="center" alignItems="center" minH="40" width="100%">
        <SimpleGrid
          columns={{ base: 2, lg: 4 }}  // 모바일에서는 2개씩, 데스크탑에서는 4개씩 한 줄에 배치
          spacing={{ base: "-10%", lg: "65%" }}  // 간격 설정
          width="100%"
          height={"100%"}
          transform="translateY(150px)"
          marginLeft={{ base: "11%", lg: "-60%" }}  // 왼쪽으로 약간 더 이동시키기 위해 음수 마진 추가
          marginRight={{ base: "17%", lg: "" }}
          justifyContent="center"  // 내용을 가운데 정렬
        >
          {[...Array(numberOfSteps)].map((_, id) => (
            <Step
              key={id}
              isActive={currentStep === id}
              isCompleted={currentStep > id}
              isLastStep={numberOfSteps === id + 1}
              label={`STEP ${id + 1}`}
              imageSrc={images[id]}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
