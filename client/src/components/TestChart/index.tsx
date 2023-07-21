import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Series 1",
    data: [
      { x: 0, y: 10 },
      { x: 1, y: 20 },
      { x: 2, y: 15 },
      { x: 3, y: 25 },
      { x: 4, y: 18 },
      { x: 5, y: 30 },
    ],
  },
];

const LineChart = () => {
  return (
    <div style={{ height: "400px" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        xScale={{ type: "linear" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        curve="linear"
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        enablePoints={true}
        enableArea={false}
        colors={{ scheme: "nivo" }}
      />
    </div>
  );
};

export default LineChart;
