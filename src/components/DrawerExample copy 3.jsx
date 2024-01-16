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


export default function DrawerExample3({prop}) {
  
   

  return (
    <Box>
      <Drawer isOpen={prop.isOpen} placement="right" onClose={prop.onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Filter</DrawerHeader>
          <Divider/>
          <Box>
            Example
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
