import { Heading, Stack, StackProps, Text } from "@chakra-ui/react";

interface StatProps extends StackProps {
  label: string;
  value: string;
}

export const Stat = (props: StatProps) => {
  const { label, value, ...stackProps } = props;
  return (
    <Stack spacing="3" textAlign="center" {...stackProps}>
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        color="#015A68"
        fontWeight={"600"}
      >
        {value}
      </Text>
      <Text fontSize="lg" fontWeight="600" color="fg.muted">
        {label}
      </Text>
    </Stack>
  );
};
