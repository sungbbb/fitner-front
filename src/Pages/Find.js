import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Flex,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
  Spinner,
  FormControl,
  FormLabel,
  useToast,
  VStack, HStack,
  Progress,
  useBreakpointValue
} from "@chakra-ui/react";
import {
  KBIcon,
  KakaoIcon,
  NaverIcon,
  PassIcon,
  PaycoIcon,
  SinhanIcon,
  TossIcon,
  SamsungPassIcon,
} from "../Assets/icons";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { isMobile } from "react-device-detect";
import { addDocument, uploadFile, getAllDoc2 } from "../Firebase/firebase_func";
import { StepsWithCircles } from "../Application/ProgressSteps/StepsWithCircles/App";
import { auth } from "../Firebase/firebase_conf";

const host_url = "https://port-0-fitner-lxu0mkd6748b546f.sel5.cloudtype.app";
export const loginType = [
  { idx: "1", title: "카카오톡", icon: <KakaoIcon /> },
  { idx: "2", title: "페이코", icon: <PaycoIcon /> },
  { idx: "3", title: "삼성패스", icon: <SamsungPassIcon /> },
  { idx: "4", title: "KB모바일", icon: <KBIcon /> },
  { idx: "5", title: "PASS", icon: <PassIcon /> },
  { idx: "6", title: "네이버", icon: <NaverIcon /> },
  { idx: "7", title: "신한인증서", icon: <SinhanIcon /> },
  { idx: "8", title: "토스", icon: <TossIcon /> },
];

