import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../../state/api";
import { Box } from "@chakra-ui/react";

const OverviewChart = ({ isDashboard = false, view }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { data, isLoading } = useGetSalesQuery();

  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) return [];

    const { monthlyData } = data;
    const totalSalesLine = {
      id: "totalSales",
      color: "#013245",
      data: [],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: "#845932",
      data: [],
    };

    Object.values(monthlyData).reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const curSales = acc.sales + totalSales;
        const curUnits = acc.units + totalUnits;

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: month, y: curSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: month, y: curUnits },
        ];

        return { sales: curSales, units: curUnits };
      },
      { sales: 0, units: 0 }
    );

    return [[totalSalesLine], [totalUnitsLine]];
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!data || isLoading) return "Loading...";

  return (
    <Box h="500px">
      <ResponsiveLine
        data={view === "sales" ? totalSalesLine : totalUnitsLine}
        margin={{ top: 50, right: 60, bottom: 50, left: 80 }}
        xScale={{
          type: "point",
          values: months,
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
