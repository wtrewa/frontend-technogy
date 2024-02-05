import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import Lorem from "./Lorem";
import { Link } from "react-router-dom";

export default function TransitionExample({ prop }) {
  let { isOpen, onClose, onOpen } = prop;
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Added to your bags</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box bg="black" border="2px solid black" m="2" p="2">
              <Button
                w="100%"
                bg="black"
                color="white"
                _hover={{bgColor:'black'}}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Link to={"/checkout"}>Checkout</Link>
              </Button>
            </Box>
            <Box border="2px solid black" m="2" p="2" bg="black">
              <Button
                bg="black"
                w="100%"
                color="white"
                _hover={{bgColor:'black'}}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Link to={"/cartpage"}>Go To Bag</Link>
              </Button>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