function Find() {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(parseInt(window.location.pathname.split("/").pop()));
  const [anotherStep, setAnotherStep] = useState(0);
  const [viewImageUpload, setViewImageUpload] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const isMd = useBreakpointValue({ base: false, md: true });
  const toast = useToast();
  const [medicineData, setMedicineData] = useState();
  const [healthData, setHealthData] = useState();
  const [progressValue, setProgressValue] = useState(0);

  // 본인확인 모달 상태 관리
  const {
    isOpen: isCertModalOpen,
    onOpen: openCertModal,
    onClose: closeCertModal,
  } = useDisclosure();

  // 약사 상담 모달 상태 관리
  const {
    isOpen: isMainModalOpen,
    onOpen: openMainModal,
    onClose: closeMainModal,
  } = useDisclosure();

  // 인증 완료 모달 상태 관리
  const {
    isOpen: isSuccessModalOpen,
    onOpen: openSuccessModal,
    onClose: closeSuccessModal,
  } = useDisclosure();

  // 진행 상태 모달 상태 관리
  const { isOpen: isProgressModalOpen, onOpen: openProgressModal, onClose: closeProgressModal } = useDisclosure();
  const [imageList, setImageList] = useState([]);
  const imageRef = useRef(null);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [survey, setSurvey] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [formInput, setFormInput] = useState({
    organization: "0002",
    loginType: "5",
    loginTypeLevel: "1",
    userName: "",
    phoneNo: "",
    identity: "",
    inquiryType: "0",
    searchStartYear: (new Date().getFullYear() - 10).toString(),
    searchEndYear: new Date().getFullYear().toString(),
    type: "1",
    telecom: "0",
  });
  const [param, setParam] = useState({}); // 새로운 상태 추가


  useEffect(() => {
    if (location.state) {
      if (location.state.isSurvey) {
        navigate(`/find/1`);
      }
      if (location.state.healthData && location.state.medicineData) {
        setData(location.state);
        navigate(`/find/2`);
      }
    }
  }, [location.state]);

  useEffect(() => {
    setStep(parseInt(window.location.pathname.split("/").pop()));
  }, [window.location.pathname]);

  const handleSubmit = () => {
    addDocument("codef_result", {
      uid: auth?.currentUser?.uid,
      health: data?.healthData ? data?.healthData : {},
      medicine: data?.medicineData ? data?.medicineData : [],
      user: data?.formInput ? data?.formInput : {},
      createdAt: new Date(),
      image: imageList ? imageList : [],
    }).then(async () => {
      const userSurveys = await getAllDoc2("survey_result", auth?.currentUser?.uid);
      let userName = "";
      if (userSurveys.length > 0 && data?.formInput?.userName) {
        userName = data.formInput.userName;
      } else if (userSurveys.length > 0) {
        userName = userSurveys[0].answer[0].answer;
      } else if (data?.formInput?.userName) {
        userName = data.formInput.userName;
      } else {
        userName = "미제출";
      }
      if (isMobile) {
        if (userName !== "미제출") {
          window.open(
            `https://pf.kakao.com/talk/bot/@핏트너/${encodeURIComponent(
              userName
            )}님의 약상담 요청입니다`,
            "_blank"
          );
        } else {
          window.open(
            `https://pf.kakao.com/talk/bot/@핏트너/고객님의 약상담 요청입니다`,
            "_blank"
          );
        }
      } else {
        window.open(
          `https://pf.kakao.com/_GxgdpG/chat?referer=${window.location.href}`,
          "_blank"
        );
      }
      navigate("/");
    });
  };

  const iDentitySubmit = (e) => {
    e.preventDefault();

    const session = new Date().getTime().toString();
    setSessionId(session);

    // A 요청
    fetch(`${host_url}/result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: session, ...formInput }),
    })
      .then(async (res) => {
        return await res.json();
      })
      .then(async (data) => {
        if (data.result.code === "CF-03002") {
          toast({
            title: "추가 인증을 진행해주세요!",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          // 전송 성공
          setParam(data);
          setAnotherStep(1);
        } else if (data.result.code === "CF-00000") {// 성공
        } else {
          toast({
            title: "인증에 실패하였습니다. 인증을 다시 시도해주세요.",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCallData = () => {
    setIsLoading(true)
    let startDate = new Date();
    let endDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 10);
    const infoParam = {
      ...formInput,
      id: sessionId,
      startDate: startDate.toISOString().substring(0, 10).replaceAll("-", ""),
      endDate: endDate.toISOString().substring(0, 10).replaceAll("-", ""),
    };

    const resultParam = {
      ...formInput,
      id: sessionId,
      simpleAuth: "1",
      is2Way: true,
      twoWayInfo: param.data,
    };

    fetch(`${host_url}/information`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoParam),
    })
      .then(async (res) => {
        return await res.json();
      })
      .then(async (data) => {
        if (data.result.code === "CF-03002") {
          toast({
            title: "추가 인증을 진행해주세요!",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          setIsLoading(false)
        } else if (data.result.code !== "CF-00000") {
        } else {
          // 전송 성공
          setIsLoading(false)
          setMedicineData(data.data);
        }
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err);
      });

    fetch(`${host_url}/result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resultParam),
    })
      .then(async (res) => {
        return await res.json();
      })
      .then(async (data) => {
        if (data.result.code === "CF-03002") {
          toast({
            title: "추가 인증을 진행해주세요!",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          setIsLoading(false)
        } else if (data.result.code !== "CF-00000") {
          toast({
            title: "인증에 실패하였습니다. 인증을 다시 시도해주세요.",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          setIsLoading(false);
        } else {
          setAnotherStep(2);
          setIsLoading(false)
          setHealthData(data.data);
        }
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err);
      });
  };

  const handleComplete = () => {
    setAnotherStep(3);
  };

  const handleChange = (event) => {
    const files = event.target.files;
    setIsLoading(true);
    if (files && files.length > 0) {
      const firstFile = files[0];
      uploadFile("medicine", firstFile).then(async (url) => {
        setImageList([...imageList, url]);
        setIsLoading(false);
      });
    }
    if (imageRef.current) {
      imageRef.current.value = "";
    }
  };

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("f65239acc1b677c40c6dfa6d4584568d");
    }
    return () => {
      setIsLoading(false);
    };
  }, [navigate]);

  return (
    <Container maxW="container.xl">
      <Center minH={"100vh"}>
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
        </Box>
        <Flex>
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100vh"
            bgImage={{
              lg: require("../Assets/Image/findbackground.png"),
              base: require("../Assets/Image/findbackground2.png"),
            }}
            bgSize="cover"
            bgPosition="center center"
            bgRepeat="no-repeat"
            bgColor="rgba(245,245,245,0.5)"
            zIndex="-1"
          />
          <Flex
            direction="column"
            align="center"
            flex="1"
            py="12"
            px={{ base: "4", md: "6" }}
          >
            <Box maxW="md" mx="auto">
              <Box textAlign="center" mx="auto" mt="-48" mb="7%">
                <Text
                  fontWeight="normal"
                  fontFamily="Pretendard"
                  fontSize={{ base: "lg", md: "xl" }}
                  bgClip="text"
                  mb={{ base: "-30%", lg: "-25%" }}
                  mt={{ base: "20%", lg: "20%" }}
                  color="#111111"
                  bgGradient="linear(to-r, teal.500, teal.300)"
                >
                  건강설문과 약사 상담으로
                  <br />
                  <Text as="span" fontWeight="bold">
                    내게 꼭 맞는 영양제 찾기
                  </Text>
                </Text>
              </Box>
              <StepsWithCircles currentStep={step} />
              <Stack spacing="7" mt={"30%"} w={"100%"}>
                <Stack
                  direction={{ base: "row", md: "row" }}
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  mt="3"
                  transform={{ base: "translateX(-5px)", md: "none" }}
                >
                  {step === 0 && (
                    <Button
                      flex="1"
                      bgGradient="linear(to-r, #015A68, #319694)"
                      color="white"
                      onClick={() => navigate("/survey")}
                    >
                      설문 시작하기
                    </Button>
                  )}
                  {step === 1 && (
                    <Button
                      flex="1"
                      fontSize={{ base: "11px", lg: "sm" }}
                      onClick={openCertModal}
                    >
                      건강검진자료 및 투약이력 알려주기
                    </Button>
                  )}

                  {/* 본인확인 모달 */}
                  <Modal
                    isOpen={isCertModalOpen}
                    isCentered
                    onClose={() => {
                      closeCertModal();
                      setShowForm(false); // 모달을 닫을 때 상태 초기화
                      setFormInput({}); // 폼 입력값 초기화
                      setAnotherStep(0);
                    }}
                  >
                    <ModalOverlay />
                    <ModalContent
                      maxW={{ base: anotherStep === 0 || anotherStep === 4 ? "100vh" : "90%", md: "500px" }} // 모바일에서는 전체 너비
                      minH={{ base: anotherStep === 0 || anotherStep === 4 ? "100vh" : "30%", md: "auto" }} // 모바일에서는 전체 높이
                      borderRadius={{ base: "0", md: "md" }} // 모바일에서는 모서리를 둥글게 하지 않음
                      mt={{ base: "0", md: "-5%" }}
                      position="fixed"
                      top={{ base: anotherStep === 0 || anotherStep === 4 ? "0" : "20%", md: "auto" }}
                      left={{ base: anotherStep === 0 || anotherStep === 4 ? "0" : "5%", md: "auto" }}
                      overflow="hidden" // 스크롤바 숨기기
                    >
                      {anotherStep === 0 && (
                        <ModalHeader textAlign={{ base: "center", md:"left"}}>간편인증</ModalHeader>
                      )}
                      {(anotherStep === 1 || anotherStep === 4) && (
                        <ModalHeader textAlign="center">간편인증</ModalHeader>
                      )}
                      {(anotherStep === 2 || anotherStep === 3) && (
                        <ModalHeader textAlign="center">
                          건강검진자료 및 투약이력 조회
                        </ModalHeader>
                      )}
                      <ModalCloseButton />
                      {anotherStep === 0 && (
                        <ModalBody>
                          <Stack spacing={"4"} mt={-2}>
                            <Text fontSize="sm" color="#111111" fontWeight={"400"}>
                              건강검진자료 및 투약이력조회를 위한 본인인증을 확인해 주세요.
                            </Text>
                            <Text fontSize="9px" color="#111111" fontWeight={"600"} mb={-2}>
                              인증수단
                            </Text>
                            <SimpleGrid gap="4" columns={{ base: 2, md: 4 }}>
                              {loginType.map((type, index) => (
                                <Flex
                                  key={index}
                                  onClick={() => {
                                    setFormInput({
                                      ...formInput,
                                      loginTypeLevel: type.idx,
                                    });
                                    setShowForm(true);
                                  }}
                                  cursor="pointer"
                                  height={{ base: "50px", md: "30px" }}
                                  minHeight="30px"
                                  aspectRatio={3.5}
                                  border="2px solid"
                                  borderColor={
                                    formInput.loginTypeLevel === type.idx ? "teal.500" : "gray.200"
                                  }
                                  alignItems="center"
                                  justifyContent="center"
                                  borderRadius="md"
                                >
                                  <Stack direction="row" alignItems="center" spacing={1} p={2}>
                                    <Box w={4} h={4}>
                                      {type.icon}
                                    </Box>
                                    <Text fontSize="11px" textAlign="center">
                                      {type.title}
                                    </Text>
                                  </Stack>
                                </Flex>
                              ))}
                            </SimpleGrid>

                            {/* 폼 입력 화면 (md에서 항상 폼 표시) */}
                            {isMd ? (
                              <form onSubmit={iDentitySubmit}>
                                <Stack spacing={3} py={2} justifyContent={"space-between"} width="100%">
                                  <Stack spacing={2}>
                                    <FormControl isRequired>
                                      <FormLabel>이름</FormLabel>
                                      <Input
                                        onChange={(e) => {
                                          setFormInput({ ...formInput, userName: e.target.value });
                                        }}
                                        focusBorderColor="teal"
                                        placeholder="홍길동"
                                      />
                                    </FormControl>
                                    <FormControl isRequired>
                                      <FormLabel>생년월일</FormLabel>
                                      <Input
                                        type="number"
                                        onChange={(e) => {
                                          setFormInput({ ...formInput, identity: e.target.value });
                                        }}
                                        focusBorderColor="teal"
                                        placeholder="YYYYMMDD"
                                      />
                                    </FormControl>
                                    <FormControl isRequired>
                                      <FormLabel>휴대폰번호</FormLabel>
                                      <Input
                                        type="number"
                                        onChange={(e) => {
                                          setFormInput({ ...formInput, phoneNo: e.target.value });
                                        }}
                                        focusBorderColor="teal"
                                        placeholder="01012341234"
                                      />
                                    </FormControl>
                                  </Stack>
                                </Stack>
                                <ModalFooter justifyContent="center">
                                  <Button
                                    w="100%"
                                    colorScheme="teal"
                                    onClick={() => {
                                      if (showForm) {
                                        setAnotherStep(4); // 아이콘이 클릭된 경우에만 다음 단계로 이동
                                      } else {
                                        // 아이콘이 클릭되지 않았을 때 메시지 표시
                                        toast({
                                          title: "인증수단을 선택해 주세요.",
                                          status: "warning",
                                          duration: 3000,
                                          isClosable: true,
                                          position: "top",
                                        });
                                      }
                                    }}
                                  >
                                    다음
                                  </Button>
                                </ModalFooter>
                              </form>
                            ) : (
                              <ModalFooter justifyContent="center" mt="100%">
                                <Button w="100%" colorScheme="teal" onClick={() => setAnotherStep(4)}>
                                  다음
                                </Button>
                              </ModalFooter>
                            )}
                          </Stack>
                        </ModalBody>
                      )}

                      {anotherStep === 1 && (
                        <>
                          <ModalBody>
                            <Text fontSize="14" color="#111111" fontWeight={"600"}>
                              인증 요청 메시지를 보냈습니다.
                            </Text>
                            <Text fontSize="11px" color="#111111" fontWeight={"400"} mt={2}>
                              인증을 진행한 후 <br />
                              아래 간편인증 완료 버튼을 클릭하세요.
                            </Text>
                            <Image
                              src={require("../Assets/Icon/sucessIcon.png")}
                              alt="인증 단계"
                              mt={2}
                              w="50%"
                              objectFit="contain"
                              mx="auto"
                            />
                          </ModalBody>
                          <ModalFooter justifyContent="center">
                            <Button
                              w="50%"
                              colorScheme="teal"
                              onClick={handleCallData}
                              isLoading={isLoading}
                              isDisabled={isLoading}
                            >
                              간편인증 완료
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                      {anotherStep === 2 && (
                        <>
                          <ModalBody>
                            <Text fontSize="13px" color="#111111" fontWeight={"400"} mt={2}>
                              건강검진자료 및 투약이력을 가져오고 있어요. <br />
                              잠시만 기다려주세요!
                            </Text>
                            <CounterWithCircularProgress completed={!!medicineData} onComplete={handleComplete} />
                          </ModalBody>
                        </>
                      )}
                      {anotherStep === 3 && (
                        <ModalBody textAlign="center">
                          {/* 조회 완료 상태 내용 */}
                          <Text fontSize="12px" color="#111111" fontWeight={"400"}>
                            필요한 정보를 모두 불러왔어요!
                          </Text>
                          <ModalFooter justifyContent="center">
                            <Button
                              w="60%"
                              colorScheme="teal"
                              onClick={() => {
                                closeCertModal();
                                setShowForm(false); // 모달을 닫을 때 상태 초기화
                                setFormInput({}); // 폼 입력값 초기화
                                setAnotherStep(0);
                                navigate('/find/2');
                              }}
                            >
                              다음
                            </Button>
                          </ModalFooter>
                        </ModalBody>
                      )}
                      {anotherStep === 4 && (
                        <ModalBody>
                          <Stack spacing={"4"} mt={-2}>
                            <Text fontSize="sm" color="#111111" fontWeight={"400"}>
                              정보를 입력해주세요
                            </Text>
                            <form onSubmit={iDentitySubmit}>
                              <Stack spacing={3} py={2} justifyContent={"space-between"} width="100%">
                                <Stack spacing={2}>
                                  <FormControl isRequired>
                                    <FormLabel>이름</FormLabel>
                                    <Input
                                      onChange={(e) => {
                                        setFormInput({ ...formInput, userName: e.target.value });
                                      }}
                                      focusBorderColor="teal"
                                      placeholder="홍길동"
                                    />
                                  </FormControl>
                                  <FormControl isRequired>
                                    <FormLabel>생년월일</FormLabel>
                                    <Input
                                      type="number"
                                      onChange={(e) => {
                                        setFormInput({ ...formInput, identity: e.target.value });
                                      }}
                                      focusBorderColor="teal"
                                      placeholder="YYYYMMDD"
                                    />
                                  </FormControl>
                                  <FormControl isRequired>
                                    <FormLabel>휴대폰번호</FormLabel>
                                    <Input
                                      type="number"
                                      onChange={(e) => {
                                        setFormInput({ ...formInput, phoneNo: e.target.value });
                                      }}
                                      focusBorderColor="teal"
                                      placeholder="01012341234"
                                    />
                                  </FormControl>
                                </Stack>
                              </Stack>
                              <ModalFooter justifyContent="center">
                                <Button w="50%" colorScheme="teal" type="submit">
                                  인증하기
                                </Button>
                              </ModalFooter>
                            </form>
                          </Stack>
                        </ModalBody>
                      )}
                    </ModalContent>
                  </Modal>

                  {step === 2 && (
                    <Button flex="1" onClick={() => setViewImageUpload(true)}>
                      먹는약 업로드하기
                    </Button>
                  )}
                  {step === 3 && (
                    <Button
                      flex="1"
                      onClick={() => {
                        openMainModal();
                      }}
                    >
                      1:1 약사 상담하기
                    </Button>
                  )}
                  {/* 1:1 약사 상담 모달 */}
                  <Modal
                    isOpen={isMainModalOpen}
                    onClose={closeMainModal}
                    isCentered
                    size={{ base: "sm", md: "md" }}
                  >
                    <ModalOverlay />
                    <ModalContent
                      maxW={{ base: "50%", md: "500px" }}
                      mb={{ base: "80%", md: "20%" }}
                      mt={{ base: "auto" }}
                    >
                      <ModalHeader display="flex" justifyContent="center">
                        <Text fontWeight="bold" textAlign="center">
                          1:1 약사 상담하기
                        </Text>
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Text>
                          약사 상담하기 버튼을 클릭하시면 24시간 이내에 <br />
                          AI와 약사가 당신의 정보를 분석해 알려드립니다.
                        </Text>
                      </ModalBody>
                      <ModalFooter mb={4}>
                        <Button
                          w={"full"}
                          colorScheme="teal"
                          onClick={() => {
                            handleSubmit();
                            closeMainModal();
                          }}
                        >
                          카톡으로 1:1 약사상담하기
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  {step < 3 && (
                    <Button
                      flex="1"
                      variant="outline"
                      onClick={() => {
                        const nextStep = step + 1;
                        if (nextStep === 3) {
                          let userName = "";
                          const fetchUserName = async () => {
                            try {
                              const userSurveys = await getAllDoc2(
                                "survey_result",
                                auth?.currentUser?.uid
                              );
                              if (
                                userSurveys.length > 0 &&
                                data?.formInput?.userName
                              ) {
                                userName = data.formInput.userName;
                              } else if (userSurveys.length > 0) {
                                userName = userSurveys[0].answer[0].answer;
                              } else if (data?.formInput?.userName) {
                                userName = data.formInput.userName;
                              } else {
                                userName = "미제출";
                                navigate(
                                  `/find/3?name=${encodeURIComponent(userName)}`
                                );
                              }
                            } catch (error) {
                              console.error(
                                "Error fetching surveys:",
                                error
                              );
                              userName = "미제출";
                              navigate(
                                `/find/3?name=${encodeURIComponent(userName)}`
                              );
                            }
                          };

                          fetchUserName();
                        } else {
                          navigate(`/find/${step + 1}`);
                        }
                      }}
                    >
                      건너뛰기
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Box>
          </Flex>

          <Modal
            size={{ base: "sm", md: "md" }}
            isCentered={{ base: false, md: true }}
            isOpen={step === 2 && viewImageUpload}
            onClose={closeMainModal}
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent
              maxW={{ base: "100%", md: "500px" }}
              mb={{ base: 0, md: "20%" }}
              mt={{ base: "auto" }}
            >
              <ModalHeader>
                <Stack>
                  <Text fontWeight={"bold"} fontSize="xl">
                    지금 드시는 약의 사진을 업로드 해주세요.
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight={"light"}>
                    사진은 성분명이 잘 나오도록 올려주세요.
                  </Text>
                </Stack>
              </ModalHeader>
              <ModalCloseButton onClick={() => setViewImageUpload(false)} />
              <ModalBody>
                {isLoading ? (
                  <Center h="200px">
                    <Spinner size="xl" />
                  </Center>
                ) : (
                  <SimpleGrid columns={{ base: 2, md: 3 }} gap={2}>
                    {imageList.map((url) => (
                      <Box key={url} position="relative" aspectRatio={1}>
                        <IconButton
                          aria-label=""
                          icon={<FiX />}
                          position={"absolute"}
                          mt={2}
                          right={2}
                          variant={"solid"}
                          colorScheme={"gray"}
                          borderRadius="full"
                          size={"sx"}
                          zIndex={9999}
                          onClick={() =>
                            setImageList(imageList.filter((i) => i !== url))
                          }
                        />
                        <AspectRatio ratio={1} cursor={"pointer"}>
                          <Image
                            src={url}
                            objectFit="cover"
                            rounded={"lg"}
                            fallback={<Skeleton />}
                          />
                        </AspectRatio>
                      </Box>
                    ))}
                    <Center
                      cursor={"pointer"}
                      onClick={() => imageRef.current?.click()}
                      aspectRatio={1}
                      border={"3px dashed #d9d9d9"}
                      borderRadius={"lg"}
                    >
                      <MdAdd fontSize="100px" color="#d9d9d9" />
                      <Input
                        type="file"
                        display={"none"}
                        ref={imageRef}
                        accept="image/*"
                        onChange={handleChange}
                      />
                    </Center>
                  </SimpleGrid>
                )}
              </ModalBody>
              <ModalFooter mb={4}>
                <Button
                  w={"full"}
                  colorScheme="teal"
                  onClick={() => {
                    setIsLoading(true);
                    navigate(`/find/${step + 1}`);
                    setViewImageUpload(false);
                  }}
                >
                  완료
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Center>
    </Container>
  );
}
const CounterWithCircularProgress = ({ completed = false, onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!completed) {
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount >= 99 ? 99 : prevCount + 1));
      }, 100);

      return () => clearInterval(interval);
    } else {
      // 완료 시 콜백 호출
      onComplete();
    }
  }, [completed, onComplete]);

  const progressValue = completed ? 100 : count;

  return (
    <HStack spacing={4} alignItems="center">
      <Box flex="1">
        {/* Progress Bar */}
        <Progress
          value={progressValue}
          size="lg"
          colorScheme="teal"
          height="32px"
          hasStripe // optional: for a striped effect
          isAnimated // optional: for animation
        />
      </Box>
      {/* Percentage Text */}
      <Text fontSize="xl" fontWeight="bold">
        {progressValue}%
      </Text>
    </HStack>
  );
};

export default Find;