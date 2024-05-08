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
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { auth } from "../Firebase/firebase_conf";

function Survey(props) {
  const [survey, setSurvey] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    getAllDoc("survey").then((data) => {
      setSurvey(data);
    });
  }, []);

  const onSubmit = (e) => {
    console.log("submitted", auth.currentUser.uid);
    e.preventDefault();

    for (let i = 0; i < survey.length; i++) {
      if (survey[i].required && !survey[i].answer) {
        alert(survey[i].question);
        setIndex(i);
        return;
      }

      if (!survey[i].required) {
        survey[i].answer = "";
      }
    }

    addDocument("survey_result", { uid: auth.currentUser.uid, answer: survey })
      .then((data) => {
        console.log(data, " 설문이 제출되었습니다!");
        alert("설문이 제출되었습니다.");
      })
      .catch((err) => {
        console.log(err);
        alert("설문이 제출되지 않았습니다. 다시 시도해주세요.");
      });
  };

  const onChange = (value) => {
    survey[index].answer = value;
    setSurvey([...survey]);

    // console.log(survey[index]);
  };
  return (
    <Container
      minW={"300px"}
      maxW="container.sm"
      p={{ base: "4", md: "8" }}
      alignItems={"center"}
      justifyContent={"center"}
      py={{ base: "12", md: "24" }}
    >
      <Stack spacing={{ base: "8", md: "10" }}>
        <Text
          textDecoration={"underline"}
          opacity={0.5}
          textAlign={"right"}
          onClick={onSubmit}
          w={"full"}
        >
          제출하기
        </Text>
        <Center>
          <Image src={require("../Assets/logo.png")} w={"150px"} h={"150px"} />
        </Center>
        <form>
          <Carousel
            showArrows={false}
            // centerMode={true}
            // centerSlidePercentage={100}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            selectedItem={index}
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
        <Center>
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
