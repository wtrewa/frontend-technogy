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
import React, { useState } from "react";
import TransitionExample from "./TransitonCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";



const Cart = () => {
  const [total,setTotal] = useState(0)
  
  
  
  const user = useSelector((store) => store.authReducer.User );
  console.log(user);
  const {cartProduct} = user;
  let to = 0
   cartProduct.forEach(e => { 
     to+=e.price

   });

   useEffect(()=>{
    setTotal(to)
   },[])
   console.log(total)
  return (
    // main box
    <Box w="100%" mx="4" m="auto">
      <Flex gap="20">
        {
          <Box w="70%">
            <Heading p="4">Your Bag</Heading>
            <Divider />
            {
              cartProduct?.map(el=>
                <Box key={el.id} m="auto">
              <Flex justify="space-between" m="4">
                <Box w="15%">
                  <Image
                    w="90%"
                    src={el.thumbnail}
                  />
                </Box>
                { 
                  <Box w="35%">
                    <Text as="b">{el.brand}</Text>
                    <Text as="p" textDecorationLine={"underline"}>
                      {el.title}
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
                }
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
                  <Text fontWeight={600} pl="10">
                    INR {el.price}
                  </Text>
                  <Text fontWeight={600}>Total{" INR 11,126.00"}</Text>
                </Box>
              </Flex>
            </Box>)
            }
            <Divider />
          </Box>
        }  
        {/* checkout page link  */}
        <Box  >
          <Box pos='sticky' top='75px' m="10">
            <Box m="4">
              <Text fontSize="large" as="b">
                Enter Promo Code:
              </Text>
              <Flex borderRadius={"10px"} bg="black">
                {" "}
                <Input bg="white" /> <Button>Apply</Button>
              </Flex>
            </Box>
            <Divider colorScheme="blackAlpha" />
            <Box my="4">
              <Text py="6" fontSize="x-small">
                Shipping, duties and taxes will be calculated at checkout, where
                applicable.
              </Text>
            </Box>
            <Divider colorScheme="blackAlpha" />
            <Box>
              <Flex m="4" justify={"space-between"}>
                <Text>Subtotal</Text>
                <Text>INR{' '}{total}</Text>
              </Flex>
              <Box>
                <Link to={"/checkout"}>
                <Button py="6" bg="black" color={"white"} w="100%">
                  Proceed To Checkout{" "}
                </Button>
                </Link>
              </Box>
              <Box m="4">
                <Link to="/product">
                  <Text as="u">Continue Shopping</Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
