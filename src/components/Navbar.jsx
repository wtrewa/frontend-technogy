import {
  Badge,
  Box,
  Divider,
  Flex,
  HStack,
  Input,
  Spacer,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FaCartArrowDown } from "react-icons/fa";
import { Departments } from "./DrawerExample";
import { BiMenu } from "react-icons/bi";
import React, { useRef } from "react";
import DrawerExample from "./DrawerExample";

import Menucompo from "./Menucompo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector(store=>store.authReducer.User ||0)

  console.log(user.cartProduct?.length)
  const btnRef = useRef();
  return (
    <div>
      <Box w={"100%"}>
        <Box h={"25%"}>
          <Flex h={"100%"}>
            <Box
              lineHeight="10"
              h={"100%"}
              ml="5"
              textAlign={{ base: "center", lg: "left" }}
            >
              <Box fontSize={{ base: "small" }} fontFamily="rootfonts">
                We now ship to 200 locations worldwide Details
              </Box>
            </Box>
            <Spacer />
            <Box
              h={"100%"}
              mr="5"
              display={{ base: "none", lg: "block" }}
              lineHeight="10"
            >
              <HStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
              >
                <Box h="40px">Order Tracking</Box>
                <Box h="40px">Stores</Box>
                <Box h="40px">Gift Registry</Box>
                <Box h="40px">Shiping To Ind</Box>
              </HStack>
            </Box>
          </Flex>
        </Box>
        <Divider bgColor="gray" />
        <Box mt="4">
          <Flex justify="space-between">
            <Box ml="4">
              <Flex justify="space-between">
                <Box pr="2" display={{ base: "flex", lg: "none" }}>
                  <DrawerExample btnRef={btnRef} />
                </Box>
                <Box p="1">
                  <Link to={"/"}>
                    {" "}
                    <Text>logo</Text>
                  </Link>
                </Box>
              </Flex>
            </Box>
            <Box display={{ base: "none", lg: "block" }}>
              <Input placeholder="Search" />
            </Box>
            <Link to={"/cartpage"}>
              <Box mr="10" w="4" h="4">
                <FaCartArrowDown size="200%" />
                <Badge variant="solid" borderRadius='50%' p='1' pos='relative' bottom='47px' right='-5' colorScheme="yellow">
                  {user.cartProduct?.length||0}
                </Badge>
              </Box>
            </Link>
          </Flex>
          <Box m="4" display={{ base: "block", lg: "none" }}>
            <Input placeholder="Search" />
          </Box>
        </Box>
        <Box display={{ base: "none", lg: "block" }}>
          <Flex justify="space-evenly" mt="5">
            {Departments.map((value) => (
              <Box key={value.title}>
                <Menucompo value={value} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Navbar;
