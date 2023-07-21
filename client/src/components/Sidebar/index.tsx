import { Box, Flex, Image, List, Text } from "@chakra-ui/react";
import { MdHome, MdPeople, MdToday } from "react-icons/md";
import { AiFillPieChart, AiFillShopping } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import { BsArrowLeftRight, BsFillSearchHeartFill } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box position="fixed">
      <Flex
        flexDirection="column"
        minH="100vh"
        w="250px"
        shadow="xl"
        px={8}
        py={4}
      >
        <NavLink to="/dashboard">
          <Flex alignItems="center" mb={10}>
            <Image src={logo} w={8} h={8} mr={1} mb={1} />
            <Text fontSize="2xl" fontWeight="extrabold">
              ableTrack
            </Text>
          </Flex>
        </NavLink>

        <Flex direction="column" rowGap={8}>
          <Box>
            <Text mb={4} fontWeight="bold" fontSize="sm">
              Home
            </Text>
            <List spacing={4}>
              <SidebarItem icon={MdHome} title="Dashboard" link="/dashboard" />
            </List>
          </Box>
          <Box>
            <Text mb={4} fontWeight="bold" fontSize="sm">
              Client Facing
            </Text>
            <List spacing={4}>
              <SidebarItem
                icon={AiFillShopping}
                title="Products"
                link="/client/products"
              />
              <SidebarItem
                icon={MdPeople}
                title="Customers"
                link="/client/customers"
              />
              <SidebarItem
                icon={BsArrowLeftRight}
                title="Transactions"
                link="/client/transactions"
              />
            </List>
          </Box>
          <Box>
            <Text mb={4} fontWeight="bold" fontSize="sm">
              Sales
            </Text>
            <List spacing={4}>
              <SidebarItem
                icon={BsFillSearchHeartFill}
                title="Overview"
                link="/sales/overview"
              />
              <SidebarItem icon={MdToday} title="Daily" link="/sales/daily" />
              <SidebarItem
                icon={FaCalendarAlt}
                title="Monthly"
                link="/sales/monthly"
              />
              <SidebarItem
                icon={AiFillPieChart}
                title="Breakdown"
                link="/sales/breakdown"
              />
            </List>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
