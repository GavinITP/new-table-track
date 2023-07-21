import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

interface Stat {
  title: string;
  value: string;
  statusText: string;
  status: "increase" | "decrease";
}

const StatCard = ({ title, value, statusText, status }: Stat) => {
  return (
    <Stat
      shadow="lg"
      borderRadius="xl"
      _hover={{ transform: "scale(1.03)", transition: "transform 0.3s ease" }}
      px={4}
      py={2}
    >
      <StatLabel>{title}</StatLabel>
      <StatNumber>{value}</StatNumber>
      <StatHelpText mt={4}>
        <StatArrow type={status} />
        {statusText}
      </StatHelpText>
    </Stat>
  );
};

export default StatCard;
