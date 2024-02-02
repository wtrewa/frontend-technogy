import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiZoomIn } from "react-icons/bi";
import ZoomableImage from "./ZoomAble";
import TransitionExample from "./TransitonCart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const product = useSelector((store) => store.productReducer.products);


  const clickHandler = ()=>{
    onOpen();
    
  }
  let { id } = useParams();
  const singlePro = product?.filter((el) => el.id == id);
  let imageGallary = singlePro[0].images;
  console.log(singlePro, imageGallary);
  return (
    <div>
      <Box mx="4" my="10">
        <Flex>
          <Box>
            {imageGallary?.map((value) => (
              <Box p="5" key={value}>
                <ZoomableImage src={value} alt={"image"} />
              </Box>
            ))}
          </Box>
          <Box mr="20" pr="20" pos="sticky" top="0" h="fit-content">
            <Text as="p">{singlePro[0].brand}</Text>
            <Heading>
            {singlePro[0].title}
            </Heading>
            <Text as="p">
              <StarIcon /> {singlePro[0].rating} (5)
            </Text>
            <Text as="p" pt="2" fontWeight="600">
              LIMITED-TIME SPECIAL
            </Text>
            <Text>
              <Text color="orange">
                INR
                {singlePro[0].price -
                  Math.floor(
                    (singlePro[0].price * singlePro[0].discountPercentage) / 100
                  )}
              </Text>
              <Text as="s">INR{singlePro[0].price}</Text>
              <Text as="u" p="2">
                Details
              </Text>
            </Text>
            <Text mt="5">
              <Text as="b" mr="2">
                SIZE:
              </Text>
              please select
            </Text>
            <Box>
              <Button
                p="6"
                color="black"
                fontWeight="100"
                m="4"
                bg="none "
                border="1px solid black"
              >
                M
              </Button>
              <Button
                p="6"
                color="black"
                fontWeight="100"
                m="4"
                bg="none "
                border="1px solid black"
              >
                L
              </Button>
              <Button
                p="6"
                color="black"
                fontWeight="100"
                m="4"
                bg="none "
                border="1px solid black"
              >
                XL
              </Button>
              <Button
                p="6"
                color="black"
                fontWeight="100"
                m="4"
                bg="none "
                border="1px solid black"
              >
                2XL
              </Button>
            </Box>
            <Box>
              <Button
                onClick={clickHandler,onOpen}
                
                p="6"
                color="white"
                bg="black"
                w="80%"
                fontWeight="600"
                m="4"
                border="1px solid black"
              >
                Add To Bag{" "}
                <TransitionExample prop={{ isOpen, onClose, onOpen }} />
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default SingleProduct;
