import React, { useEffect } from "react";
import { addDocument, getAllDoc } from "../Firebase/firebase_func";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
  useToast,
  Box,
  VStack
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { auth } from "../Firebase/firebase_conf";
import { useNavigate } from "react-router-dom";

function Survey(props) {
  const navigate = useNavigate();
  const toast = useToast();
  const [survey, setSurvey] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [leftPercent, setLeftPercent] = React.useState(0);
  const [rightPercent, setRightPercent] = React.useState(0);

  useEffect(() => {
    getAllDoc("survey").then((data) => {
      setSurvey(data);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    for (let i = 0; i < survey.length; i++) {
      if (survey[i].required && !survey[i].answer) {
        toast({
          title: survey[i].question,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        setIndex(i);
        return;
      }
    }

    addDocument("survey_result", {
      uid: auth.currentUser.uid,
      answer: survey,
      createdAt: new Date(),
    })
      .then((data) => {
        console.log(data, " 설문이 제출되었습니다!");
        alert("설문이 제출되었습니다.");
        navigate("/find/1", { state: { isSurvey: true } });
      })
      .catch((err) => {
        console.log(err);
        alert("설문이 제출되지 않았습니다. 다시 시도해주세요.");
      });
  };

  function getPercent() {
    let leftCount = 0;
    let rightCount = 0;

    for (let i = 0; i < survey.length; i++) {
      if (i < 10 && survey[i].answer) {
        leftCount++;
      } else if (i >= 10 && survey[i].answer) {
        rightCount++;
      }
    }

    const leftPercent = (leftCount / Math.min(10, survey.length)) * 100;
    const rightPercent = (rightCount / (survey.length > 10 ? survey.length - 10 : 0)) * 100;

    return { leftPercent, rightPercent };
  }

  useEffect(() => {
    const { leftPercent, rightPercent } = getPercent();
    setLeftPercent(leftPercent);
    setRightPercent(rightPercent);
  }, [index]);

  const onChange = (value) => {
    survey[index].answer = value;
    setSurvey([...survey]);
  };

  return (
    <Container
      minW={"300px"}
      maxW="container.sm"
      p={{ base: "14", md: "8" }}
      alignItems={"center"}
      justifyContent={"center"}
      py={{ base: "12", md: "24" }}
    >
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        bg="transparent"
        zIndex="1000"
        py="4"
        px="8"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src={require("../Assets/Logo/Horizontal.png")}
          w="auto"
          height="37.9px"
          alt="logo"
          cursor="pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <Text
          fontFamily="Pretendard"
          textDecoration={"none"}
          opacity={0.5}
          textAlign={"center"}
          onClick={onSubmit}
          w={"100px"}
          h={"40px"}
          paddingX="4"
          paddingY="2"
          borderRadius="full"
          cursor="pointer"
          border="1px solid #015A68"
          backgroundColor="transparent"
          color="#015A68"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="900"
          fontSize="14px"
        >
          제출하기
        </Text>
      </Box>
      <Stack
        spacing={{ base: "2", lg: "10" }}
        mt="15%"
      >
        <HStack spacing={1} width="100%" justifyContent="space-between" mb="20px">
          <VStack flex="1" alignItems="center">
            <HStack spacing={1} justifyContent="center">
              <Box 
                bg={index <= 9 ? "#015A68" : "transparent"}
                color={index <= 9 ? "white" : "#015A68"}
                border="1px solid #015A68"
                borderRadius="full"
                fontSize="xs"
                fontFamily="Pretendard"
                px={1.5}
                py={0.5}
              >
                STEP1
              </Box>
              <Text
                fontFamily="Pretendard"
                fontSize="xs"
                color="#111111"
                fontWeight="600"
              >
                기본정보
              </Text>
            </HStack>
            <Box width="100%">
              <Progress
                value={leftPercent}
                bg="gray.200"  // 배경색을 기본 회색으로 설정
                height="6px"   // 두께를 조금 더 키움
                borderRadius="lg" // 둥근 모서리 추가
                sx={{
                  "& > div": {
                    backgroundColor: "#015A68", // Progress 바 채워진 부분의 색상을 변경
                  },
                }}
              />
            </Box>
          </VStack>

          <VStack flex="1" alignItems="center">
            <HStack spacing={1} justifyContent="center">
              <Box
                bg={index >= 10 ? "#015A68" : "transparent"}
                color={index >= 10 ? "white" : "#015A68"}
                border="1px solid #015A68"
                borderRadius="full"
                fontSize="xs"
                fontFamily="Pretendard"
                px={1.5}
                py={0.5}
              >
                STEP2
              </Box>
              <Text
                fontFamily="Pretendard"
                fontSize="xs"
                color="#111111"
                fontWeight="600"
              >
                생활 습관 및 증상
              </Text>
            </HStack>
            <Box width="100%">
              <Progress
                value={rightPercent}
                bg="gray.200"  
                height="6px"  
                borderRadius="lg"
                sx={{
                  "& > div": {
                    backgroundColor: "#015A68",
                  },
                }}
              />
            </Box>
          </VStack>
        </HStack>

        <form>
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            selectedItem={index}
            onChange={(i) => setIndex(i)}
          >
            {survey.map((content, index) => (
              <FormControl key={index} isRequired={content.required}>
                <FormLabel fontSize={{ base: "md", md: "lg" }}>
                  {index + 1}. {content.question}
                </FormLabel>
                {content.type === "input" && (
                  <Textarea
                    placeholder={content.question}
                    onChange={(e) => onChange(e.target.value)}
                  />
                )}
                {content.type === "select" && (
                  <Select onChange={(e) => onChange(e.target.value)}>
                    <option key={"선택"}>{"선택"}</option>
                    {content.option.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </Select>
                )}
                {content.type === "radio" && (
                  <RadioGroup
                    colorScheme="teal"
                    onChange={(value) => onChange(value)}
                  >
                    <Stack textAlign={"left"}>
                      {content.option.map((option, index) => (
                        <Radio key={index} value={option}>
                          {option}
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                )}
              </FormControl>
            ))}
          </Carousel>
        </form>
        <Box mt={5} mb={1}></Box>
        <Center mt={"-15%"}>
          <HStack>
            {index > 0 && (
              <Button variant={"outline"} onClick={() => setIndex(index - 1)}>
                이전
              </Button>
            )}
            {index < survey.length - 1 && (
              <Button onClick={() => setIndex(index + 1)}>다음</Button>
            )}
            {index === survey.length - 1 && (
              <Button onClick={onSubmit}>제출하기</Button>
            )}
          </HStack>
        </Center>
      </Stack>
    </Container>
  );
}

export default Survey;
