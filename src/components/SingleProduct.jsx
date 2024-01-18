
import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Highlight, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BiZoomIn } from 'react-icons/bi'
import ZoomableImage from './ZoomAble'
import TransitionExample from './TransitonCart'
 const ProductImage = [{image:"https://slimages.macysassets.com/is/image/MCY/products/8/optimized/25674048_fpx.tif?op_sharpen=1&wid=500&hei=611&fit=fit,1&fmt=webp"},{image:"https://slimages.macysassets.com/is/image/MCY/products/3/optimized/25674053_fpx.tif?op_sharpen=1&wid=500&hei=611&fit=fit,1&fmt=webp"},{image:"https://slimages.macysassets.com/is/image/MCY/products/2/optimized/25674052_fpx.tif?op_sharpen=1&wid=500&hei=611&fit=fit,1&fmt=webp"},{image:"https://slimages.macysassets.com/is/image/MCY/products/0/optimized/25674050_fpx.tif?op_sharpen=1&wid=500&hei=611&fit=fit,1&fmt=webp"},{image:'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/25674051_fpx.tif?op_sharpen=1&wid=500&hei=611&fit=fit,1&fmt=webp'}]
const SingleProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Box mx='4' my='10'>
        <Flex>
        <Box>
            {ProductImage?.map(value=><Box p='5' key={value.image}><ZoomableImage src={value.image} alt={'image'}/></Box>)}
        </Box>
         <Box mr='20' pr='20' pos='sticky' top='0' h='fit-content'>
          <Text as='p'>Adidas</Text>
          <Heading>Men's Game & Go Camo Big Logo Training Fleece Hoodie</Heading>
          <Text as='p'><StarIcon/> 4.7 (5)</Text>
          <Text as='p' pt='2' fontWeight='600'>LIMITED-TIME SPECIAL</Text>
          <Text><Text as='b' color='orange'>INR 2,567.00</Text>
          <Text as='s'>INR 5,563.00</Text><Text as='u' p='2'>Details</Text></Text>
          <Text mt='5'><Text as='b' mr='2' >SIZE:</Text>please select</Text>
          <Box>
            <Button p='6' color='black' fontWeight='100'm='4' bg='none ' border='1px solid black'>M</Button>
            <Button p='6' color='black' fontWeight='100'm='4' bg='none ' border='1px solid black'>L</Button>
            <Button p='6' color='black' fontWeight='100'm='4' bg='none ' border='1px solid black'>XL</Button>
            <Button p='6' color='black' fontWeight='100'm='4' bg='none ' border='1px solid black'>2XL</Button>
          </Box>
          <Box><Button onClick={onOpen} p='6'color='white' bg='black' w='80%' fontWeight='600'm='4' border='1px solid black'>Add To Bag <TransitionExample prop= { {isOpen,onClose,onOpen}}/></Button></Box>
         </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default SingleProduct
