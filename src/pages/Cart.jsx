import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Radio,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import TransitionExample from "../components/TransitonCart";
import { Link } from "react-router-dom";

const Cart = () => {
 

  return (
    <Box w="100%" mx="4"  m="auto">
      <Flex gap='20'>
        <Box  w='70%'>
          <Heading p="4">Your Bag</Heading>
          <Divider />
          <Box m="auto">
            <Flex justify="space-between" m='4'>
              <Box w='15%'>
                <Image
                  w="90%"
                  src="https://slimages.macysassets.com/is/image/MCY/products/8/optimized/25674048_fpx.tif?bgc=255,255,255&wid=400&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                />
              </Box>
              <Box w='35%' >
                <Text as="b">Adidas</Text>
                <Text as="p" textDecorationLine={'underline'}>
                  ADIDAS adidas Men's Game & Go Camo Big Logo Training Fleece
                  Hoodie
                </Text>
                <Text>Size:L</Text>
                <Box>
                  <Radio
                    Bgcolor="black"
                    size="lg"
                    border="1px solid black"
                    defaultChecked
                    pr="2"
                  />
                  Ship{" "}
                  <Text as="p">
                    In Stock: Usually ships within 2 business days.
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box borderRadius="10px" border={"2px solid black"}>
                  <Button borderRight={"1px solid black"} bg="white">
                    {"-"}
                  </Button>
                  <Button borderRight={"1px solid black"} bg="white">
                    {"2"}
                  </Button>
                  <Button bg="white">{"+"}</Button>
                </Box>
              </Box>
              <Box>
                <Text fontWeight={600} pl='10'>INR 5,563.00</Text>
                <Text fontWeight={600}>Total{' INR 11,126.00'}</Text>
              </Box>
            </Flex>
          </Box>
          <Divider />
        </Box>
        <Box>
        <Box m='10' >
                <Box m='4'>
                  <Text fontSize="large" as="b">
                    Enter Promo Code:
                  </Text>
                  <Flex borderRadius={"10px"} bg="black">
                    {" "}
                    <Input bg="white" /> <Button>Apply</Button>
                  </Flex>
                </Box>
                <Divider colorScheme="blackAlpha" />
                <Box my='4'>
                  <Text py="6" fontSize="x-small">
                    Shipping, duties and taxes will be calculated at checkout,
                    where applicable.
                  </Text>
                </Box>
                <Divider colorScheme="blackAlpha" />
                <Box>
                  <Flex m='4' justify={'space-between'}>
                    <Text>Subtotal</Text>
                    <Text>{"INR 15,363.00"}</Text>
                  </Flex>
                  <Box>
                    <Button py='6' bg='black'color={'white'} w="100%">Proceed To Checkout </Button>
                  </Box>
                  <Box m='4'>
                  <Link  to='/product'><Text as='u'>Continue Shopping</Text></Link>
                  </Box>
                  
                </Box>
                
              </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
