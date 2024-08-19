import { Image, HStack, StackProps } from '@chakra-ui/react'
import { StepCircle } from './StepCircle'

interface StepProps extends StackProps {
  isCompleted: boolean
  isActive: boolean
  isLastStep: boolean
  label: string
  imageSrc: string
}

export const Step = (props: StepProps) => {
  const { isActive, isCompleted, isLastStep, label, imageSrc, ...stackProps } = props

  return (
    <HStack flex={isLastStep ? '0' : '1'} spacing="0" {...stackProps}>
      <StepCircle isActive={isActive} isCompleted={isCompleted} label={label} imageSrc={imageSrc} />
      {!isLastStep && (
        <Image
          position={"absolute"}
          marginLeft="250px"
          marginTop="250px"
          boxSize="20px"
          src={require("../../../Assets/Image/rightArrow.png")}
        />
      )}
    </HStack>
  )
}
