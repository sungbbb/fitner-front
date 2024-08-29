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
  Spinner
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { StepsWithCircles } from "../Application/ProgressSteps/StepsWithCircles/App";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase_conf";
import { addDocument, uploadFile, getAllDoc2 } from "../Firebase/firebase_func";
import { MdAdd } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { isMobile } from 'react-device-detect';
function Find() {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(parseInt(window.location.pathname.split("/").pop()));
  const [viewImageUpload, setViewImageUpload] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [imageList, setImageList] = useState([]);
  const imageRef = useRef(null);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [survey, setSurvey] = useState([]);
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
  const modalOpen = () => {
    onOpen();
  };

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
      let userName = '';
      if (userSurveys.length > 0 && data?.formInput?.userName) {
        // 설문 데이터와 기본 데이터가 모두 있는 경우, 기본 데이터의 이름을 사용
        userName = data.formInput.userName;
      } else if (userSurveys.length > 0) {
        // 설문 데이터만 있는 경우
        userName = userSurveys[0].answer[0].answer;
      } else if (data?.formInput?.userName) {
        // 기본 데이터만 있는 경우
        userName = data.formInput.userName;
      } else {
        // 둘 다 없는 경우
        userName = '미제출';
      }
      if (isMobile) {
        if (userName !== '미제출') {
          window.open(`https://pf.kakao.com/talk/bot/@핏트너/${encodeURIComponent(userName)}님의 약상담 요청입니다`, "_blank");
        } else {
          window.open(`https://pf.kakao.com/talk/bot/@핏트너/고객님의 약상담 요청입니다`, "_blank");
        }
      } else {
        window.open(`https://pf.kakao.com/_GxgdpG/chat?referer=${window.location.href}`, "_blank");
      }
      navigate("/");
    });
  };
  const handleChange = (event) => {
    const files = event.target.files;
    setIsLoading(true); // 업로드 시작 시 로딩 상태 설정
    if (files && files.length > 0) {
      const firstFile = files[0];
      uploadFile("medicine", firstFile).then(async (url) => {
        setImageList([...imageList, url]);
        setIsLoading(false); // 업로드 완료 시 로딩 상태 해제
      });
    }
    if (imageRef.current) {
      imageRef.current.value = "";
    }
  };
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('f65239acc1b677c40c6dfa6d4584568d');
    };
    return () => {
      setIsLoading(false); // 컴포넌트 언마운트 시 로딩 상태 해제
    };
  }, [navigate]);
  return (
    <Container maxW="container.xl">
      <Center minH={"100vh"}>
        <Box
          position="fixed"  // 상단에 고정
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
                  건강설문과 약사 상담으로<br />
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
                      fontSize={{ base: "xs", lg: "sm" }}
                      onClick={() => {
                        navigate("/cert");
                      }}
                    >
                      건강검진자료 및 투약이력 알려주기
                    </Button>
                  )}
                  {step === 2 && (
                    <Button flex="1" onClick={() => setViewImageUpload(true)}>
                      먹는약 업로드하기
                    </Button>
                  )}
                  {step === 3 && (
                    <Button
                      flex="1"
                      onClick={() => {
                        modalOpen();
                      }}
                    >
                      1:1 약사 상담하기
                    </Button>
                  )}
                  {/* 모달 구성 */}
                  <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    isCentered
                    size={{ base: "sm", md: "md" }}
                  >
                    <ModalOverlay />
                    <ModalContent
                      maxW={{ base: "50%", md: "500px" }} // 모바일에서는 95% 너비로 설정
                      mb={{ base: "80%", md: "20%" }} // 모바일에서는 하단에 위치하도록 설정
                      mt={{ base: "auto" }} // 모바일에서는 상단 여백을 없애고 하단에 위치
                    >
                      <ModalHeader display="flex" justifyContent="center">
                        <Text fontWeight="bold" textAlign="center">
                          1:1 약사 상담하기
                        </Text>
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody display="flex" justifyContent="center" alignItems="center">
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
                            onClose();
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
                          let userName = '';
                          const fetchUserName = async () => {
                            try {
                              const userSurveys = await getAllDoc2("survey_result", auth?.currentUser?.uid);
                              if (userSurveys.length > 0 && data?.formInput?.userName) {
                                userName = data.formInput.userName;
                              } else if (userSurveys.length > 0) {
                                userName = userSurveys[0].answer[0].answer;
                              } else if (data?.formInput?.userName) {
                                userName = data.formInput.userName;
                              } else {
                                userName = '미제출';
                                navigate(`/find/3?name=${encodeURIComponent(userName)}`);
                              }
                            } catch (error) {
                              console.error("Error fetching surveys:", error);
                              userName = '미제출';
                              navigate(`/find/3?name=${encodeURIComponent(userName)}`);
                            }
                          };

                          fetchUserName();
                        } else {
                          navigate(`/find/${step + 1}`)
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
            isCentered={{ base: false, md: true}}
            isOpen={step === 2 && viewImageUpload}
            onClose={onClose}
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent
              maxW={{ base: "100%", md: "500px" }} // 모바일에서는 95% 너비로 설정
              mb={{ base: 0, md: "20%" }} // 모바일에서는 하단에 위치하도록 설정
              mt={{ base: "auto" }} // 모바일에서는 상단 여백을 없애고 하단에 위치
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
                          borderRadius="full" // 둥글게 설정
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
                    setIsLoading(true); // 로딩 시작
                    navigate(`/find/${step + 1}`);
                    onClose();
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
export default Find;