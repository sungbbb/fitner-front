import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { MemberTable } from "./MemberTable";
import React from "react";

export const UserTable = (props: any) => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [targetUserName, setTargetUserName] = React.useState("");
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleSearchIconClick = () => {
    setTargetUserName(searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchIconClick();
    }
  };

  return (
    // <Container py={{ base: "4", md: "8" }} px={{ base: "0", md: 8 }}>
    <Box
      bg="bg.surface"
      boxShadow={{ base: "none", md: "sm" }}
      borderRadius={{ base: "none", md: "lg" }}
    >
      <Stack spacing="5">
        <Box px={{ base: "4", md: "6" }} pt="5">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
          >
            <Stack>
              <Text textStyle="lg" fontWeight="medium">
                상담 관리
              </Text>
              <Text color="fg.muted" textStyle="sm" whiteSpace={"pre-line"}>
                {`설문 내용을 열람하고, 고객 정보를 확인할 수 있습니다.`}
              </Text>
            </Stack>
            <InputGroup maxW="xs" w="200px" h="25px">
              <InputLeftElement
                pointerEvents="auto"
                onClick={handleSearchIconClick}
                cursor="pointer"
              >
                <Icon as={FiSearch} color="fg.muted" boxSize="4" />
              </InputLeftElement>
              <Input
                placeholder="검색"
                size="sm"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </InputGroup>
          </Flex>
        </Box>
        <Box overflowX="auto">
          <MemberTable {...props} targetUserName={targetUserName} />
        </Box>
        <Box px={{ base: "4", md: "6" }} pb="5">
          <HStack spacing="3" justify="space-between">
            {/* {!isMobile && (
              <Text color="fg.muted" textStyle="sm">
                총 10건의 검색결과가 있습니다.
              </Text>
            )} */}
            {/* <ButtonGroup
              spacing="3"
              justifyContent="space-between"
              width={{ base: "full", md: "auto" }}
              variant="secondary"
            >
              <Button isDisabled={props.isPrevDisabled} onClick={props.onPrev}>
                이전
              </Button>
              <Button isDisabled={props.isNextDisabled} onClick={props.onNext}>
                다음
              </Button>
            </ButtonGroup> */}
          </HStack>
        </Box>
      </Stack>
    </Box>
    // </Container>
  );
};