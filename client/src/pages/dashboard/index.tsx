import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";

import CirculationChart from "../../components/CirculationChart";

import IncomeSourcesChart from "../../components/IncomeSourcesChart";

import SalesProductsChart from "../../components/SalesProductsChart";

const Dashboard = () => {
  return (
    <Box>
      <PageHeader
        title="Dashboard"
        subtitle="Take a quick look at your restaurant stats today"
      />

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        mt={12}
        gap={4}
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={4}
        >
          <GridItem>
            <StatCard
              title="Bank Account Balance"
              value="123,456 ฿"
              statusText="+99%"
              status={"increase"}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title="Cost Per Day"
              value="1,234 ฿"
              statusText="-99%"
              status={"decrease"}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title="Golden Time"
              value="987 min"
              statusText="+99%"
              status={"increase"}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title="Client Per Day"
              value="123 people"
              statusText="+99%"
              status={"increase"}
            />
          </GridItem>
        </Grid>
        <GridItem colSpan={1}>
          <Box
            h="full"
            shadow="lg"
            borderRadius="xl"
            _hover={{
              transform: "scale(1.03)",
              transition: "transform 0.3s ease",
            }}
            px={4}
            py={2}
          >
            <Text fontWeight="medium" fontSize="lg">
              Circulation
            </Text>
            <CirculationChart />
          </Box>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "40% 60%" }}
        gap={8}
        mt={20}
        mb={6}
      >
        <GridItem>
          <Heading fontSize="3xl">Income sources</Heading>
          <Text color="gray.500" mt={6}>
            Describe income sources from online and onsite sources
          </Text>

          <IncomeSourcesChart />
        </GridItem>

        <GridItem>
          <Heading fontSize="3xl">Top sales product</Heading>
          <Text color="gray.500" mt={6}>
            Rank your top 5 products
          </Text>

          <SalesProductsChart />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
