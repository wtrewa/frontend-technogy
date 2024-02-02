import { Box, Button, Flex, Heading, Image, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DrawerExample3 from "./DrawerExample copy 3";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Product/productAction";


const Category = [
  {
    title: "Shirt",
    img: "https://slimages.macysassets.com/is/image/MacysInc/C2301935_MENS_RIB_197651_Shirts?$106_lg_desktop$&fmt=png-alpha",
  },
  {
    title: "Jackets",
    img: "https://slimages.macysassets.com/is/image/MacysInc/C2301935_MENS_RIB_197651_Coats__Jackets?$106_lg_desktop$&fmt=png-alpha",
  },
  {
    title: "Shoe",
    img: "https://slimages.macysassets.com/is/image/MacysInc/C2301935_MENS_RIB_197651_Shoes?$106_lg_desktop$&fmt=png-alpha",
  },
  {
    title: "Jeans & Pants",
    img: "https://slimages.macysassets.com/is/image/MacysInc/C2301935_MENS_RIB_197651_Coats__Jackets?$106_lg_desktop$&fmt=png-alpha",
  },
];
const ProductList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnref = useRef();
  
  const dispatch = useDispatch()
  const productData = useSelector(store=>store.productReducer.products)
 console.log(productData)
  useEffect(() => {
    getProduct(dispatch)
  },[])
  return (
    <div>
      <Box>
        <Heading m="5">Shop by Category</Heading>
        <Box maxH="400px" overflowY="auto" m={"4"} mb="7">
          <Flex
            position="relative"
            justify={"space-between"}
            minW="900"
            whiteSpace="nowrap"
            overflowX={{ base: "auto", md: "hidden" }}
            m="auto"
          >
            {Category?.map((value) => (
              <Link >
                <Box
                  borderRadius="4"
                  textAlign="center"
                  border="1px solid black"
                  key={value.title}
                >
                  <Image p="3" src={value.img} />
                  <Text p="3">{value.title}</Text>
                </Box>
              </Link>
            ))}

            {/* Scroll indicator */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              width="100%"
              height="8px"
              bg="black.300"
              borderRadius="4px"
              transformOrigin="left"
              transform="scaleX(0)" // Initial scale to 0, indicating no scroll
              transition="transform 0.3s ease"
              overflow="hidden"
              zIndex="1"
            />
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Box>
            <Button ref={btnref} onClick={onOpen} p='6' color='black' fontWeight='100'm='4' bg='none ' border='1px solid black'>All Filters<DrawerExample3  prop={{onClose ,onOpen,btnref,isOpen}} /> 
            </Button>
                
              <Button ref={btnref} onClick={onOpen} p='6' color='black' fontWeight='100'm='4' bg='none ' border='1px solid black'>Department<DrawerExample3  prop={{onClose ,onOpen,btnref,isOpen}} />
              </Button>

              <Button  ref={btnref} onClick={onOpen} p='6' color='black' fontWeight='100'm='4' bg='none ' border='1px solid black'>Gender<DrawerExample3  prop={{onClose ,onOpen,btnref,isOpen}} /></Button>

              <Button ref={btnref} onClick={onOpen} p='6' color='black' fontWeight='100'm='4' bg='none ' border='1px solid black'>Brand<DrawerExample3  prop={{onClose ,onOpen,btnref,isOpen}} /></Button>
              
              <Button ref={btnref} onClick={onOpen} p='6' color='black' fontWeight='100'm='4' bg='none ' border='1px solid black'>Offer<DrawerExample3  prop={{onClose ,onOpen,btnref,isOpen}} /></Button>
              <Button ref={btnref} onClick={onOpen} p='6' color='black' fontWeight='100'm='4' bg='none ' border='1px solid black'>Discount Range<DrawerExample3  prop={{onClose ,onOpen,btnref,isOpen}} /></Button> 
            </Box>
            <Box>

            </Box>
          </Flex>
        </Box>
        <SimpleGrid columns={[1, 2, 3]} spacing="20" mx="4" my="10">
          {productData?.map((value) => (
            <Link to={`/product/${value.id}`} key={value.id}>
              <Box key={value.title}  boxShadow="base" m="2" p="4" h={{base:'20%',md:"400px"}}>
                <Image h={'250px'}   src={value.thumbnail} m="auto" />
                <Text fontWeight="700">{value.title}</Text>
                <Text>
                  Price:<Text as="mark">{value.price}</Text>
                </Text>
                <Text as="">Rating:{value.rating}</Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default ProductList;
