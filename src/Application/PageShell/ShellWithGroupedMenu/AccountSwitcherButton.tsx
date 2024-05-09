import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Img,
  useMenuButton,
} from "@chakra-ui/react";
import { HiSelector } from "react-icons/hi";

export const AccountSwitcherButton = (props: FlexProps) => {
  const buttonProps = useMenuButton(props);
  return (
    <Flex
      as="button"
      {...buttonProps}
      w="full"
      display="flex"
      alignItems="center"
      rounded="lg"
      bg="gray.700"
      px="3"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: "gray.600" }}
      _focus={{ shadow: "outline" }}
    >
      <HStack flex="1" spacing="3">
        <Img
          w="8"
          h="8"
          p={1}
          rounded="md"
          objectFit="cover"
          src={require("../../../Assets/Icon/logo.png")}
          alt="Chakra UI"
          bgColor={"white"}
        />
        <Box textAlign="start">
          <Box noOfLines={1} fontWeight="semibold">
            핏트너
          </Box>
          <Box fontSize="xs" color="gray.400">
            ID 328196565784
          </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <HiSelector />
      </Box>
    </Flex>
  );
};
