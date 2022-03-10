import React from "react";
import NavBar from "../../pages/UserProfile/Navbar/Navbar";
import "./TransferConfirm.css";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  GridItem,
  Container,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
function TransferConfirm() {
  const pendingTranfers = [
    { name: "Aadil", id: "12" },
    { name: "Shiv", id: "112" },
    { name: "Jinish", id: "1122" },
    { name: "Ayush", id: "12" },
  ];
  return (
    <>
      <NavBar />
      <div className="course-heading">
        <h3 id="courses-heading">Transfer List</h3>
      </div>
      <div className="courses-container">
        <div className="courses">
          <Grid templateColumns="repeat(3, 1fr)" gap={6} w="full" color="black">
            <GridItem w="100%" h="10">
              <Text textAlign="center" my="2">
                Name
              </Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Text textAlign="center" my="2">
                Profile
              </Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Text textAlign="center" my="2">
                Selection
              </Text>
            </GridItem>
          </Grid>
          {pendingTranfers.map((course, index) => (
            <Card name={course.name} id={course.id} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
const Card = (props) => {
  let bgColor = "";
  const { isOpen, onOpen, onClose } = useDisclosure();

  props.index % 2 === 0 ? (bgColor = "#67A4FC") : (bgColor = "#AE85F9");
  console.log(props.index);

  const handleClick = () => {
    window.location.href = "https://etherscan.io/tx:" + props.course.hash;
  };

  return (
    <>
      <Container minW="full" p="0">
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          bg={bgColor}
          color="white"
          fontWeight="bold"
        >
          <GridItem w="100%" h="10">
            <Text textAlign="center" my="2">
              {props.name}
            </Text>
          </GridItem>

          <GridItem w="100%" h="10">
            <Text textAlign="center" my="2">
              <Link to={`/user/${props.id}`}>View Profile</Link>
            </Text>
          </GridItem>
          <GridItem w="100%" h="10">
            <Button onClick={onOpen} ml="140">
              Select
            </Button>
          </GridItem>
        </Grid>
      </Container>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Select and enroll {props.name}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button color="black" bgColor="white">
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TransferConfirm;
