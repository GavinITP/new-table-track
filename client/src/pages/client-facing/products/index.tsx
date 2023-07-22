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
import { dataProduct } from "../../../fakeData/productsData";
import { useState } from "react";

interface ProductType {
  _id: string;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
  category: string;
  rating: number;
}

const Products = () => {
  const [products, SetProducts] = useState<ProductType[]>(dataProduct);

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

      <SimpleGrid columns={{ base: 1, lg: 2, xl: 4 }} spacing={6}>
        {products.map((product: ProductType) => (
          <div key={product._id}>
            <ProductCard
              name={product.name}
              category={product.category}
              rating={product.rating}
              description={product.description}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          </div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
