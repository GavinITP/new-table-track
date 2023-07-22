import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Icon,
  Input,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import PageHeader from "../../../components/PageHeader";
import { AiFillPlusCircle } from "react-icons/ai";

const data = [
  {
    _id: "12345ABCD00001",
    name: "Carrot",
    isVat: true,
    price: 2000,
    updatedAt: "22/07/2023 12:30",
  },
  {
    _id: "12345ABCD00002",
    name: "Chicken",
    isVat: false,
    price: 3000,
    updatedAt: "22/07/2023 12:45",
  },
  {
    _id: "12345ABCD00003",
    name: "Broccoli",
    isVat: true,
    price: 2500,
    updatedAt: "22/07/2023 13:00",
  },
  {
    _id: "12345ABCD00004",
    name: "Salmon",
    isVat: false,
    price: 3500,
    updatedAt: "22/07/2023 13:15",
  },
  {
    _id: "12345ABCD00005",
    name: "Eggs",
    isVat: true,
    price: 1800,
    updatedAt: "22/07/2023 13:30",
  },
  {
    _id: "12345ABCD00006",
    name: "Beef",
    isVat: false,
    price: 3200,
    updatedAt: "22/07/2023 13:45",
  },
  {
    _id: "12345ABCD00007",
    name: "Spinach",
    isVat: true,
    price: 2100,
    updatedAt: "22/07/2023 14:00",
  },
  {
    _id: "12345ABCD00008",
    name: "Pork",
    isVat: false,
    price: 2900,
    updatedAt: "22/07/2023 14:15",
  },
  {
    _id: "12345ABCD00009",
    name: "Tomatoes",
    isVat: true,
    price: 1800,
    updatedAt: "22/07/2023 14:30",
  },
  {
    _id: "12345ABCD00010",
    name: "Shrimp",
    isVat: false,
    price: 3800,
    updatedAt: "22/07/2023 14:45",
  },
  {
    _id: "12345ABCD00011",
    name: "Potatoes",
    isVat: true,
    price: 2200,
    updatedAt: "22/07/2023 15:00",
  },
  {
    _id: "12345ABCD00012",
    name: "Lamb",
    isVat: false,
    price: 4100,
    updatedAt: "22/07/2023 15:15",
  },
  {
    _id: "12345ABCD00013",
    name: "Onions",
    isVat: true,
    price: 1600,
    updatedAt: "22/07/2023 15:30",
  },
  {
    _id: "12345ABCD00014",
    name: "Fish",
    isVat: false,
    price: 2900,
    updatedAt: "22/07/2023 15:45",
  },
  {
    _id: "12345ABCD00015",
    name: "Bell Pepper",
    isVat: true,
    price: 2300,
    updatedAt: "22/07/2023 16:00",
  },
  {
    _id: "12345ABCD00016",
    name: "Turkey",
    isVat: false,
    price: 3400,
    updatedAt: "22/07/2023 16:15",
  },
  {
    _id: "12345ABCD00017",
    name: "Zucchini",
    isVat: true,
    price: 2000,
    updatedAt: "22/07/2023 16:30",
  },
  {
    _id: "12345ABCD00018",
    name: "Squid",
    isVat: false,
    price: 3800,
    updatedAt: "22/07/2023 16:45",
  },
  {
    _id: "12345ABCD00019",
    name: "Cauliflower",
    isVat: true,
    price: 2500,
    updatedAt: "22/07/2023 17:00",
  },
  {
    _id: "12345ABCD00020",
    name: "Venison",
    isVat: false,
    price: 3900,
    updatedAt: "22/07/2023 17:15",
  },
];

const Stocks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <PageHeader
        title="Stocks Management"
        subtitle="Manage your stocks here"
      />

      <Button
        leftIcon={<Icon as={AiFillPlusCircle} />}
        colorScheme="pink"
        variant="solid"
        mt={8}
        mb={4}
        mr={4}
        onClick={onOpen}
      >
        Add new product
      </Button>

      <TableContainer
        my={8}
        shadow="lg"
        transition="transform 0.2s ease-in-out"
        _hover={{ transform: "scale(1.01)", cursor: "pointer" }}
      >
        <Table variant="striped">
          <TableCaption>Stocks management table</TableCaption>
          <Thead>
            <Tr>
              <Th>Stock Id.</Th>
              <Th>Name</Th>
              <Th>VAT (7%)</Th>
              <Th>price (THB)</Th>
              <Th>Updated At</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((product) => (
              <Tr>
                <Td>{product._id}</Td>
                <Td>{product.name}</Td>
                <Td>{product.isVat ? "Yes" : "No"}</Td>
                <Td>{product.price}</Td>
                <Td>{product.updatedAt}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add new stock</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel>Name</FormLabel>
                <Input id="username" placeholder="stock name" />
              </Box>

              <Box>
                <FormLabel>VAT (7%)</FormLabel>
                <Select placeholder="--select below--">
                  <option value="option1">Yes</option>
                  <option value="option2">No</option>
                </Select>
              </Box>

              <Box>
                <FormLabel>Price (THB)</FormLabel>
                <Input id="username" placeholder="Please enter user name" />
              </Box>

              <Box>
                <FormLabel>Updated At</FormLabel>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="pink">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Stocks;
