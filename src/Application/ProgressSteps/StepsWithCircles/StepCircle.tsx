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
      position="relative"  // 자식 요소의 위치를 조정하기 위해 relative 설정
      zIndex="1"  // 타원이 이미지를 덮을 수 있도록 설정
      {...rest}
    >
      <Box
        width="100px"  // 타원의 너비
        height="40px"  // 타원의 높이
        bg={isActive ? '#015A68' : '#FFFFFF'}  // 활성화된 경우 배경색 설정, 완료된 경우 배경색 없음
        borderWidth="2px"  // 테두리 두께 고정
        borderColor={isActive ? '#015A68' : 'inherit'}  // 완료된 경우 테두리 색상 변경
        borderRadius="25px"  // 타원형을 만들기 위한 반지름
        marginX="80px"  // 양옆에 간격 추가
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"  // 타원 내부의 텍스트와 이미지를 상대적으로 배치
      >
        <Text
          color={isActive ? 'white' : '#015A68'}  // 활성화된 경우에만 흰색 글자, 그렇지 않으면 기본 색상
          fontWeight="medium"  // 글자 굵기 설정
          fontFamily="Pretendard, sans-serif"  // Pretendard 폰트 사용
        >
          {label}
        </Text>
      </Box>

      {/* 타원형 아래에 살짝 겹치게 배치될 더 큰 이미지 */}
      <Box
        position="absolute"
        top="360%"  // 타원의 바로 아래에 위치하도록 설정
        left="50%"  // 중앙 정렬
        transform="translate(-50%, -50%)"  // 중앙 정렬 및 살짝 겹치게 조정
        width="250px"  // 직사각형의 너비
        height="300px"  // 직사각형의 높이
        bg="transparent"  // 배경을 투명하게 설정
        borderRadius="8px"  // 둥근 직사각형을 만들기 위한 반지름
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex="-1"  // 이미지가 타원 아래로 가게 하기 위해 음수 zIndex 설정
      >
        <Image
          src={imageSrc}
          alt="Icon"
          boxSize="310px"  // 이미지 크기를 더 크게 조정
        />
      </Box>
    </Box>
  )
}
