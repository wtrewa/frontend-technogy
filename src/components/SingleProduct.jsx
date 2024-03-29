// import 
import React, { memo, useEffect, useMemo, useState } from "react";
import { BiZoomIn } from "react-icons/bi";
import ZoomableImage from "./ZoomAble";
import TransitionExample from "./TransitonCart";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSingup, cartUpdate } from "../Redux/Auth/authAction";
import { getProductSingle } from "../Redux/Product/productAction";
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


// import end

// single component start ------>
const SingleProduct = memo(() => {
  let imageGallary;
  const [User, setUser] = useState({});
  let { id } = useParams();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const product = useSelector((store) => store.productReducer.product);
  const UserSelection = useSelector((store) => store.authReducer.User);

  // use effect 

  useEffect(() => {
    dispatch(getProductSingle(id));
    UserSelection && setUser(UserSelection);
  }, []);

  imageGallary = product.images;

  // cart product adding process

  const clickHandler = (e, product, User) => {
    e.stopPropagation();
    let flag = true;
    console.log(product, User);
    const { cartProducts } = User;
    let index = cartProducts.findIndex((el) => el.id === product.id);
    if (index !== -1) {
      alert("this product has already added");
      flag = false;
      onOpen()
    }
    if(flag){
      dispatch(cartUpdate(User._id,product)).then((res)=>{
        console.log(res);
        if(res.status===200){
          onOpen();
        }
      })
  };

  }

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
            <Text as="p">{product.brand}</Text>
            <Heading>{product.title}</Heading>
            <Text as="p">
              <StarIcon /> {product.rating} (5)
            </Text>
            <Text as="p" pt="2" fontWeight="600">
              LIMITED-TIME SPECIAL
            </Text>
            <Text>
              <Text color="orange">
                INR
                {product.price -
                  Math.floor(
                    (product.price * product.discountPercentage) / 100
                  )}
              </Text>
              <Text as="s">INR{product.price}</Text>
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
                onClick={(e) => {
                  clickHandler(e, product, User);
                }}
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

})

export default SingleProduct



