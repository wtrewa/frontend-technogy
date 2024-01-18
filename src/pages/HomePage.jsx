import React from "react";
import Navbar from "../components/Navbar";
import DrawerExample from "../components/DrawerExample";
import Footer from "../components/Footer";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box>
      <Box
        cursor="pointer"
        mx="4"
        mb="20"
        h={{base:'60px',lg:'88px'}}
        border="1px solid gray"
        bgColor="rgb(207,231,248)"
        textAlign="center"
      >
        <Text
          mt="5"
          fontSize={{ base: "small", md: "large", lg: "x-large" }}
          fontWeight="800"
        >
          Extra 20% select sale & clearance and item
        </Text>
        <Text fontSize={{ base: "xx-small", md: "small", lg: "medium" }}>
          Etra 15% off select items. Excludes specials. Code:
          <Text
            fontSize={{ base: "xx-small", md: "small", lg: "medium" }}
            as="b"
          >
            CLEAR
          </Text>
        </Text>
      </Box>
      <Box boxSizing="border-box" mx="4" my='15' border='1px solid gray'>
        <Image
          objectFit="cover"
          src="https://slimages.macysassets.com/is/image/MacysInc/C2301736-101-DT?fmt=webp&wid=1440"
          alt="Dan Abramov"
        />
      </Box>
      <Box  boxSizing="border-box"  my='15' mx="4" >
      <Link to={'/product'}>
      <Image
          objectFit="cover"
          cursor='pointer'
          src="https://slimages.macysassets.com/is/image/MacysInc/C2301736_HP_group?fmt=webp&wid=1440"
          alt="Dan Abramov"
        />
        </Link> 
      </Box>
      <Box 
        
        mx="4"
        my="10">
         
        <Image
          objectFit="cover"
          src="https://slimages.macysassets.com/is/image/MacysInc/C9060385_102_1368157-1?fmt=webp&wid=1600"
          alt="Dan Abramov"
        />
        
      </Box>
      <Box 
         boxSizing="border-box" my='10' mx="4">
          
        <Image
          objectFit="cover"
          cursor='pointer'
          src="https://slimages.macysassets.com/is/image/MacysInc/061021INTLHOMEPAGETEAMPLATEBANNER10301_1433052-1?fmt=webp&wid=1600"
          alt="Dan Abramov"
        />
        
      </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
