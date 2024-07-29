import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Input,
  Select,
  Checkbox,
  VStack,
  HStack,
  Text,
  Card,
  Switch,
  IconButton,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Reorder } from "framer-motion";
import { chakra } from "@chakra-ui/system";
import {
  BiChevronDown,
  BiChevronDownCircle,
  BiChevronUp,
  BiChevronUpCircle,
} from "react-icons/bi";
import { FiTrash, FiX } from "react-icons/fi";
import { MdAdd, MdSave } from "react-icons/md";
import { addDocument, updateDocument } from "../Firebase/firebase_func";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase_conf";

const List = chakra(Reorder.Group);

const questionTypes = [
  { label: "입력형", value: "input" },
  { label: "선택형", value: "select" },
  { label: "객관식문항", value: "radio" },
];

const ReorderableSurvey = (props) => {
  //   const initialQuestions = [
  //     { type: "input", text: "What is your name?", required: true, options: [] },
  //     {
  //       type: "dropdown",
  //       text: "What is your favorite color?",
  //       required: false,
  //       options: ["Red", "Blue", "Green"],
  //     },
  //     {
  //       type: "multipleChoice",
  //       text: "Which fruits do you like?",
  //       required: false,
  //       options: ["Apple", "Banana", "Orange"],
  //     },
  //   ];

  const toast = useToast();
  const [questions, setQuestions] = useState([]);
  const [openQuestion, setOpenQuestion] = useState(-1);

  useEffect(() => {
    setQuestions(props.list);
  }, [props.list]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { type: "input", text: "", required: false, options: [] },
    ]);

    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const bottomRef = React.createRef();

  const updateQuestion = (index, key, value) => {
    const updatedQuestions = questions.map((q, i) =>
      i === index ? { ...q, [key]: value } : q
    );
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (index, docId) => {
    if (window.confirm("문항을 삭제하시겠습니까?")) {
      const updatedQuestions = questions.filter((_, i) => i !== index);
      setQuestions(updatedQuestions);

      if (docId) {
        deleteDoc(doc(db, "survey", docId)).then(
          () => {
            console.log("doc deleted");
          },
          (error) => {
            console.log("Error removing document: ", error);
          }
        );
      }
    }
  };

  const moveQuestion = (index, direction) => {
    const newQuestions = [...questions];
    const [movedQuestion] = newQuestions.splice(index, 1);
    if (direction === "up" && index > 0) {
      newQuestions.splice(index - 1, 0, movedQuestion);
      setOpenQuestion(index - 1);
    } else if (direction === "down" && index < newQuestions.length) {
      newQuestions.splice(index + 1, 0, movedQuestion);
      setOpenQuestion(index + 1);
    }
    setQuestions(newQuestions);
  };

  const saveQuestions = () => {
    handleReorder();
  };

  const handleReorder = () => {
    questions.forEach((item, index) => {
      if (item.docId) {
        updateDocument("survey", item.docId, {
          ...item,
          index: index,
        }).then(async () => {
          window.location.reload();
        });
      } else {
        addDocument("survey", {
          ...item,
          index: index,
        });
      }
    });

    toast({
      title: "업데이트",
      description: "설문 문항을 저장하였습니다.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <VStack spacing={4} w={"full"}>
      <HStack
        w={"full"}
        bgColor={"white"}
        position={"sticky"}
        top={0}
        zIndex={1}
        pb={2}
        justifyContent={"space-between"}
      >
        <HStack justify="space-between">
          <Stack spacing="1">
            <Text textStyle="lg" fontWeight="medium">
              설문 문항 관리
            </Text>
            <Text color="fg.muted" textStyle="sm">
              설문을 추가 / 수정 / 삭제할 수 있습니다.
            </Text>
          </Stack>{" "}
        </HStack>
        <HStack>
          <Button leftIcon={<MdAdd />} onClick={addQuestion}>
            문항추가
          </Button>
          <Button leftIcon={<MdSave />} onClick={saveQuestions}>
            저장
          </Button>
        </HStack>
      </HStack>
      <List w={"full"} values={questions} onReorder={setQuestions}>
        {questions.map((question, index) => (
          <Reorder.Item key={index} value={question}>
            <Card
              w={"100%"}
              p={4}
              bg="gray.50"
              borderRadius="md"
              mb={2}
              display="flex"
              flexDirection="column"
            >
              <HStack mb={2}>
                <Text fontWeight="bold">{index + 1}.</Text>
                <Input
                  placeholder="질문을 입력하세요."
                  value={question.question}
                  onChange={(e) =>
                    updateQuestion(index, "question", e.target.value)
                  }
                />
                <Select
                  bgColor={"white"}
                  w={"200px"}
                  value={question.type}
                  onChange={(e) => {
                    updateQuestion(index, "type", e.target.value);
                    if (!question.option) {
                      updateQuestion(index, "option", [
                        "Option 1",
                        "Option 2",
                        "Option 3",
                      ]);
                    }
                  }}
                >
                  {questionTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </Select>
                <IconButton
                  aria-label="Remove Question"
                  variant="secondary"
                  icon={
                    index === openQuestion ? (
                      <BiChevronUpCircle color="teal" />
                    ) : (
                      <BiChevronDownCircle opacity={0.5} />
                    )
                  }
                  onClick={() => {
                    if (index === openQuestion) {
                      setOpenQuestion(-1);
                    } else {
                      setOpenQuestion(index);
                    }
                  }}
                />
              </HStack>
              {openQuestion === index && (
                <>
                  {question.type === "select" && (
                    <VStack align="start">
                      {question.option?.map((option, optIndex) => (
                        <HStack key={optIndex}>
                          <Input
                            w={"300px"}
                            placeholder={`Option ${optIndex + 1}`}
                            value={option}
                            onChange={(e) => {
                              const newOptions = question.option.map((opt, i) =>
                                i === optIndex ? e.target.value : opt
                              );
                              updateQuestion(index, "option", newOptions);
                            }}
                          />
                          <IconButton
                            aria-label="Remove Option"
                            variant="secondary"
                            icon={<FiX />}
                            onClick={() => {
                              const newOptions = question.option.filter(
                                (_, i) => i !== optIndex
                              );
                              updateQuestion(index, "option", newOptions);
                            }}
                          />
                          {optIndex === question.option.length - 1 && (
                            <Button
                              variant="outline"
                              onClick={() =>
                                updateQuestion(index, "option", [
                                  ...question.option,
                                  "",
                                ])
                              }
                            >
                              옵션추가
                            </Button>
                          )}
                        </HStack>
                      ))}
                    </VStack>
                  )}
                  {question.type === "radio" && (
                    <VStack align="start">
                      {question.option.map((option, optIndex) => (
                        <HStack key={optIndex}>
                          <Input
                            w={"300px"}
                            placeholder={`Option ${optIndex + 1}`}
                            value={option}
                            onChange={(e) => {
                              const newOptions = question.option.map((opt, i) =>
                                i === optIndex ? e.target.value : opt
                              );
                              updateQuestion(index, "option", newOptions);
                            }}
                          />
                          <IconButton
                            aria-label="Remove Option"
                            variant="secondary"
                            icon={<FiX />}
                            onClick={() => {
                              const newOptions = question.option.filter(
                                (_, i) => i !== optIndex
                              );
                              updateQuestion(index, "option", newOptions);
                            }}
                          />
                          {optIndex === question.option.length - 1 && (
                            <Button
                              variant="outline"
                              onClick={() =>
                                updateQuestion(index, "option", [
                                  ...question.option,
                                  "",
                                ])
                              }
                            >
                              옵션추가
                            </Button>
                          )}
                        </HStack>
                      ))}
                    </VStack>
                  )}

                  <HStack mt={2} justify="space-between">
                    <HStack>
                      <IconButton
                        icon={<BiChevronUp />}
                        size="sm"
                        aria-label=""
                        onClick={() => moveQuestion(index, "up")}
                        isDisabled={index === 0}
                      />
                      <IconButton
                        icon={<BiChevronDown />}
                        size="sm"
                        aria-label=""
                        onClick={() => moveQuestion(index, "down")}
                        isDisabled={index === questions.length - 1}
                      />
                    </HStack>
                    <HStack>
                      <Switch
                        size="md"
                        colorScheme="teal"
                        isChecked={question.required}
                        onChange={(e) =>
                          updateQuestion(index, "required", e.target.checked)
                        }
                      >
                        필수
                      </Switch>
                      <IconButton
                        icon={<FiTrash />}
                        variant={"ghost"}
                        onClick={() => removeQuestion(index, question.docId)}
                      />
                    </HStack>
                  </HStack>
                </>
              )}
              <Box ref={bottomRef}></Box>
            </Card>
          </Reorder.Item>
        ))}
      </List>
    </VStack>
  );
};

export default ReorderableSurvey;
