import BreakdownChart from "../../../components/BreakdownChart";
import PageHeader from "../../../components/PageHeader";

const Breakdown = () => {
  return (
    <div>
      <PageHeader
        title="Breakdown"
        subtitle="See where your income come from"
      />

      <BreakdownChart />
    </div>
  );
};

export default Breakdown;
