import { useGetProductsQuery } from "../../../state/api";
import PageHeader from "../../../components/PageHeader";
import {
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import ProductCard from "../../../components/ProductCard";
import { BsFilter } from "react-icons/bs";
import NewProductModal from "../../../components/NewProductModal";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery("");

  return (
    <Box>
      <PageHeader
        title="Products"
        subtitle="Here is a complete list of all the food items your restaurant offers."
      />

      <NewProductModal />

      <Menu>
        <MenuButton as={Button} rightIcon={<Icon as={BsFilter} />}>
          Sort By
        </MenuButton>
        <MenuList>
          <MenuItem>Price</MenuItem>
          <MenuItem>Date</MenuItem>
          <MenuItem>Rating</MenuItem>
        </MenuList>
      </Menu>

      {isLoading ? (
        <SimpleGrid columns={{ base: 1, lg: 2, xl: 4 }}>loading...</SimpleGrid>
      ) : (
        <SimpleGrid columns={{ base: 1, lg: 2, xl: 4 }} spacing={6}>
          {data.map((product: any) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              rating={product.rating}
              description={product.description}
              price={product.price}
              imgUrl="https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Products;
