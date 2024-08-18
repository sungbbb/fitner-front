import { Box, Icon, SquareProps, Text } from '@chakra-ui/react'
import { HiCheck } from 'react-icons/hi'

interface StepCircleProps extends SquareProps {
  isCompleted: boolean
  isActive: boolean
  label: string  // 타원 안에 표시할 텍스트
}

export const StepCircle = (props: StepCircleProps) => {
  const { isCompleted, isActive, label, ...rest } = props

  return (
    <Box
      width="100px"  // 타원의 너비
      height="40px"  // 타원의 높이
      bg={isCompleted ? 'accent' : 'inherit'}  // 완료된 경우 배경색 설정
      borderWidth={isCompleted ? '0' : '2px'}  // 완료된 경우 테두리 없음
      borderColor={isActive ? 'accent' : 'inherit'}  // 활성화된 경우 테두리 색상
      borderRadius="25px"  // 타원형을 만들기 위한 반지름
      marginX="30px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {isCompleted ? (
        <Icon as={HiCheck} color="fg.inverted" boxSize="5" />  // 완료된 경우 체크 아이콘 표시
      ) : (
        <Text color={isActive ? 'accent' : 'black'} fontWeight="bold">
          {label}
        </Text>
      )}
    </Box>
  )
}
