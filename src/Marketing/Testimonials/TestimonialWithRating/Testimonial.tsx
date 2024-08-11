import {
  Avatar,
  Box,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Rating } from "./Rating";

interface TestiomonialProps {
  avatarUrl: string;
  company: string;
  name: string;
  logo: () => JSX.Element;
  title: string;
  image: string;
  quote: string;
}

export const Testimonial = (props: TestiomonialProps) => {
  const {
    avatarUrl,
    name,
    quote,
    image,
    title,
    company,
    logo: Logo,
  } = props;
  return (
    <Stack
      bgColor={"#EBFAF9"}
      spacing={{ base: "4", md: "8" }}
      flex={1}
      // border={"1px solid #d9d9d9"}
      borderRadius={"lg"}
      padding={"10"}
    >
      {/* 유저정보 */}
      <Stack
        gap="5"
        spacing="0"
        direction={{ base: "column", md: "row" }}
        divider={<StackDivider display={{ base: "none", md: "block" }} />}
        align={{ base: "flex-start", md: "center" }}
      >
        <Stack direction={"row"}>
          <Rating />
          <Text>5.0</Text>
        </Stack>
      </Stack>
      <Text textStyle={{ base: "sm", md: "md" }} fontWeight="medium">
        {quote}
      </Text>
      <Text
        textStyle={{ base: "sm", md: "md" }}
        fontWeight="medium"
        color={"#505050"}
      >{`${name} 고객님`}</Text>
      {/* <Image src={image} w={"80px"} /> */}
    </Stack>
  );
};
