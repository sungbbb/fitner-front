import { Image, HStack, StackProps, useMediaQuery } from '@chakra-ui/react'
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

  // 모바일 화면 크기인지 확인
  const [isMobile] = useMediaQuery("(max-width: 990px)")

  return (
    <HStack
      flex={isLastStep ? '0' : '1'}
      spacing="0"
      justifyContent="center" // 수평 중앙 정렬
      alignItems="center" // 수직 중앙 정렬
      position="relative" // 상대적 위치로 설정하여 내부 요소의 배치를 조정할 수 있도록 함
      {...stackProps}
    >
      <StepCircle isActive={isActive} isCompleted={isCompleted} label={label} imageSrc={imageSrc} />
      {!isLastStep && (!isMobile || label !== "STEP 2") && (
        <Image
          position={"absolute"}
          marginLeft={{ base: "167px", lg: "205px" }}
          marginTop={{ base: "45px", lg: "-10px" }}
          boxSize="20px"
          zIndex="100"
          src={require("../../../Assets/Image/rightArrow.png")}
        />
      )}
    </HStack>
  )
}
