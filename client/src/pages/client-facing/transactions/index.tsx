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
  Tag,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { useGetTransactionsQuery } from "../../../state/api";
import PageHeader from "../../../components/PageHeader";
import { format } from "date-fns";

import { BiSolidFileExport } from "react-icons/bi";
import { FaSyncAlt } from "react-icons/fa";

const Customers = () => {
  const { data, isLoading } = useGetTransactionsQuery("");

  console.log(data);

  return (
    <Box>
      <PageHeader
        title="Transactions"
        subtitle="See your latest restaurant transaction history."
      />

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

      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.3s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          position="fixed"
          top="50%"
          left="50%"
        />
      ) : (
        <TableContainer borderRadius="xl" shadow="xl">
          <Table variant="simple" colorScheme="gray">
            <Thead>
              <Tr bgColor="pink.500">
                <Th color="white">User ID.</Th>
                <Th color="white">Created At</Th>
                <Th color="white"># of products</Th>
                <Th color="white">Cost (THB)</Th>
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
                  <Td cursor="pointer">
                    <Flex alignItems="center">
                      <Text>{transaction.products.length}</Text>

                      <Popover>
                        <PopoverTrigger>
                          <Tag ml={2}>View history</Tag>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>Order history</PopoverHeader>
                          <PopoverBody>
                            {transaction.products.map((product: any) => (
                              <Text>no. # {product}</Text>
                            ))}
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Flex>
                  </Td>
                  <Td>{(transaction.cost / 10).toFixed(2)}</Td>
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
