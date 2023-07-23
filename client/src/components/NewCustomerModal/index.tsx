import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Icon,
  Select,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const NewCustomerModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button
        leftIcon={<Icon as={AiFillPlusCircle} />}
        colorScheme="pink"
        variant="solid"
        my={8}
        mr={4}
        onClick={onOpen}
      >
        Add new customer
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Customer</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input placeholder="Ex. fiat_so_cool, ..." />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Ex. abc@email.com, ..." />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Tel.</FormLabel>
              <Input placeholder="Ex. 0998989989" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Select placeholder="---select option---">
                <option value="option1">Male</option>
                <option value="option2">Female</option>
                <option value="option3">Others</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Age</FormLabel>
              <NumberInput>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="pink" mr={3}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewCustomerModal;
