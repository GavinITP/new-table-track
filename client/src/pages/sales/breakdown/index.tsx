import { Grid } from "@chakra-ui/react";
import BreakdownChart from "../../../components/BreakdownChart";
import IncomeSourcesChart from "../../../components/IncomeSourcesChart";
import PageHeader from "../../../components/PageHeader";

const Breakdown = () => {
  return (
    <div>
      <PageHeader
        title="Breakdown"
        subtitle="See where your income comes from"
      />
      <Grid templateColumns={{ base: "1fr", lg: "40% 60%" }}>
        <IncomeSourcesChart />
        <BreakdownChart />
      </Grid>
    </div>
  );
};

export default Breakdown;
