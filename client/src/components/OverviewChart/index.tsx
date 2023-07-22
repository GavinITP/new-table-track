import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../../state/api";
import { Box, Spinner } from "@chakra-ui/react";

interface Serie {
  id: string;
  color: string;
  data: {
    x: string;
    y: number;
  }[];
}

const OverviewChart = ({ view }: { view: string }) => {
  const { data, isLoading } = useGetSalesQuery("");
  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) return [[], []];

    const { monthlyData } = data;

    const totalSalesLine: Serie = {
      id: "totalSales",
      color: "#013245",
      data: Object.values(monthlyData).map((item) => ({
        x: (item as { month: string; totalSales: number }).month,
        y: (item as { month: string; totalSales: number }).totalSales,
      })),
    };

    const totalUnitsLine: Serie = {
      id: "totalUnits",
      color: "#845932",
      data: Object.values(monthlyData).map((item) => ({
        x: (item as { month: string; totalUnits: number }).month,
        y: (item as { month: string; totalUnits: number }).totalUnits,
      })),
    };

    return [[totalSalesLine], [totalUnitsLine]];
  }, [data]);

  if (!data || isLoading)
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
    <Box h="500px">
      <ResponsiveLine
        animate={true}
        data={view === "sales" ? totalSalesLine : totalUnitsLine}
        margin={{ top: 50, right: 60, bottom: 50, left: 80 }}
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
        colors={
          view === "sales" ? { scheme: "accent" } : { scheme: "category10" }
        }
        useMesh={true}
      />
    </Box>
  );
};

export default OverviewChart;
