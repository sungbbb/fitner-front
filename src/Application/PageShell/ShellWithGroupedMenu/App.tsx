import {
  Box,
  Circle,
  Flex,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { BiBuoy, BiCog, BiNews } from "react-icons/bi";
import { AccountSwitcher } from "./AccountSwitcher";
import { NavGroup } from "./NavGroup";
import { NavItem } from "./NavItem";
import { RiSurveyFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { getAllDoc, getAllDoc2 } from "../../../Firebase/firebase_func";
import { ListWithDraggableElements } from "../../List/ListWithDraggableElements/App";
import { UserTable } from "../../Tables/UserTable/App";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../Firebase/firebase_conf";
import ReorderableSurvey from "../../../Pages/ReorderbleSurvey";

export const ShellWithGroupedMenu = () => {
  const [menu, setMenu] = useState(0);

  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="gray.900" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <AccountSwitcher />
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              {/* <Stack spacing="1">
                <NavItem active icon={<BiHome />} label="Get Started" />
                <NavItem icon={<BiCommentAdd />} label="Inbox" />
              </Stack> */}
              <NavGroup label="개요">
                <NavItem
                  onClick={() => setMenu(0)}
                  active={menu === 0}
                  icon={<RiSurveyFill />}
                  label="설문 관리"
                />
              </NavGroup>

              <NavGroup label="관리 페이지">
                <NavItem
                  onClick={() => setMenu(1)}
                  active={menu === 1}
                  icon={<BiNews />}
                  label="상담 관리"
                />
              </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1">
                <NavItem subtle icon={<BiCog />} label="설정" />
                <NavItem
                  subtle
                  icon={<BiBuoy />}
                  label="개발 지원"
                  endElement={<Circle size="2" bg="blue.400" />}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box bg={mode("white", "gray.800")} flex="1" p="6">
          <Box
            w="full"
            h="full"
            overflow={"scroll"}
            rounded="lg"
            // border="3px dashed #d9d9d9"
            // color={mode("gray.200", "gray.700")}
          >
            {menu === 0 ? <SurveyPage /> : <ConsultPage />}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const SurveyPage = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getAllDoc("survey").then((res: any) => {
      setList(res);
    });
  }, []);
  // return <ListWithDraggableElements list={list} />;
  return <ReorderableSurvey list={list} />;
};

const ConsultPage = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getAllDoc2("codef_result").then((res: any) => {
      setList(res);
    });
  }, []);
  return <UserTable list={list} />;
};
