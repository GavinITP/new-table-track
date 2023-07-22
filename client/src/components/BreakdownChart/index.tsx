import { ResponsiveBar } from "@nivo/bar";
import { Box, Text } from "@chakra-ui/react";

const BreakdownChart = () => {
  const formattedData = [
    { category: "Curry", sales: 15000 },
    { category: "Noodles", sales: 12000 },
    { category: "Soups", sales: 8000 },
    { category: "Dessert", sales: 5000 },
    { category: "Beverage", sales: 4000 },
  ];

  return (
    <Box h="500px">
      <ResponsiveBar
        data={formattedData}
        keys={["sales"]}
        indexBy="category"
        colors={{ scheme: "pastel1" }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        padding={0.3}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Food and Drink",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Sales (Baht)",
          legendPosition: "middle",
          legendOffset: -60,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
      />

      <Text textAlign="center" fontSize="xl" my={8} fontWeight="bold">
        Total: {formattedData.reduce((total, item) => total + item.sales, 0)}{" "}
        Baht
      </Text>
    </Box>
  );
};

export default BreakdownChart;
