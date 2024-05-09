import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AccountSwitcherButton } from "./AccountSwitcherButton";
import { useEffect, useState } from "react";
import { stat } from "fs";
import { LoginWithCenteredForm } from "../../Authentication/Login1/App";

export const adminId = "admin";
export const adminPw = "fitner1234";
export const AccountSwitcher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState({
    loginned: false,
  });

  useEffect(() => {
    if (localStorage.getItem("adminId") && localStorage.getItem("adminPw")) {
      setState({
        ...state,
        loginned: true,
      });
    }
  }, []);
  return (
    <Menu>
      <LogIn
        isOpen={!state.loginned}
        onClose={onClose}
        size={{ base: "full", md: "md" }}
      >
        <Text>{state.loginned ? "Log in" : "Log out"}</Text>
      </LogIn>
      <AccountSwitcherButton />
      <MenuList
        shadow="lg"
        py="4"
        color={useColorModeValue("gray.600", "gray.200")}
        px="3"
      >
        <MenuItem
          rounded="md"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          로그아웃
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const LogIn = (props: ModalProps) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>로그인</ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <LoginWithCenteredForm
            onLogin={(info: any) => {
              if (adminId === info.id && adminPw === info.password) {
                localStorage.setItem("adminId", info.id);
                localStorage.setItem("adminPw", info.password);
                window.location.reload();
              }
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
