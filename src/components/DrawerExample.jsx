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
import React from "react";
import { BiMenu } from "react-icons/bi";
import DrawerExample2 from "./DrawerExample copy";

export const Departments = [

    { title: "Women" , titleProduct:[{ptitle:'Featured For Women'},{ptitle:"Coats & Jackets"},{ptitle:"Bras,Underwear & Lingerie"}] },

    { title: "Men",titleProduct:[{ptitle:'Featured For Women'},{ptitle:"Coats & Jackets"},{ptitle:"Bras,Underwear & Lingerie"}] },

    { title: "Kids & Baby",titleProduct:[{ptitle:'Featured For Women'},{ptitle:"Coats & Jackets"},{ptitle:"Bras,Underwear & Lingerie"}] },

    { title: "Home",titleProduct:[{ptitle:'Featured For Women'},{ptitle:"Coats & Jackets"},{ptitle:"Bras,Underwear & Lingerie"}] },

    { title: "Shoes",titleProduct:[{ptitle:'Featured For Women'},{ptitle:"Coats & Jackets"},{ptitle:"Bras,Underwear & Lingerie"},{ ptitle: "Handbags & Accessories" },] },
    

    { title: "Bad & Bath",titleProduct:[{ptitle:'Featured For Women'},{ptitle:"Coats & Jackets"},{ptitle:"Bras,Underwear & Lingerie"}] },

    { title: "Jewelary",titleProduct:[{ptitle:'Featured For Women'},{ptitle:"Coats & Jackets"},{ptitle:"Bras,Underwear & Lingerie"}] },
  ];

export default function DrawerExample({ btnRef }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

   

  return (
    <Box>
      <Menu>
        <MenuButton
          ref={btnRef}
          onClick={onOpen}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
      </Menu>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Shop By Department</DrawerHeader>
          <Divider/>
          <Box >
            {Departments.map((value) => (
              <DrawerBody key={value.title} cursor='pointer'>
               <DrawerExample2 value={value}/>
              </DrawerBody>
            ))}
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
