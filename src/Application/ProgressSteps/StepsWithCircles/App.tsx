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
          gap={{ base: "16",lg: "60%" }}
          columns={{ base: 2, lg: 4 }}  // 모바일에서 2열, 데스크탑에서 4열
          spacing="10px"  // 각 항목 간격
          transform={{ base: "translate(10px, 150px)", lg: "translate(-140px, 150px)" }}
          maxWidth="100%"  // 최대 너비 설정
          mx="auto"  // 가운데 정렬
          mb={{ base: "40%", lg: "30%" }}
          mt={{ base: "-10%"}}
        >
          {[...Array(numberOfSteps)].map((_, id) => (
            <Box key={id} display="flex" justifyContent="center">
              <Step
                isActive={currentStep === id}
                isCompleted={currentStep > id}
                isLastStep={numberOfSteps === id + 1}
                label={`STEP ${id + 1}`}
                imageSrc={images[id]}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
