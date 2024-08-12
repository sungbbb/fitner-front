import {
  Center,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as logos from "./Logos";

export const LogoGridWithTitle = () => (
  <Container py={{ base: "12", md: "16" }}>
    <Stack spacing="8">
      {/* <Text
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="medium"
        color="fg.muted"
        textAlign="center"
      >
        These and other companies trust us
      </Text> */}
      <SimpleGrid gap={{ base: "6", md: "8" }} columns={{ base: 2, lg: 4 }}>
        {/* {Object.entries(logos).map(([name, Logo]) => (
          <Center key={name}>
            <Logo
              h={{ base: "8", md: "10" }}
              maxW="180px"
              fill="fg.emphasized"
            />
          </Center>
        ))} */}
        {logos.Logotitle.map(({ title, image }) => (
          <Center key={title}>
            <Stack align="center">
              <Image src={image} alt={title} w={"64px"} h={"64px"} />
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                fontWeight="bold"
                color="fg.muted"
                textAlign="center"
              >
                {title}
              </Text>
            </Stack>
          </Center>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
);
