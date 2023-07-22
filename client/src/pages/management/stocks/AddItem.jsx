import { Button, Input, useDisclosure, Flex, Box, Select } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import ManagementContext from './context/ManagementContext'
import AddItemBar from './AddItemBar';
import CloseContext from './context/CloseContext';
import { createContext, useContext, useEffect, useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

const AddItem = () => {
    const {dataList, setDataList} = useContext(ManagementContext)

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const addNewItem = (newData) => {
        setDataList((prevData)=>{
            prevData.push(newData);
            return [...prevData]
        })
    }

    return (
        <CloseContext.Provider value={{ isOpen, onOpen, onClose }}>
            <Button 
                colorScheme='teal'
                fontSize={'sm'}
                rightIcon={<AddIcon/>}
                border={'1px'}
                borderRadius={'20px'}
                onClick={onOpen}
            >
                Add Product
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth={'1px'} >
                    Add New Product
                </DrawerHeader>
                <AddItemBar addItem={addNewItem} disclosure/>
                </DrawerContent>
            </Drawer>
        </CloseContext.Provider>
    )
}

export default AddItem;