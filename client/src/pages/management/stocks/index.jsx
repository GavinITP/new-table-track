import Content from './ManagementContent'
import { ContextProvider } from './context/ManagementContext';
import { Box, Center, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";
import PageHeader from "../../../components/PageHeader";

const Management = () => {

  return (
    <ContextProvider>
      <Grid 
        h={"100%"}
        mt={16}
        mx={5}
        templateAreas={`
          "title"
          "main"
        `}
        gap={'4'}
      >
        <GridItem area={'title'}>
          <PageHeader title={"Management"} subtitle={"adsfasdfasdasdfas"} />
        </GridItem>
        <GridItem area={'main'}>
          <Content/>
        </GridItem>
      </Grid>
    </ContextProvider>

  );
};

export default Management;
