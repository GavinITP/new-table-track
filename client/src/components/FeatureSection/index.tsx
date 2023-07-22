import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";

import { MdAutoMode, MdPayments, MdFastfood } from "react-icons/md";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack my={12}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={
            <Icon as={MdFastfood} color="pink.500" w={10} h={10} boxSize={8} />
          }
          title={"Food order system"}
          text={
            "We provide a food order app system that includes your menu order automatically from TableTrack, so you don't have to set it up yourself."
          }
        />
        <Feature
          icon={
            <Icon as={MdPayments} color="pink.500" w={10} h={10} boxSize={8} />
          }
          title={"Payment system"}
          text={
            "We already include the most common payment systems, like Promptpay, in our QR code. so you will receive transaction data automatically."
          }
        />
        <Feature
          icon={
            <Icon as={MdAutoMode} color="pink.500" w={10} h={10} boxSize={8} />
          }
          title={"Automatic data system"}
          text={
            "TableTrack receives customer data automatically, so all you need to do is insert your restaurant data the first time, and we will provide analytic for you."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
