import { Box, Heading, Text } from "@chakra-ui/react";
import PageHeader from "../../../components/PageHeader";
import FeatureSection from "../../../components/FeatureSection";

const QrGenerator = () => {
  return (
    <Box>
      <PageHeader
        title={"TableTrack QR Generator"}
        subtitle={"Here's what TableTrack QR can do for your restaurant "}
      />

      <FeatureSection />

      <Box>
        <Heading>
          <Box color="gray.500" display="inline-block" mr={4} fontSize="2xl">
            but...{" "}
          </Box>
          How does it work?
        </Heading>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa
          ipsam facilis deleniti obcaecati? Ad sequi dolore iure modi
          consectetur consequuntur, velit totam tempore nihil, culpa obcaecati
          vero. Repellat cum officia reiciendis vitae eius perferendis ipsam
          corporis rem, delectus ex voluptates provident inventore consequatur
          minus culpa. Quod eaque eius aut ipsam, quae error minus architecto
          eos eveniet voluptas corrupti dolores sint voluptate tempore! Sequi
          doloribus atque, modi iusto quas minus quidem id voluptate nobis
          laboriosam vel hic reprehenderit illum numquam dolor eos non tempora!
          Corporis, fuga delectus libero asperiores debitis molestiae
          necessitatibus aliquam? Perspiciatis eos modi assumenda ullam,
          temporibus iure?
        </Text>
      </Box>

      <Box mt={20}>
        <Heading fontSize="2xl">
          All you need are just{" "}
          <Box color="pink.500" display="inline-block" fontSize="5xl" ml={2}>
            3 steps.
          </Box>
        </Heading>

        <Text></Text>
      </Box>
    </Box>
  );
};

export default QrGenerator;
