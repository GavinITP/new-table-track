import { Input, Select, Flex, Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import CloseContext from "./context/CloseContext";
import { checkAddbarValid, clearTab, datetime, selectBoolean } from "./function/function"
import { v4 as uuidv4 } from 'uuid';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

const AddItemBar = (props) => {
    const [formValid, setFormValid] = useState(false)
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [vat, setVat] = useState(true)
    const [price, setPrice] = useState(0)
    const [update, setUpdate] = useState("")
    // onclose ส่งไปหน้า AddItem.jsx
    const { isOpen, onOpen, onClose } = useContext(CloseContext)

    const stateSet = {id, name, vat, price, update}
    const setSet = {setId, setName, setVat, setPrice, setUpdate}

    const saveItem = () =>{
        const newData = {
            id,
            name,
            vat,
            price,
            update : datetime(update),
        }
        newData.key = uuidv4()

        clearTab(setSet)
        props.addItem(newData)
    }

    useEffect(() => {
        const valid = checkAddbarValid(stateSet)
        setFormValid(valid)
    }, [id, name, price, update])

    return (
        <>
            <DrawerBody>
                <Flex
                    my={2}
                    direction={'column'}
                    gap={2}
                >
                    <FormControl isRequired>
                        <FormLabel>Product Id</FormLabel>
                        <Input 
                            value={id}
                            placeholder='Please enter Product Id' 
                            onChange={(event)=>setId(event.target.value)}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Product Name</FormLabel>
                        <Input
                            value={name}
                            placeholder='Please enter Product Name'
                            onChange={(event)=>setName(event.target.value)}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Vat (7%)</FormLabel>
                        <Select
                            value={vat}
                            onChange={(event)=>{
                                setVat(selectBoolean(event.target.value))
                            }}
                        >
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Product Price</FormLabel>
                        <Input
                            value={price}
                            placeholder='Please enter Product Price'
                            onChange={(event)=>setPrice(event.target.value)}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Update Time</FormLabel>
                        <Input
                            type="datetime-local"
                            value={update}
                            onChange={(event)=>setUpdate(event.target.value)}
                            // onChange={(event)=>console.log(datetime(event.target.value))}
                        />
                    </FormControl>
                </Flex>
            </DrawerBody>
        
            <DrawerFooter>
                <FormControl >
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button type='submit' colorScheme='blue' onClick={saveItem} isDisabled={!formValid}>Add</Button>
                </FormControl>
            </DrawerFooter>
        </>
    )
}

export default AddItemBar;