import ManagementContext from './context/ManagementContext'
import { useContext, useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

const ManagementTable = () => {
    const {dataList, setDataList} = useContext(ManagementContext)

    return (
        <>
            <Grid
                fontWeight={'extrabold'}
                area={'header'}
                gridTemplateColumns={'20% 25% 10% 20% 25%'}
            >
                <GridItem className='header'>Product Id</GridItem>
                <GridItem className='header'>Product Name</GridItem>
                <GridItem className='header'>Vat (7%)</GridItem>
                <GridItem className='header'>Product Price</GridItem>
                <GridItem className='header'>Update</GridItem>
            </Grid>
            {dataList.map((element) => {
                return (
                    <Grid
                        key={element.id}
                        area={'content'}
                        gridTemplateColumns={'20% 25% 10% 20% 25%'}
                    >
                        <GridItem className='item'>{element.id}</GridItem>
                        <GridItem className='item'>{element.name}</GridItem>
                        <GridItem className='item' textAlign={'center'}>
                        {String(element.vat).toUpperCase()}
                        </GridItem>
                        <GridItem className='item'>{element.price}</GridItem>
                        <GridItem className='item'>{element.update}</GridItem>
                    </Grid>
                )
            })}
        </>
    )
}

export default ManagementTable;