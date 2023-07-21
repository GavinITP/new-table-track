import { Box, Heading, Text } from "@chakra-ui/react";

const PageHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <Box mt={12}>
      <Heading fontWeight="bold">{title}</Heading>
      <Text color="gray.500" mt={4}>
        {subtitle}
      </Text>
    </Box>
  );
};

export default PageHeader;
