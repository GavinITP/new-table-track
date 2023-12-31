import { useState, useMemo } from "react";
import { Box, Flex, Icon, Spinner, Text } from "@chakra-ui/react";
import { ResponsiveLine, Serie } from "@nivo/line";
import { useGetSalesQuery } from "../../../state/api";
import PageHeader from "../../../components/PageHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar } from "react-icons/ai";

const Daily = () => {
  const [startDate, setStartDate] = useState(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState(new Date("2021-03-01"));

  const { data, isLoading } = useGetSalesQuery("");

  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { dailyData } = data;
    const totalSalesLine = {
      id: "totalSales",
      color: "#132423",
      data: [] as { x: string; y: number }[],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: "#231234",
      data: [] as { x: string; y: number }[],
    };

    Object.values(dailyData).forEach(
      ({ date, totalSales, totalUnits }: any) => {
        const dateFormatted = new Date(date);
        if (dateFormatted >= startDate && dateFormatted <= endDate) {
          const splitDate = date.substring(date.indexOf("-") + 1);

          totalSalesLine.data = [
            ...totalSalesLine.data,
            { x: splitDate, y: totalSales },
          ];
          totalUnitsLine.data = [
            ...totalUnitsLine.data,
            { x: splitDate, y: totalUnits },
          ];
        }
      }
    );

    const formattedData: Serie[] = [totalSalesLine, totalUnitsLine];
    return [formattedData];
  }, [data, startDate, endDate]);

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
    <Box>
      <PageHeader title="Daily" subtitle="See your daily sales details" />

      <Flex gap={12} my={8}>
        <Flex alignItems="center" gap={2}>
          <Text>Start Date:</Text>
          <Flex
            px={4}
            py={2}
            borderRadius="full"
            shadow="md"
            overflow="hidden"
            alignItems="center"
          >
            <Icon as={AiFillCalendar} mr={2} />
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date || new Date())}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </Flex>
        </Flex>

        <Flex alignItems="center" gap={2}>
          <Text>End Date:</Text>
          <Flex
            px={4}
            py={2}
            borderRadius="full"
            shadow="md"
            overflow="hidden"
            alignItems="center"
          >
            <Icon as={AiFillCalendar} mr={2} />
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={endDate}
              onChange={(date) => setEndDate(date || new Date())}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex gap={8}>
        <Text fontSize="sm" color="brown">
          Brown: sales
        </Text>
        <Text fontSize="sm" color="red.500">
          Red: units
        </Text>
      </Flex>

      <Box h="500px">
        <ResponsiveLine
          data={formattedData || []}
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
          colors={{ scheme: "nivo" }}
          useMesh={true}
        />
      </Box>
    </Box>
  );
};

export default Daily;
