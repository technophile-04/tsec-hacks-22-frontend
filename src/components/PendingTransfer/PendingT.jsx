import React from "react";
import NavBar from "../../pages/UserProfile/Navbar/Navbar";
import VerifyList from "./VerifyList";
import "./PendingT.css";
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

function PendingT() {
  const pendingCoursesToBeVerified = [
    {
      name: "Aadil",
      courseName: "Mechanics",
      credits: "4",
      id: "12",
    },
    {
      name: "Ayush",
      courseName: "Chemistry",
      credits: "2",
      id: "12",
    },
    ,
    {
      name: "Shiv",
      courseName: "Physics",
      credits: "3",
      id: "12",
    },
    {
      name: "Jinish",
      courseName: "Drawing",
      credits: "2",
      id: "12",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="course-heading">
        <h3 id="courses-heading">Verify Courses</h3>
      </div>
      <div className="courses-container" style={{ height: "80vh" }}>
        <div className="courses">
          <Grid templateColumns="repeat(4, 1fr)" gap={6} w="full" color="black">
            <GridItem w="100%" h="10">
              <Text textAlign="center" my="2">
                Name
              </Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Text textAlign="center" my="2">
                Credits
              </Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Text textAlign="center" my="2">
                Course Name
              </Text>
            </GridItem>

            <GridItem w="100%" h="10">
              <Text textAlign="center" my="2">
                Verification
              </Text>
            </GridItem>
          </Grid>
          {pendingCoursesToBeVerified.map((course, index) => (
            <Card
              courseName={course.courseName}
              name={course.name}
              credits={course.credits}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
const Card = (props) => {
  let bgColor = "";
  const { isOpen, onOpen, onClose } = useDisclosure();

  props.index % 2 === 0
    ? (bgColor = "rgb(88,170,252,1)")
    : (bgColor = "rgb(88,170,252,0.65)");
  console.log(props.index);

  const handleClick = () => {
    window.location.href = "https://etherscan.io/tx:" + props.course.hash;
  };

  return (
    <>
      <Container minW="full" p="0">
        <Grid
          templateColumns="repeat(4, 1fr)"
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
              {props.credits}
            </Text>
          </GridItem>
          <GridItem w="100%" h="10">
            <Text textAlign="center" my="2">
              {props.courseName}
            </Text>
          </GridItem>

          <GridItem w="100%" h="10">
            <Button onClick={onOpen} ml="82" size="sm" mt="1">
              Verify
            </Button>
          </GridItem>
        </Grid>
      </Container>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Verify </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Verify the course and award credits to the student {props.name}
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

export default PendingT;
