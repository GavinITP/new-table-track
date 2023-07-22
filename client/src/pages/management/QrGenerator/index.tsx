import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import PageHeader from "../../../components/PageHeader";
import FeatureSection from "../../../components/FeatureSection";
import qrImgExplain from "../../../assets/img/qr-explain.png";
import QrStep from "../../../components/QrStep";
import QrImg from "../../../assets/img/qr-code.png";
import { MdOutlineReplay } from "react-icons/md";
import { BsFillPrinterFill } from "react-icons/bs";

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
          src={qrImgExplain}
          maxH="500px"
          mx="auto"
          borderRadius="2xl"
          mt={6}
          shadow="xl"
          transition="transform 0.2s ease-in-out"
          _hover={{
            transform: "scale(1.02)",
          }}
        />
      </Box>

      <Box my={20}>
        <Heading fontSize="2xl">
          All you need are just{" "}
          <Box color="pink.500" display="inline-block" fontSize="5xl" ml={2}>
            3 steps.
          </Box>
        </Heading>
      </Box>

      <Box mx={50}>
        <QrStep />
      </Box>

      <Image
        src={QrImg}
        h={"300px"}
        mx="auto"
        mt={12}
        shadow="2xl"
        transition="transform 0.2s ease-in-out"
        _hover={{
          transform: "scale(1.02)",
        }}
      />

      <Flex gap={6} justifyContent="center" my={10}>
        <Button
          rightIcon={<Icon as={MdOutlineReplay} />}
          colorScheme="pink"
          variant="outline"
        >
          Generate
        </Button>
        <Button
          rightIcon={<Icon as={BsFillPrinterFill} />}
          colorScheme="pink"
          variant="solid"
        >
          Print
        </Button>
      </Flex>
    </Box>
  );
};

export default QrGenerator;
