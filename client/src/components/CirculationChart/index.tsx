import { Box } from "@chakra-ui/react";
import { ResponsiveLine } from "@nivo/line";

const CirculationChart = () => {
  const data = [
    {
      id: "circulation",
      data: [
        { x: "Day 1", y: 5000 },
        { x: "Day 2", y: 6000 },
        { x: "Day 3", y: 8000 },
        { x: "Day 4", y: 10000 },
        { x: "Day 5", y: 9000 },
      ],
    },
  ];
  return (
    <Box h="200px">
      <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 3000,
          max: 12000,
          stacked: true,
          reverse: false,
        }}
        curve="natural"
        colors={{ scheme: "category10" }}
        enablePoints={true}
        enableGridX
        enableGridY
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default CirculationChart;
