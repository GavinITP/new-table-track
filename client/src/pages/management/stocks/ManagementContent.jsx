import './ManagementContent.css'
import AddItem from './AddItem'
import Table from './ManagementTable'
import {
    Box,
    Grid,
    GridItem,
  } from '@chakra-ui/react'

const ManagementContent = () => {

  return (
    <Grid
      border={'1px'}
      borderRadius={'10px'}
      bgGradient='linear(rgb(251, 255, 236) 0%, rgb(225, 244, 244) 100%)'
      w="100%"
      h={"full"}
      padding={'10px'}
      templateAreas={`
        "header"
        "content"
      `}
    >
      <Grid
        w="130px"
        area={'header'}
        my={2}
      >
        <AddItem/>
      </Grid>
      <Table/>
    </Grid>
  )
}

export default ManagementContent;