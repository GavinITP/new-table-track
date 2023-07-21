import { ResponsivePie } from "@nivo/pie";
import { Box } from "@chakra-ui/react";

const IncomeSourcesChart = () => {
  const formattedData = [
    { id: "Online", label: "Online visits", value: 234 },
    { id: "Onsite", label: "Onsite visits", value: 678 },
  ];

  return (
    <Box h="500px" w="90%">
      <ResponsivePie
        data={formattedData}
        colors={{ scheme: "pastel1" }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default IncomeSourcesChart;
