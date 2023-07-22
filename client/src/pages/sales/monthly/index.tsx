import { useMemo } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { ResponsiveLine, Serie } from "@nivo/line";
import { useGetSalesQuery } from "../../../state/api";
import PageHeader from "../../../components/PageHeader";

interface MonthlyData {
  month: string;
  totalSales: number;
  totalUnits: number;
}

const Monthly = () => {
  const { data, isLoading } = useGetSalesQuery("");

  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { monthlyData } = data;
    const totalSalesLine = {
      id: "totalSales",
      color: "#123412",
      data: [] as { x: string; y: number }[],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: "#234323",
      data: [] as { x: string; y: number }[],
    };

    Object.values<MonthlyData>(monthlyData).forEach(
      ({ month, totalSales, totalUnits }) => {
        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: month, y: totalSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: month, y: totalUnits },
        ];
      }
    );

    const formattedData = [totalSalesLine, totalUnitsLine];
    return [formattedData];
  }, [data]);

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.3s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        position="fixed"
        left="50%"
        top="50%"
      />
    );

  return (
    <Box>
      <PageHeader
        title="Monthly"
        subtitle="See your monthly sales details for this year"
      />

      <Flex gap={8} mt={16}>
        <Text fontSize="sm" color="red.500">
          Red: last year
        </Text>
        <Text fontSize="sm" color="green.500">
          Green: this year
        </Text>
      </Flex>

      <Box h="500px">
        <ResponsiveLine
          data={formattedData as Serie[]}
          margin={{ top: 20, right: 60, bottom: 50, left: 80 }}
          xScale={{
            type: "point",
          }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          curve="linear"
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Month",
            legendOffset: 30,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total revenue for this year",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          enableGridX={true}
          enableGridY={true}
          enablePoints={true}
          enableArea={true}
          colors={{ scheme: "dark2" }}
          useMesh={true}
        />
      </Box>
    </Box>
  );
};

export default Monthly;
