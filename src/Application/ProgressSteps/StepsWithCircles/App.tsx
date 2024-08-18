import { Box, Container, HStack } from "@chakra-ui/react";
import { Step } from "./Step";

export const StepsWithCircles = (props: any) => {
  const numberOfSteps = 4;
  const { currentStep } = props;
  return (
    <Box bg="transparent">  {/* 배경색을 투명하게 설정 */}
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="40"
      >
        <HStack spacing="0" justify="space-evenly" flex="1">
          {[...Array(numberOfSteps)].map((_, id) => (
            <Step
              key={id}
              isActive={currentStep === id}
              isCompleted={currentStep > id}
              isLastStep={numberOfSteps === id + 1}
              label={`STEP ${id + 1}`}
            />
          ))}
        </HStack>
      </Container>
    </Box>
  );
};