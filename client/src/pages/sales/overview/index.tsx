import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import PageHeader from "../../../components/PageHeader";
import OverviewChart from "../../../components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("sales");

  return (
    <Box>
      <PageHeader
        title="Overview"
        subtitle="Overview of general revenue and profit"
      />

      <Box mt={8}>
        <Menu>
          <MenuButton as={Button} rightIcon={<Icon as={BsFilter} />}>
            {view}
          </MenuButton>

          <MenuList>
            <MenuItem
              onClick={() => {
                setView("sales");
              }}
            >
              Sales
            </MenuItem>
            <MenuItem
              onClick={() => {
                setView("units");
              }}
            >
              Units
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <OverviewChart view={view} />
      {/* <TestChart /> */}
    </Box>
  );
};

export default Overview;
