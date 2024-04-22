import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SubscribeForm } from "./SubscribeForm";
import { StepsWithCirclesAndText } from "../../../Application/ProgressSteps/StepsWithCirclesAndText/App";
import { StepsWithCircles } from "../../../Application/ProgressSteps/StepsWithCircles/App";
import { useState } from "react";

export const PopupWithImage = (props: any) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [step, setStep] = useState(0);

  return (
    // <Box height="100vh" display={isOpen ? "initial" : "none"}>
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      size={{ base: "full", md: "5xl" }}
      // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent borderRadius="none" mx="4">
        <ModalCloseButton size="lg" />
        <ModalBody padding="0">
          <Flex>
            <AspectRatio
              ratio={1}
              width="50%"
              maxW={{ lg: "md" }}
              display={{ base: "none", md: "flex" }}
            >
              <Image
                objectFit="cover"
                src={require("../../../Assets/illust.jpg")}
                // src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&h=622&q=80"
                alt="Lovely Image"
                fallback={<Skeleton />}
              />
            </AspectRatio>

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
                      <Text>정확한 영양제 추천을 위해 조금만 기다려주세요</Text>
                    </Stack>
                  </Box>
                )}

                <Stack spacing="7" mt="8">
                  <HStack>
                    {step === 0 && (
                      <Button onClick={() => window.open("/survey")}>
                        설문 시작하기
                      </Button>
                    )}
                    {step === 1 && <Button>건강검진, 투약자료 알려주기</Button>}
                    {step === 2 && <Button>먹는약 업로드하기</Button>}
                    {step === 3 && (
                      <Button onClick={props.onClose}>1:1 약사 상담하기</Button>
                    )}

                    {step < 3 && (
                      <Button
                        variant="outline"
                        onClick={() => setStep(step + 1)}
                      >
                        건너뛰기
                      </Button>
                    )}
                  </HStack>
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
    // </Box>
  );
};
