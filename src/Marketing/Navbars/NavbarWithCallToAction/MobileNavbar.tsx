import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps,
  Stack,
} from "@chakra-ui/react";

export const MobileDrawer = (props: Omit<DrawerProps, "children">) => (
  <Drawer placement="top" {...props}>
    <DrawerContent>
      <DrawerBody mt="16">
        <Stack spacing="6" align="stretch">
          <Button>무료로 내 맞춤 영양제 찾으러 가기</Button>
        </Stack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
