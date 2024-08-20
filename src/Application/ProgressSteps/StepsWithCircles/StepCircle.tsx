import { Box, Image, SquareProps, Text } from '@chakra-ui/react'

interface StepCircleProps extends SquareProps {
  isCompleted: boolean
  isActive: boolean
  label: string
  imageSrc: string
}

export const StepCircle = (props: StepCircleProps) => {
  const { isCompleted, isActive, label, imageSrc, ...rest } = props

  return (
    <Box
      position="relative"
      zIndex="1"
      {...rest}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        width={{ base: "100px", lg: "100px" }}
        height={{ base: "30px", lg: "40px" }}
        bg={isActive ? '#015A68' : '#FFFFFF'}
        borderWidth="2px"
        borderColor={isActive ? '#015A68' : 'inherit'}
        marginLeft={{ base: "-25%", lg: "0" }}
        borderRadius="25px"
        justifyContent="center"
        alignItems="center"
        position="relative"
        placeItems="center"
        display="grid"
        transform={{ base: "translateY(-12px)" }}
      >
        <Text
          color={isActive ? 'white' : '#015A68'}
          fontWeight="medium"
          fontFamily="Pretendard"
        >
          {label}
        </Text>
      </Box>

      {/* 타원형 아래에 이미지 배치 */}
      <Box
        position="relative"
        mt="-50px"  // 타원형과 이미지 간의 간격 크게 조정
        zIndex="-1"
        width="250px"
      >
        <Image
          src={imageSrc}
          height={{ base: "250px", lg: "300px" }}
          width={{ base: "180px", lg: "300px" }}
        />
      </Box>
    </Box>
  )
}
