import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { BiMenu } from "react-icons/bi"





export default function DrawerExample({btnRef}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    

    const Departments = [
        {title:"Women"},
        {title:"Men"},
        {title:"Kids & Baby"},
        {title:"Home"},
        {title:"Shoes"},
        {title:"Handbags & Accessories"},
        {title:"Bad & Bath"},
        {title:"Jewelary"},
    ]
  
    return (
      < Box >
        <BiMenu  ref={btnRef} onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerHeader>Shop By Department</DrawerHeader>
             <Box>
                {Departments.map(value=><DrawerBody key={value.title}>
                {value.title}
            </DrawerBody>)}
             </Box>
            
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }