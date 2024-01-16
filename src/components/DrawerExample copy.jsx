import {
  ArrowForwardIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BiMenu } from "react-icons/bi";

export default function DrawerExample2({ value }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnref = useRef();
  const product = value.titleProduct
console.log(product)
  return (
    <Box>
      <Flex justify="space-between" ref={btnref} onClick={onOpen}>
        <Box>{value.title}</Box>
        <Box>
          <ChevronRightIcon />
        </Box>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader> {value.title}</DrawerHeader>
          <Divider/>
          <Box>
           {product?.map(pro=>
            <Box key={pro.ptitle} p='5' cursor='pointer'>
               {pro.ptitle}
            </Box>
              )}
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
