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

export const PopupWithImage = (props: any) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
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
                src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&h=622&q=80"
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
                <StepsWithCircles />
                {/* <Logo
                  height="4"
                  color={useColorModeValue("blue.500", "blue.200")}
                  mx="auto"
                /> */}
                <Box textAlign="left" mx="auto" mt="4">
                  <Heading fontWeight="extrabold">Title</Heading>
                  <Text fontSize="lg" mt="2">
                    Subscribe to our newsletter and{" "}
                    <Box as="strong" whiteSpace="nowrap">
                      get 20% off your first order
                    </Box>
                  </Text>
                </Box>

                <Stack spacing="7" mt="8">
                  <HStack>
                    <Button>Get Started</Button>
                    <Button variant="outline">Learn More</Button>
                  </HStack>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    {
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus recusandae"
                    }
                  </Text>
                  {/* <SubscribeForm /> */}
                  {/* <Text
                    fontSize="sm"
                    textAlign="center"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    By providing your email address, you agree to our{" "}
                    <Link textDecoration="underline" whiteSpace="nowrap">
                      privacy policy
                    </Link>{" "}
                    and <Link textDecoration="underline">terms</Link>
                  </Text> */}
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
