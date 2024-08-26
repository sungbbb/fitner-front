import {
  Box,
  Button,
  Container,
  HStack,
  Image,
} from "@chakra-ui/react";

export const gradient = "linear-gradient(45deg, #015A68 0%, #319694 100%)";

export const NavbarWithCallToAction = ({ ...props }) => {
  return (
    <Box
      as="section"
      position="fixed" // 네비게이션 바를 스크롤 시에도 상단에 고정
      width="100%" // 반응형 디자인을 위해 전체 너비 설정
      maxWidth="1920px" // 최대 너비를 1920px로 제한
      height="80px"
      left="50%" // 중앙 정렬
      top="0px"
      transform="translateX(-50%)" // 중앙 정렬을 위한 변환
      boxSizing="border-box"
      zIndex={999} // 네비게이션 바가 다른 요소들 위에 오도록 설정
    >
      <Container py="4">
        <HStack justify="space-between" align="center">
          <Image
            src={require("../../../Assets/Logo/Horizontal.png")}
            w={"auto"}
            height={"37.9px"}
            alt="logo"
            cursor={"pointer"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <HStack spacing="8">
            <Button
              borderRadius={"full"}
              bgGradient={gradient}
              color="white"
              _hover={{ bgGradient: gradient }}
              _active={{ bgGradient: gradient }}
              size={{ base: "md", md: "lg" }}
              fontSize={{ base: "sm", md: "md" }}
              onClick={props.onClick}
              aria-label="나에게 꼭 맞는 영양제 찾기" // 접근성을 위한 ARIA 레이블 추가
            >
              나에게 꼭 맞는 영양제 찾기
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};