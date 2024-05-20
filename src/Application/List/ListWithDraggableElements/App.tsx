import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  chakra,
  HStack,
  IconButton,
  Input,
  MenuButton,
  Select,
  Stack,
  StackDivider,
  Switch,
  Text,
  useToast,
} from "@chakra-ui/react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { FiSave, FiTrash2 } from "react-icons/fi";
import { addDocument, updateDocument } from "../../../Firebase/firebase_func";
import { MdAdd } from "react-icons/md";
import { db } from "../../../Firebase/firebase_conf";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const List = chakra(Reorder.Group);
const ListItem = chakra(Reorder.Item);

export const ListWithDraggableElements = (props: any) => {
  const toast = useToast();
  const { list = [] } = props;
  const defaultSurvey = {
    question: "",
    required: false,
    type: "input",
    index: list.length + 1,
  };

  const [tempText, setTempText] = useState("");

  const [order, setOrder] = useState(() =>
    list?.map((issue: any) => issue.index)
  );

  useEffect(() => {
    setOrder(list?.map((issue: any) => issue.index));
  }, [list]);

  // 순서를 변경합니다.
  const handleReorder = () => {
    list.forEach((item: any, index: number) => {
      if (item.docId) {
        updateDocument("survey", item.docId, {
          ...item,
          index: order[index],
        }).then(async () => {
          // console.log("업데이트 성공");
        });
      } else {
        addDocument("survey", {
          ...item,
          index: order[index],
        });
      }
    });
    console.log(list);

    toast({
      title: "업데이트",
      description: "설문 문항을 저장하였습니다.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  const handleAdd = () => {
    console.log("handleAdd");
    setOrder([...order, list.length + 1]);
    list.push({ ...defaultSurvey });
    console.log(list);
  };

  const handleAddOption = (index: number) => {
    console.log("handleAddOption");
    list[index].option.push(tempText);
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  const moveItem = (index: number, direction: string) => {
    console.log("moveItem", index);
    const newItems = [...order];
    const [movedItem] = newItems.splice(index, 1);
    if (direction === "up" && index > 0) {
      newItems.splice(index - 1, 0, movedItem);
    } else if (direction === "down" && index < newItems.length - 1) {
      newItems.splice(index + 1, 0, movedItem);
    } else if (direction === "top") {
      newItems.unshift(movedItem);
    } else if (direction === "bottom") {
      newItems.push(movedItem);
    }
    console.log(newItems);
    setOrder(newItems);
  };

  return (
    <Center mx="auto" py={{ base: "4", md: "8" }}>
      <Stack spacing="5" flex="1">
        <HStack justify="space-between">
          <Stack spacing="1">
            <Text textStyle="lg" fontWeight="medium">
              설문 문항 관리
            </Text>
            <Text color="fg.muted" textStyle="sm">
              설문을 추가 / 수정 / 삭제할 수 있습니다.
            </Text>
          </Stack>{" "}
          <ButtonGroup>
            <Button
              onClick={handleAdd}
              variant="secondary"
              leftIcon={<MdAdd />}
            >
              추가
            </Button>
            <Button
              onClick={() => {
                handleReorder();
              }}
              leftIcon={<FiSave />}
            >
              저장
            </Button>
          </ButtonGroup>
        </HStack>
        <List values={order} onReorder={setOrder} listStyleType="none">
          <Stack spacing="3" width="full">
            {order
              .map((item: string) =>
                list.find((value: any) => value.index === item)
              )
              .map((issue: any) =>
                issue ? (
                  <ListItem
                    key={issue.index}
                    value={issue.index}
                    bg="bg.surface"
                    p="4"
                    boxShadow="sm"
                    position="relative"
                    borderRadius="lg"
                    cursor="grab"
                    // whileTap={{ cursor: "grabbing", scale: 1.1 }}
                  >
                    <Stack shouldWrapChildren spacing="4">
                      <HStack justify="space-between">
                        <Input
                          onChange={(e) => {
                            const newIssue = {
                              ...issue,
                              question: e.target.value,
                            };
                            list[issue.index - 1] = newIssue;
                          }}
                          placeholder="문항"
                          fontWeight={"bold"}
                          variant={"flushed"}
                          defaultValue={issue.question}
                        ></Input>
                        <Select
                          colorScheme="teal"
                          onChange={(e) => {
                            const newIssue = {
                              ...issue,
                              type: e.target.value,
                              option: [],
                            };
                            console.log(newIssue);
                            list[issue.index - 1] = newIssue;
                          }}
                          defaultValue={issue.type}
                          w={"150px"}
                        >
                          <option value={"input"}>입력형</option>
                          <option value={"select"}>드롭다운</option>
                          <option value={"radio"}>객관식질문</option>
                        </Select>
                      </HStack>
                      {issue.type !== "input" && (
                        <Stack>
                          {issue.option?.map((item: any) => (
                            <Input
                              key={item}
                              colorScheme="teal"
                              defaultValue={item}
                            />
                          ))}
                          <HStack>
                            <Input
                              placeholder="항목을 입력하세요."
                              onChange={(e) => {
                                const newIssue = {
                                  ...issue,
                                  option: [...issue.option, e.target.value],
                                };
                                console.log(newIssue);
                                list[issue.index - 1] = newIssue;
                              }}
                            />
                            <Button
                              onClick={() => {
                                if (tempText) handleAddOption(issue.index);
                              }}
                            >
                              추가
                            </Button>
                          </HStack>
                        </Stack>
                      )}
                      <HStack justify={"end"} divider={<StackDivider />}>
                        <IconButton
                          aria-label=""
                          icon={<BiChevronUp />}
                          onClick={() => moveItem(issue.index - 1, "top")}
                        />
                        <IconButton
                          aria-label=""
                          icon={<BiChevronDown />}
                          onClick={() => moveItem(issue.index - 1, "bottom")}
                        />
                        <IconButton
                          onClick={() => {
                            if (window.confirm("문항을 삭제하시겠습니까?")) {
                              list.splice(issue.index - 1, 1);
                              setOrder(list?.map((issue: any) => issue.index));
                              deleteDoc(doc(db, "survey", issue.docId)).then(
                                async () => {
                                  window.location.reload();
                                }
                              );
                            }
                          }}
                          colorScheme="gray"
                          aria-label=""
                          icon={<FiTrash2 />}
                          variant={"ghost"}
                        />
                        <HStack>
                          <Text fontSize={"sm"} color={"fg.muted"}>
                            필수
                          </Text>
                          <Switch
                            onChange={(e) => {
                              const newIssue = {
                                ...issue,
                                required: e.target.checked,
                              };
                              list[issue.index - 1] = newIssue;
                            }}
                            colorScheme="teal"
                            defaultChecked={issue.required}
                          />
                        </HStack>
                      </HStack>
                    </Stack>
                  </ListItem>
                ) : null
              )}
          </Stack>
        </List>
        <HStack justify="end">
          <ButtonGroup>
            <Button
              onClick={handleAdd}
              variant="secondary"
              leftIcon={<MdAdd />}
            >
              추가
            </Button>
            <Button
              onClick={() => {
                handleReorder();
              }}
              leftIcon={<FiSave />}
            >
              저장
            </Button>
          </ButtonGroup>
        </HStack>
      </Stack>
    </Center>
  );
};
