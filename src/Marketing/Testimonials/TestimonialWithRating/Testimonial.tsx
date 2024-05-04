import { Avatar, Box, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Rating } from "./Rating";

interface TestiomonialProps {
  avatarUrl: string;
  company: string;
  name: string;
  logo: () => JSX.Element;
  title: string;
  quote: string;
}

export const Testimonial = (props: TestiomonialProps) => {
  const { avatarUrl, name, quote, title, company, logo: Logo } = props;
  return (
    <Stack
      bgColor={"#EBFAF9"}
      spacing={{ base: "6", md: "8" }}
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
        <Stack spacing={{ base: "4", md: "5" }} direction={"row"}>
          <Avatar src={avatarUrl} boxSize="14" name={name} />
          <Stack justify={"center"}>
            <Text fontWeight="semibold">{name} 님</Text>
            <Rating />
            {/* <Text color="fg.muted">
              {title}, {company}
            </Text> */}
          </Stack>
        </Stack>

        {/* <Logo /> */}
      </Stack>

      <Text textStyle={{ base: "sm", md: "md" }} fontWeight="medium">
        {quote}
      </Text>
    </Stack>
  );
};
