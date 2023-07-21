import { ResponsiveBar } from "@nivo/bar";
import { Box } from "@chakra-ui/react";

const SalesProductsChart = () => {
  const formattedData = [
    { menu: "Pad Thai", sales: 5000 },
    { menu: "Tom Yum Soup", sales: 4500 },
    { menu: "Green Curry", sales: 4000 },
    { menu: "Thai Iced Tea", sales: 3800 },
    { menu: "Mango Sticky Rice", sales: 3700 },
  ];

  return (
    <Box h="500px">
      <ResponsiveBar
        data={formattedData}
        keys={["sales"]}
        indexBy="menu"
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        padding={0.3}
        colors={{ scheme: "pastel2" }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Menu or Drinks",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Sales (THB)",
          legendPosition: "middle",
          legendOffset: -60,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
      />
    </Box>
  );
};

export default SalesProductsChart;
