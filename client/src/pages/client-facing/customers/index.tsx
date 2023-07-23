import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Icon,
  Flex,
  Badge,
  Text,
} from "@chakra-ui/react";

import PageHeader from "../../../components/PageHeader";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSolidFileExport } from "react-icons/bi";

import { dataUser } from "../../../fakeData/customerData";
import { BsFillAwardFill } from "react-icons/bs";
import { FaSyncAlt } from "react-icons/fa";
import NewCustomerModal from "../../../components/NewCustomerModal";

interface customerType {
  _id: string;
  username: string;
  email: string;
  location: string;
  phoneNumber: string;
  visits: number;
  gender: string;
  ages: number;
}

const Customers = () => {
  return (
    <Box>
      <PageHeader title="Customers" subtitle="See a list of your customers" />

      <NewCustomerModal />

      <Button
        leftIcon={<Icon as={FaSyncAlt} />}
        colorScheme="pink"
        variant="outline"
        my={8}
        mr={4}
      >
        Sync
      </Button>

      <Button
        rightIcon={<Icon as={BiSolidFileExport} />}
        variant="solid"
        my={8}
        mr={4}
      >
        Export
      </Button>
      <TableContainer borderRadius="xl" shadow="xl">
        <Table variant="simple" colorScheme="gray">
          <Thead>
            <Tr bgColor="pink.500">
              <Th color="white">Username</Th>
              <Th color="white">Email</Th>
              <Th color="white">Tel.</Th>
              <Th color="white">Gender</Th>
              <Th color="white">Ages</Th>
              <Th color="white">Visits</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataUser.map((customer: customerType) => (
              <Tr>
                <Td>
                  <Flex alignItems="center" gap={2}>
                    <Icon as={AiFillInfoCircle} color="gray.400" />
                    <Box>{customer.username}</Box>
                  </Flex>
                </Td>
                <Td>{customer.email}</Td>
                <Td>{customer.phoneNumber}</Td>
                <Td>{customer.gender}</Td>
                <Td>{customer.ages}</Td>
                <Td>
                  <Flex gap={1}>
                    {customer.visits >= 5 ? (
                      <Icon as={BsFillAwardFill} color="yellow.400" />
                    ) : (
                      <Icon as={BsFillAwardFill} color="gray.500" />
                    )}
                    <Text fontWeight="bold">{customer.visits}</Text>
                    {customer.visits === 1 && (
                      <Badge colorScheme="green">NEW</Badge>
                    )}
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Customers;
