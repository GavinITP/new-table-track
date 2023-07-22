import { Box, Heading, Image, Text } from "@chakra-ui/react";
import PageHeader from "../../../components/PageHeader";
import FeatureSection from "../../../components/FeatureSection";
import qrImg from "../../../assets/img/qr-explain.png";

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

        <Image
          src={qrImg}
          maxH="500px"
          mx="auto"
          borderRadius="2xl"
          mt={6}
          shadow="xl"
          transition="transform 0.2s ease-in-out" // Add a transition for smooth scaling
          _hover={{
            transform: "scale(1.02)", // Apply scale on hover
          }}
        />
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
