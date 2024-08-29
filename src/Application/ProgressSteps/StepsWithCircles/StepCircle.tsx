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
      transform="translateX(-15px)" // 컴포넌트를 왼쪽으로 이동
    >
      <Box
        width={{ base: "100px", lg: "100px" }}
        height={{ base: "30px", lg: "40px" }}
        bg={isActive ? '#015A68' : '#FFFFFF'}
        borderWidth="2px"
        borderColor={isActive ? '#015A68' : 'inherit'}
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
        mt={{ base: "-18%", lg: "-60px" }}
        zIndex="-1"
        width="250px"
        display="flex" // 추가
        justifyContent="center" // 추가
        alignItems="center" // 추가
      >
        <Image
          src={imageSrc}
          mb={{ base: "-30%", lg: "" }}
          height={{ base: "100%", lg: "300px" }}
          width={{ base: "76%", lg: "300px" }}
        />
      </Box>
    </Box>
  )
}
