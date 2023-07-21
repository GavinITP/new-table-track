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
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const NewProductModal = () => {
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
        Add new product
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input ref={initialRef} placeholder="Ex. Tom Yum Goong" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder="Ex. 80, 100, ..." />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input placeholder="Ex. foods, drinks, ..." />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder="description" />
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

export default NewProductModal;
