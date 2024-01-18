import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Form } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const CheckoutPage = () => {
  return (
    <div>
      <Box w="100%" h="150px">
        <Box w="100%" h="100px" borderBottom="1px solid gray"></Box>
        <Box w="100%" h="50px" borderBottom="1px solid gray">
          <Text lineHeight="50px" textAlign="center" as="p">
            Alert: Orders shipped outside the U.S. are not eligible to earn
            StarReward benefits. Visit a Macy's store instead! Find A Store
          </Text>
        </Box>
        <Box  bg="rgb(241,241,241)" border={"1px solid red"}>
          <Box mx="180px"  border={"2px solid red"}>
            <Flex>
              <Box bg="white" w={"70%"}>
                <Text fontSize="x-large" m="4">
                  Secure Checkout
                </Text>
                <Divider />
                {/* Form for Delivery */}
                <Box h={"100vh"}>
                  <Text fontSize="large" m="4">
                    • Delivery
                  </Text>
                  <Box>
                    <Input placeholder="Email" m="4" p="2" maxW={"95%"} />
                    <Flex>
                      <Input
                        placeholder="First Name"
                        m="4"
                        p="2"
                        maxW={"45%"}
                      />
                      <Input placeholder="Last Name" m="4" p="2" maxW={"45%"} />
                    </Flex>
                    <Box>
                    <Input placeholder="Address" my="4" mx='4' p="2" maxW={"95%"} />
                    </Box>
                    <Flex>
                      <Input
                        placeholder="Address 2 (optinal)"
                        m="4"
                        p="2"
                        maxW={"45%"}
                      />
                      <Input placeholder="Postel Code" m="4" p="2" maxW={"45%"} />
                    </Flex>
                    <Flex>
                      <Input
                        placeholder="City"
                        m="4"
                        p="2"
                        maxW={"45%"}
                      />
                      <Input placeholder="Region" m="4" p="2" maxW={"45%"} />
                    </Flex>
                    <Flex>
                      <Input
                        placeholder="Phone"
                        m="4"
                        p="2"
                        maxW={"45%"}
                      />
                      <Input placeholder="Location" defaultValue={'India'} m="4" p="2" maxW={"45%"} />
                    </Flex>
                  </Box>
                  <Box>
                    <Text m="4" as='b'>Addresses:</Text>
                    <Box m='5'>
                      {/* for importing address from server */}
                      <Text>{"Saurabh Pandey"}</Text>
                      <Text>{"Gulab Nagar Rewa Madhya Pradesh India"}</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box  w='30%'  my='10'>
                <Text m='4' fontSize={'large'}>Your Order</Text>
                <Button m='4'w='90%' bg='black' color='white' border={'1px solid black'}>Place Order</Button>
                <Text >Total:{70404}</Text>
                {/* Product place */}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutPage;
