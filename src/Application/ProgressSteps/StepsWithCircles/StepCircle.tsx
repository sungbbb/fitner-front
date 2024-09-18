import { Box, Image, SquareProps, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

interface StepCircleProps extends SquareProps {
  isCompleted: boolean
  isActive: boolean
  label: string
  imageSrc: string
}

export const StepCircle = (props: StepCircleProps) => {
  const { isCompleted, isActive, label, imageSrc, ...rest } = props
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/find/${parseInt(label) - 1}`);
  };

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
          cursor="pointer"
          onClick={handleClick}
        >
          {`STEP ${label}`}
        </Text>
      </Box>

      <Box
        position="relative"
        mt={{ base: "-18%", lg: "-60px" }}
        zIndex="-1"
        width="250px"
        display="flex" // 추가
        justifyContent="center" // 추가
        alignItems="center" // 추가
      >
        {/* 라벨이 활성화되었을 때만 테두리 표시 */}
        {isActive && (
          <Box
            position="absolute"
            border={'3px solid #015A68'} // 테두리 두께
            borderRadius="22px" // 테두리 둥글기
            top="20px"
            width="200px"
            height="249px"
            transition="border 0.3s ease"
          />
        )}
        <Image
          src={imageSrc}
          cursor="pointer"
          onClick={handleClick}
          mb={{ base: "-30%", lg: "" }}
          height={{ base: "100%", lg: "300px" }}
          width={{ base: "76%", lg: "300px" }}
        />
      </Box>
    </Box>
  )
}
