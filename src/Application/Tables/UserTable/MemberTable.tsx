import {
  Avatar,
  Badge,
  Stack,
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Input,
  Button,
  Select,
  Card,
  Divider,
  useColorModeValue,
  CardHeader,
  CardBody,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoArrowDown } from "react-icons/io5";
import { Naver } from "./Logo";
import React from "react";
import { updateDocument } from "../../../Firebase/firebase_func";
// import { members } from "./data";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export const MemberTable = (props: any) => {
  const { list } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = React.useState(0);
  const [data, setData] = React.useState<any>({});

  const updateUser = (member: any) => {
    console.log(member);

    if (window.confirm("유저 정보를 수정하시겠습니까?")) {
      updateDocument("User", member.id, member).then(() => {});
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <Table {...props} size={"sm"}>
        <Thead>
          <Tr>
            <Th textAlign={"center"} minW={"100px"}>
              이름
            </Th>
            <Th textAlign={"center"} minW={"100px"}>
              생년월일
            </Th>
            <Th textAlign={"center"} minW={"100px"}>
              전화번호
            </Th>
            <Th textAlign={"center"} minW={"100px"}>
              제출일
            </Th>
            <Th textAlign={"center"} minW={"100px"}>
              설문조사
            </Th>
            <Th textAlign={"center"} minW={"100px"}>
              건강검진
            </Th>
            <Th textAlign={"center"} minW={"100px"}>
              진료&투약
            </Th>
            <Th textAlign={"center"} minW={"100px"}>
              먹는약
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {list.map((member: any) => (
            <Tr key={member.uid}>
              <Td textAlign={"center"}>{member.user.userName}</Td>
              <Td textAlign={"center"}>{member.user.identity}</Td>
              <Td textAlign={"center"}>{member.user.phoneNo}</Td>
              <Td textAlign={"center"}>
                {member.createdAt.toDate().toLocaleDateString()}
              </Td>
              <Td textAlign={"center"}>
                {member.answer ? (
                  <Button
                    onClick={() => {
                      setType(0);
                      setData(member);
                      onOpen();
                    }}
                    colorScheme="teal"
                    size={"xs"}
                    variant={"outline"}
                  >
                    제출완료
                  </Button>
                ) : (
                  <Text fontSize={"xs"} fontWeight={"semibold"}>
                    미제출
                  </Text>
                )}
              </Td>
              <Td textAlign={"center"}>
                {member.health.resCheckupTarget ? (
                  <Button
                    onClick={() => {
                      setType(1);
                      setData(member);
                      onOpen();
                    }}
                    colorScheme="teal"
                    size={"xs"}
                    variant={"outline"}
                  >
                    제출완료
                  </Button>
                ) : (
                  <Text fontSize={"xs"} fontWeight={"semibold"}>
                    미제출
                  </Text>
                )}
              </Td>
              <Td textAlign={"center"}>
                {member.medicine ? (
                  <Button
                    onClick={() => {
                      setType(2);
                      setData(member.medicine);
                      console.log(member.medicine);
                      onOpen();
                    }}
                    colorScheme="teal"
                    size={"xs"}
                    variant={"outline"}
                  >
                    제출완료
                  </Button>
                ) : (
                  <Text fontSize={"xs"} fontWeight={"semibold"}>
                    미제출
                  </Text>
                )}
              </Td>
              <Td textAlign={"center"}>
                {member.image.length > 0 ? (
                  <Button
                    onClick={() => {
                      setType(3);
                      setData(member.image);
                      onOpen();
                    }}
                    colorScheme="teal"
                    size={"xs"}
                    variant={"outline"}
                  >
                    제출완료
                  </Button>
                ) : (
                  <Text fontSize={"xs"} fontWeight={"semibold"}>
                    미제출
                  </Text>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Modal
        size={{ base: "full", md: "2xl" }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {type === 0
              ? "설문 응답"
              : type === 1
              ? "건강검진정보"
              : type === 2
              ? "처방내역"
              : "먹는약 이미지"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bgColor={useColorModeValue("gray.50", "gray.700")}>
            {type === 0 ? (
              <>
                <Stack spacing={4}>
                  {data.answer?.map((answer: any) => (
                    <Stack>
                      <Text>Q. {answer.question}</Text>
                      <Text>A. {answer.answer}</Text>
                    </Stack>
                  ))}
                </Stack>
              </>
            ) : type === 1 ? (
              <>
                <Stack spacing={4}>
                  {data.health.resPreviewList?.map((health: any) => (
                    <Card>
                      <CardHeader fontSize={"lg"} fontWeight={"bold"}>
                        한눈에 보기
                      </CardHeader>
                      <CardBody>
                        <Stack>
                          <Text>검진년도 : {health.resCheckupYear}</Text>
                          <Text>검진일자 : {health.resCheckupDate}</Text>
                          <Text>검진장소 : {health.resCheckupPlace}</Text>
                          <Text>신장 : {health.resHeight}</Text>
                          <Text>체중 : {health.resWeight}</Text>
                          <Text>허리둘레 : {health.resWaist}</Text>
                          <Text>체질량지수 : {health.resBMI}</Text>
                          <Text>시력 : {health.resSight}</Text>
                          <Text>청력 : {health.resHearing}</Text>
                          <Text>혈압 : {health.resBloodPressure}</Text>
                          <Text>요단백 : {health.resUrinaryProtein}</Text>
                          <Text>혈색소 : {health.resHemoglobin}</Text>
                          <Text>식전혈당 : {health.resFastingBloodSuger}</Text>
                          <Text>
                            총콜레스테롤 : {health.resTotalCholesterol}
                          </Text>
                          <Text>
                            HDL콜레스테롤 : {health.resHDLCholesterol}
                          </Text>
                          <Text>
                            트리글리세라이드 : {health.resTriglyceride}
                          </Text>
                          <Text>
                            LDL콜레스테롤 : {health.resLDLCholesterol}
                          </Text>
                          <Text>
                            혈청크레아티닌 : {health.resSerumCreatinine}
                          </Text>
                          <Text>신사구체여과율(GFR) : {health.resGFR}</Text>
                          <Text>AST(SGOT) : {health.resAST}</Text>
                          <Text>ALT(SGPT) : {health.resALT}</Text>
                          <Text>감마지피티(y-GPT) : {health.resyGPT}</Text>
                          <Text>
                            폐결핵 흉부질환 : {health.resTBChestDisease}
                          </Text>
                          <Text>골다공증 : {health.resOsteoporosis}</Text>
                          <Text>판정 : {health.resJudgement}</Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  ))}
                </Stack>
              </>
            ) : type === 2 ? (
              <Stack spacing={2}>
                {data.map((item: any) => (
                  <>
                    {item.resMediDetailList.length > 0 && (
                      <Card p={2}>
                        {item.resMediDetailList.map((detail: any) => (
                          <>
                            <Text fontWeight={"bold"}>
                              진료/처방 일자 : {detail.resTreatDate}
                            </Text>
                            {/* <Text>약품이미지 : {detail.resDrugImageLink}</Text> */}
                            <Text>
                              처방약품효능 :{detail.resPrescribeDrugEffect}
                            </Text>
                            <Text>
                              처방약품명 :{detail.resPrescribeDrugName}
                            </Text>
                            {/* <Text>처방횟수_상세 : {detail.resPrescribeCntDet}</Text>s */}
                            <Text>
                              {" "}
                              진료형태_상세 : {detail.resTreatTypeDet}
                            </Text>
                            <Text> 투약일수 : {detail.resPrescribeDays}</Text>
                          </>
                        ))}
                      </Card>
                    )}
                  </>
                ))}
              </Stack>
            ) : (
              <>
                <SimpleGrid columns={3} spacing={2}>
                  {data.map((item: any) => (
                    <Image src={item} key={item} width={"100%"} />
                  ))}
                </SimpleGrid>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
