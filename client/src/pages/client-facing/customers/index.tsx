import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
} from "@chakra-ui/react";
import { useGetCustomersQuery } from "../../../state/api";
import PageHeader from "../../../components/PageHeader";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiSolidFileExport } from "react-icons/bi";

const Customers = () => {
  const { data, isLoading } = useGetCustomersQuery();

  return (
    <Box>
      <PageHeader title="Customers" subtitle="See list of your customers" />

      <Button
        leftIcon={<Icon as={AiFillPlusCircle} />}
        colorScheme="pink"
        variant="solid"
        my={8}
        mr={4}
      >
        Add new customer
      </Button>

      <Button
        rightIcon={<Icon as={BiSolidFileExport} />}
        variant="solid"
        my={8}
        mr={4}
      >
        Export
      </Button>

      {isLoading ? (
        <Text>loading...</Text>
      ) : (
        <TableContainer borderRadius="xl" shadow="xl">
          <Table variant="simple" colorScheme="gray">
            <Thead>
              <Tr bgColor="pink.500">
                <Th color="white">Name</Th>
                <Th color="white">Email</Th>
                <Th color="white">Tel.</Th>
                <Th color="white">Occupation</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((customer: any) => (
                <Tr>
                  <Td>{customer.name}</Td>
                  <Td>{customer.email}</Td>
                  <Td>+{customer.phoneNumber}</Td>
                  <Td>{customer.occupation}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Customers;
