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
  Icon,
} from "@chakra-ui/react";
import { useGetTransactionsQuery } from "../../../state/api";
import PageHeader from "../../../components/PageHeader";
import { format } from "date-fns";

import { BiSolidFileExport } from "react-icons/bi";

const Customers = () => {
  const { data, isLoading } = useGetTransactionsQuery("");

  console.log(data);

  return (
    <Box>
      <PageHeader
        title="Transactions"
        subtitle="See your latest restaurant transactions history"
      />

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
                <Th color="white">User ID.</Th>
                <Th color="white">Created At</Th>
                <Th color="white"># of products</Th>
                <Th color="white">Cost</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((transaction: any) => (
                <Tr>
                  <Td>{transaction.userId}</Td>
                  <Td>
                    {format(
                      new Date(transaction.createdAt),
                      "dd/MM/yyyy HH:mm:ss"
                    )}
                  </Td>
                  <Td>{transaction.products.length}</Td>
                  <Td>{transaction.cost} Baht</Td>
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
