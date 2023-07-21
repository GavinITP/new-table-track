import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Badge,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { AiFillEdit, AiFillLike, AiFillDislike } from "react-icons/ai";

interface ProductCard {
  name: string;
  category: string;
  rating: number;
  description: string;
  price: number;
  imgUrl: string;
}

const ProductCard = ({
  name,
  category,
  rating,
  description,
  price,
  imgUrl,
}: ProductCard) => {
  return (
    <Card
      shadow="lg"
      borderRadius="xl"
      transition="transform 0.2s"
      _hover={{
        transform: "scale(1.03)",
      }}
    >
      <CardHeader>
        <Badge colorScheme="gray" mb={4}>
          {category}
        </Badge>
        <Heading size="md">{name}</Heading>
        <Text fontSize="sm" color="pink.500" my={1}>
          {price} Baht
        </Text>
      </CardHeader>

      <CardBody py={0}>
        <Stack divider={<StackDivider />} spacing="4">
          <Image src={imgUrl || "https://placehold.co/600x400"} />

          <Box>
            <Flex alignItems="center" gap={2}>
              {rating >= 3 ? (
                <Icon as={AiFillLike} color="green.400" />
              ) : (
                <Icon as={AiFillDislike} color="red.400" />
              )}
              <Text
                fontSize="md"
                fontWeight="semibold"
                textTransform="uppercase"
              >
                Rating: {rating}
              </Text>
            </Flex>
            <Text pt="2" fontSize="sm">
              {description}
            </Text>
          </Box>
        </Stack>
      </CardBody>

      <CardFooter>
        <Flex gap={2}>
          <Button
            leftIcon={<Icon as={AiFillEdit} />}
            variant="solid"
            colorScheme="pink"
            size="sm"
          >
            Edit
          </Button>

          <Button variant="ghost" colorScheme="pink" size="sm">
            Details
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
