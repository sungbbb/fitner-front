import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { useState } from "react";

export const LoginWithCenteredForm = (props: any) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  return (
    <Container
      maxW="lg"
      py={{ base: "8", md: "16" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          {/* <Logo /> */}
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              핏트너 관리자 로그인
            </Heading>
            <Text color="fg.muted">
              {"💊 핏트너 플랫폼 관리 프로그램입니다."}
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel>아이디</FormLabel>
                <Input
                  id="adminId"
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, id: e.target.value })
                  }
                />
              </FormControl>
              <PasswordField
                id="adminPw"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <Button onClick={() => props.onLogin(formData)}>로그인</Button>
            </Stack>
            {/* <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="text" size="sm">
              Forgot password?
            </Button>
          </HStack> */}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
