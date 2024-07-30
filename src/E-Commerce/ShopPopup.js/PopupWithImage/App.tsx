import {
  AspectRatio,
  Box,
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  Link,
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
  StackDivider,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SubscribeForm } from "./SubscribeForm";
import { StepsWithCirclesAndText } from "../../../Application/ProgressSteps/StepsWithCirclesAndText/App";
import { StepsWithCircles } from "../../../Application/ProgressSteps/StepsWithCircles/App";
import { useEffect, useRef, useState } from "react";
import {
  addDocument,
  signAuth,
  uploadFile,
} from "../../../Firebase/firebase_func";
import { auth, db } from "../../../Firebase/firebase_conf";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import {
  KBIcon,
  KakaoIcon,
  NaverIcon,
  PassIcon,
  PaycoIcon,
  SinhanIcon,
  TossIcon,
} from "../../../Assets/icons";
import { BsCheckCircleFill } from "react-icons/bs";
import { FiUpload, FiX } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { onAuthStateChanged } from "firebase/auth";

export const loginType = [
  {
    idx: "1",
    title: "카카오톡",
    icon: <KakaoIcon />,
  },
  {
    idx: "2",
    title: "페이코",
    icon: <PaycoIcon />,
  },
  {
    idx: "3",
    title: "삼성패스",
    icon: <Image src={require("../../../Assets/Icon/samsungpass.webp")} />,
  },
  {
    idx: "4",
    title: "KB모바일",
    icon: <KBIcon />,
  },
  {
    idx: "5",
    title: "PASS",
    icon: <PassIcon />,
  },
  {
    idx: "6",
    title: "네이버",
    icon: <NaverIcon />,
  },
  {
    idx: "7",
    title: "신한인증서",
    icon: <SinhanIcon />,
  },
  {
    idx: "8",
    title: "토스",
    icon: <Image src={require("../../../Assets/Icon/toss.webp")} />,
  },
];
export const PopupWithImage = (props: any) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [step, setStep] = useState(0);
  const [enableButton, setEnableButton] = useState(false);

  const [sessionId, setSessionId] = useState(new Date().getTime().toString());

  const [certStep, setCertStep] = useState(0);
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
  const [formInput2, setFormInput2] = useState({
    organization: "0002",
    loginType: "5",
    identity: "",
    userName: "",
    loginTypeLevel: "1",
    phoneNo: "",
    timeOut: "170",
    type: "0",
    drugImageYN: "0",
    medicationDirectionYN: "0",
    telecom: "0",
  });
  const [extraInput, setExtraInput] = useState();
  const toast = useToast();
  const [certType, setCertType] = useState("health");
  const [healthData, setHealthData] = useState<any>();
  const [medicineData, setMedicineData] = useState<any>();
  const [viewImageUpload, setViewImageUpload] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const q = query(
          collection(db, "survey_result"),
          where("uid", "==", user.uid)
        );

        onSnapshot(q, (querySnapshot) => {
          let list: any[] = [];
          querySnapshot.forEach((doc) => {
            console.log(list);
            list.push(doc.data());
          });

          if (list.length > 0) {
            setStep(1);
          }
        });
      }
    });
  }, []);

  useEffect(() => {
    if (healthData && medicineData && medicineData.length > 0) {
      setStep(2);
    }
  }, [healthData, medicineData]);

  const [imageList, setImageList] = useState<any>([]);

  function sleep(ms: number) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  }

  useEffect(() => {
    if (enableButton) {
      // 사용자 에이전트를 통해 모바일 기기와 안드로이드를 구분합니다.
      var isMobile = /Mobi|Android/i.test(navigator.userAgent);
      var isAndroid = /Android/i.test(navigator.userAgent);

      console.log(isMobile, isAndroid);

      if (certStep === 2) {
        if (formInput.loginTypeLevel === "1" && isMobile) {
          window.location.href = "kakaotalk://launch";
        }

        if (formInput.loginTypeLevel === "6" && isMobile) {
          if (isAndroid) {
            window.location.href =
              "http://naverapp.naver.com/default/?version=5";
          } else {
            window.location.href = "naversearchapp://default?version=1";
          }
        }
      }
    }
  }, [enableButton]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const firstFile = files[0];
      console.log(firstFile);
      uploadFile("medicine", firstFile).then(async (url) => {
        setImageList([...imageList, url]);
      });
    }

    if (imageRef.current) {
      imageRef.current.value = "";
    }
  };

  const handleSubmit = () => {
    console.log(healthData, medicineData, imageList);

    addDocument("codef_result", {
      uid: auth?.currentUser?.uid,
      health: healthData ? healthData : {},
      medicine: medicineData ? medicineData : [],
      image: imageList ? imageList : [],
      user: formInput,
      createdAt: new Date(),
    }).then(async () => {
      // props.onClose();
      setStep(0);
    });
  };

  const callCodef = async () => {
    await fetch(
      "https://port-0-fitner-lxu0mkd6748b546f.sel5.cloudtype.app/result",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: sessionId, ...formInput }),
      }
    )
      .then(async (res) => {
        return res.json();
      })
      .then(async (data) => {
        // 파싱된 응답 데이터를 이용하여 처리합니다.
        if (data.result.code !== "CF-03002") {
          // alert("정보를 다시 입력해주세요.");
          toast({
            title: "정보를 다시 입력해주세요.",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          setMedicineData(null);
          setHealthData(null);
          return;
        }
        setExtraInput(data.data);
        setEnableButton(true);
        setCertStep(certStep + 1);
      })
      .catch((error) => {
        console.log(error);
        setMedicineData(null);
        setHealthData(null);
        // toast({
        //   title: "인증에 실패하였습니다.",
        //   status: "error",
        //   duration: 3000,
        //   isClosable: true,
        //   position: "top-right",
        // });
        // onClose();
      });
  };

  const callResult = async () => {
    let startDate = new Date();
    let endDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 10);
    const param1 = {
      id: sessionId,
      ...formInput2,
      startDate: startDate.toISOString().substring(0, 10).replaceAll("-", ""),
      endDate: endDate.toISOString().substring(0, 10).replaceAll("-", ""),
    };

    fetch(
      "https://port-0-fitner-lxu0mkd6748b546f.sel5.cloudtype.app/information",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param1),
      }
    )
      .then(async (res) => {
        return res.json();
      })
      .then(async (data) => {
        console.log("3", data);
        if (data.result.code !== "CF-03002") {
          toast({
            title: data.result.message,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          return;
        }
        setMedicineData(data.data);
        setEnableButton(true);
        setCertStep(certStep + 1);
        toast({
          title: "건강검진 및 투약정보를 가져왔습니다.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
        setMedicineData(null);
        setHealthData(null);
        // toast({
        //   title: "인증에 실패하였습니다.",
        //   status: "error",
        //   duration: 3000,
        //   isClosable: true,
        //   position: "top-right",
        // });
        // onClose();
      });

    const param = {
      id: sessionId,
      ...formInput,
      signedData: "",
      simpleAuth: "1",
      secureNo: "",
      secureNoRefresh: "",
      is2Way: true,
      twoWayInfo: extraInput,
    };
    console.log(param);
    fetch("https://port-0-fitner-lxu0mkd6748b546f.sel5.cloudtype.app/result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    })
      .then(async (res) => {
        return res.json();
      })
      .then(async (data) => {
        console.log("2", data);
        if (data.result.code === "CF-00000") {
          setCertStep(certStep + 1);
        }
        if (data.result.code !== "CF-03002") {
          toast({
            title: data.result.message,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          setCertStep(certStep - 1);
          setSessionId(new Date().getTime().toString());
          return;
        }
        setHealthData(data.data);
      })
      .catch((error) => {
        console.log(error);
        // toast({
        //   title: "인증에 실패하였습니다.",
        //   status: "error",
        //   duration: 3000,
        //   isClosable: true,
        //   position: "top-right",
        // });
        // onClose();
      });
  };

  useEffect(() => {
    if (extraInput && certStep === 1) {
      toast({
        title: "인증을 진행해주세요!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  }, [extraInput]);

  useEffect(() => {
    if (healthData) {
      try {
        console.log(
          healthData.resResultList.length,
          "개의 건강정보를 받아왔습니다."
        );
        toast({
          title: "건강정보를 받아왔습니다.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      } catch (e) {
        console.log(e);
        toast({
          title: "인증에 실패하였습니다.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        setMedicineData(null);
        setHealthData(null);
        setEnableButton(true);
      }
    }
  }, [healthData]);

  useEffect(() => {
    if (medicineData) {
      console.log("투약정보를 받아왔습니다.");
      toast({
        title: "투약정보를 받아왔습니다.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  }, [medicineData]);

  useEffect(() => {
    if (medicineData) {
      console.log(medicineData);
      if (medicineData.length > 0) {
        // onClose();
      }
    }
  }, [medicineData]);

  return (
    // <Box height="100vh" display={isOpen ? "initial" : "none"}>
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        isCentered
        size={{ base: "full", md: "5xl" }}
        // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
        // blockScrollOnMount={false}
        // trapFocus={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius="none">
          <ModalCloseButton size="lg" />
          <ModalBody padding="0">
            <Flex>
              <Image
                display={{ base: "none", md: "block" }}
                w={"50%"}
                objectFit={"cover"}
                src={require("../../../Assets/Image/illust.png")}
                // src={require("../../../Assets/illust.jpg")}
                // src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&h=622&q=80"
                alt="Lovely Image"
                fallback={<Skeleton />}
              />

              <Flex
                direction="column"
                align="center"
                flex="1"
                py="12"
                px={{ base: "4", md: "6" }}
              >
                <Box maxW="md" mx="auto">
                  <StepsWithCircles currentStep={step} />
                  {/* <Logo
                  height="4"
                  color={useColorModeValue("blue.500", "blue.200")}
                  mx="auto"
                /> */}
                  {step === 0 && (
                    <Box textAlign="left" mx="auto" mt="4">
                      <Heading
                        fontWeight="extrabold"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        bgClip="text"
                        bgGradient="linear(to-r, teal.500, teal.300)"
                      >
                        내게 맞는 영양제 찾기
                      </Heading>
                      <Stack fontSize={{ base: "md", md: "sm" }} mt="2">
                        <Text>
                          이제부터 당신에게 꼭 맞는 영양제를 찾기위한 건강설문을
                          진행할게요
                        </Text>
                        <Text>
                          이 설문은 당신의 건강을 파악하기 위해 SCI 의학 논문을
                          분석하여 만들어졌습니다.
                        </Text>
                      </Stack>
                    </Box>
                  )}
                  {step === 1 && (
                    <Box textAlign="left" mx="auto" mt="4">
                      <Heading
                        fontWeight="extrabold"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        bgClip="text"
                        bgGradient="linear(to-r, teal.500, teal.300)"
                      >
                        축하합니다!
                      </Heading>
                      <Stack fontSize={{ base: "md", md: "sm" }} mt="2">
                        <Text>
                          당신은 지금 건강증진을 위한 첫번째 단계를 끝냈습니다.
                          이제 당신의 건강검진 자료와 투약 이력을 알려주세요
                        </Text>
                        <Text>더 정확한 영양제를 추천해드리겠습니다</Text>
                      </Stack>
                    </Box>
                  )}
                  {step === 2 && (
                    <Box textAlign="left" mx="auto" mt="4">
                      <Heading
                        fontWeight="extrabold"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        bgClip="text"
                        bgGradient="linear(to-r, teal.500, teal.300)"
                      >
                        이제 거의 다 됐습니다.
                      </Heading>
                      <Stack fontSize={{ base: "md", md: "sm" }} mt="2">
                        <Text>
                          지금 드시는 약을 알려주시면 더 정확한 영양제를 추천해
                          드릴 수 있습니다.
                        </Text>
                      </Stack>
                    </Box>
                  )}
                  {step === 3 && (
                    <Box textAlign="left" mx="auto" mt="4">
                      <Heading
                        fontWeight="extrabold"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        bgClip="text"
                        bgGradient="linear(to-r, teal.500, teal.300)"
                      >
                        감사합니다.
                      </Heading>
                      <Stack fontSize={{ base: "md", md: "sm" }} mt="2">
                        <Text>
                          알려주신 소중한 정보로 여러분에게 꼭 맞는 영양제를
                          찾도록 하겠습니다.
                        </Text>
                        <Text>
                          아래 1:1 약사 상담하기 버튼을 클릭하시면 24시간 이내에
                          AI 와 약사가 당신의 정보를 분석하여 알려줄 겁니다.
                        </Text>
                        <Text>
                          정확한 영양제 추천을 위해 조금만 기다려주세요
                        </Text>
                      </Stack>
                    </Box>
                  )}

                  <Stack spacing="7" mt="8" w={"100%"}>
                    <Stack direction={{ base: "column", md: "row" }} w={"100%"}>
                      {step === 0 && (
                        <Button onClick={() => window.open("/survey")}>
                          설문 시작하기
                        </Button>
                      )}
                      {step === 1 && (
                        <HStack>
                          <Button
                            w={"full"}
                            isDisabled={healthData}
                            leftIcon={
                              healthData && medicineData ? (
                                <BsCheckCircleFill />
                              ) : (
                                <></>
                              )
                            }
                            rightIcon={<></>}
                            onClick={() => {
                              setCertType("health");
                              setCertStep(0);
                              onOpen();
                            }}
                          >
                            {healthData
                              ? "건강검진자료 및 투약이력 제출완료"
                              : "건강검진자료 및 투약이력 알려주기"}
                          </Button>
                          {/* <Button
                            w={"49%"}
                            isDisabled={medicineData}
                            leftIcon={
                              medicineData ? <BsCheckCircleFill /> : <></>
                            }
                            rightIcon={<></>}
                            onClick={() => {
                              setCertType("medicine");
                              setCertStep(0);
                              onOpen();
                            }}
                          >
                            {medicineData
                              ? "투약이력 제출완료"
                              : "투약이력 알려주기"}
                          </Button> */}
                        </HStack>
                      )}
                      {step === 2 && (
                        <Button onClick={() => setViewImageUpload(true)}>
                          먹는약 업로드하기
                        </Button>
                      )}
                      {step === 3 && (
                        <Button
                          onClick={() => {
                            handleSubmit();
                          }}
                        >
                          1:1 약사 상담하기
                        </Button>
                      )}

                      {step < 3 && (
                        <Button
                          variant="outline"
                          onClick={() => setStep(step + 1)}
                        >
                          건너뛰기
                        </Button>
                      )}
                    </Stack>

                    <Text
                      fontSize="sm"
                      color={useColorModeValue("gray.600", "gray.400")}
                    >
                      {step === 0
                        ? "설문이 어렵다면 건너뛰셔도 됩니다. 다만 더 정확한 분석을 위해 꼭 설문을 부탁드려요"
                        : step === 1 &&
                          "건강검진, 투약자료 알려주기가 어렵다면 건너뛰기를 눌러주세요. 다만 더 정확한 분석을 위해 꼭 알려주기를 부탁드려요"}
                    </Text>
                  </Stack>
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        size={{ base: "full", md: "md" }}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Stack>
              <Text fontWeight={"bold"} fontSize="xl">
                본인확인서비스
                {/* {certStep} */}
              </Text>
              <Text fontSize="sm" color="gray.500" fontWeight={"light"}>
                {certStep === 0
                  ? "사용할 인증수단을 선택해주세요."
                  : certStep === 1
                  ? "개인정보를 입력해주세요."
                  : ""}
              </Text>
            </Stack>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={"8"}>
              {certStep === 0 && (
                <SimpleGrid gap="4" columns={4}>
                  {loginType.map((type: any, index) => (
                    <Flex
                      onClick={() => {
                        // if (certType === "health") {
                        setFormInput({
                          ...formInput,
                          loginTypeLevel: type.idx,
                        });
                        // } else {
                        setFormInput2({
                          ...formInput2,
                          loginTypeLevel: type.idx,
                        });
                        // }
                      }}
                      cursor={"pointer"}
                      aspectRatio={1}
                      border={"4px solid"}
                      borderColor={
                        formInput.loginTypeLevel === type.idx
                          ? "teal.500"
                          : "gray.200"
                      }
                      alignItems={"center"}
                      justifyContent={"center"}
                      key={index}
                      borderRadius={"lg"}
                    >
                      <Stack
                        alignItems={"center"}
                        justifyContent={"center"}
                        key={index}
                        p="1"
                      >
                        <Box w={"12"} h={"12"}>
                          {type.icon}
                        </Box>
                        <Text fontSize={"10px"} textAlign={"center"}>
                          {type.title}
                        </Text>
                      </Stack>
                    </Flex>
                  ))}
                </SimpleGrid>
              )}
              {certStep === 1 && (
                <Stack>
                  <FormControl isRequired>
                    <FormLabel>이름</FormLabel>
                    <Input
                      onChange={(e) => {
                        // if (certType === "health") {
                        setFormInput({
                          ...formInput,
                          userName: e.target.value,
                        });
                        // } else {
                        setFormInput2({
                          ...formInput2,
                          userName: e.target.value,
                        });
                        // }
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
                        // if (certType === "health") {
                        setFormInput({
                          ...formInput,
                          identity: e.target.value,
                        });
                        // } else {
                        setFormInput2({
                          ...formInput2,
                          identity: e.target.value,
                        });
                        // }
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
                        // if (certType === "health") {
                        setFormInput({
                          ...formInput,
                          phoneNo: e.target.value,
                        });
                        // } else {
                        setFormInput2({
                          ...formInput2,
                          phoneNo: e.target.value,
                        });
                        // }
                      }}
                      focusBorderColor="teal"
                      placeholder="01012341234"
                    />
                  </FormControl>
                </Stack>
              )}
              {certStep === 2 && (
                <Stack>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>
                    인증을 진행해주세요.
                  </Text>
                  <Text fontSize={"md"}>
                    입력하신 휴대폰으로 인증 요청 메세지를 보냈습니다. 앱에서
                    인증을 진행한 후 아래 버튼을 클릭하세요.
                  </Text>
                </Stack>
              )}
              {certStep === 3 && (
                <Center h={{ base: "lg", md: "100px" }}>
                  <VStack>
                    <Text>정보 조회중....</Text>
                    <CounterWithCircularProgress completed={medicineData} />
                    {!medicineData && (
                      <Text>환경에 따라 1~2분 정도 소요될 수 있습니다.</Text>
                    )}
                  </VStack>
                </Center>
              )}
            </Stack>
          </ModalBody>

          <ModalFooter py={4}>
            <Button
              display={
                certStep === 3 ? (medicineData ? "block" : "none") : "block"
              }
              isDisabled={
                (certStep === 1 &&
                  certType === "health" &&
                  (formInput.userName === "" ||
                    formInput.phoneNo === "" ||
                    formInput.identity === "")) ||
                (certStep === 2 && !enableButton)
              }
              w={"full"}
              colorScheme="teal"
              onClick={() => {
                if (certStep === 0) {
                  setCertStep(1);
                  setEnableButton(false);
                }
                if (certStep === 1) {
                  callCodef();
                  setEnableButton(false);
                }
                if (certStep === 2) {
                  callResult();
                  setEnableButton(false);
                }

                if (certStep >= 3) {
                  onClose();
                }
              }}
            >
              {certStep === 0
                ? "다음"
                : certStep === 1
                ? "확인"
                : certStep === 2
                ? "확인"
                : certStep === 3
                ? "완료"
                : "완료"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        size={{ base: "full", md: "md" }}
        isCentered
        isOpen={step === 2 && viewImageUpload}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
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
            <SimpleGrid columns={{ base: 2, md: 3 }} gap={2}>
              {imageList.map((url: any) => (
                <Box key={url} aspectRatio={1}>
                  <IconButton
                    aria-label=""
                    icon={<FiX />}
                    position={"absolute"}
                    mt={2}
                    ml={2}
                    variant={"solid"}
                    colorScheme={"gray"}
                    size={"sm"}
                    zIndex={9999}
                    onClick={() =>
                      setImageList(imageList.filter((i: any) => i !== url))
                    }
                  />
                  <AspectRatio key={url} ratio={1} cursor={"pointer"}>
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
          </ModalBody>

          <ModalFooter mb={4}>
            <Button
              w={"full"}
              colorScheme="teal"
              onClick={() => {
                setStep(step + 1);
                onClose();
              }}
            >
              완료
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    // </Box>
  );
};

const CounterWithCircularProgress = ({ completed = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!completed) {
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount >= 99 ? 99 : prevCount + 1));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [completed]);

  // 카운터가 완료된 상태일 때 100%로 고정
  const progressValue = completed ? 100 : count;

  return (
    <Box>
      <CircularProgress value={progressValue} size="100px" color="teal.500">
        <CircularProgressLabel>{progressValue}%</CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};
