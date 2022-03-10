import {
  Button,
  Grid,
  GridItem,
  Container,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import "./Courses.css";
function Courses() {
  const courses = [
    {
      name: "DSA",
      credits: 3,
      department: "CSE",
      year: 1,
      status: "Completed",
      hash: "123456",
      date: "10/3/2022",
    },
    {
      name: "DBMS",
      credits: 4,
      department: "CSE",
      year: 1,
      status: "-",
      hash: "123456",
      date: "10/3/2022",
    },
  ];

  let content = "";
  if (courses.length === 0) {
    content = (
      <div>
        <img src="/assets/blank_folder.png"></img>
        <p>No credits added yet...</p>
      </div>
    );
  }
  return (
    <div className="courses-container">
      <div className="courses" >
        <Grid templateColumns="repeat(7, 1fr)" gap={6}  w="full" color="black">
          <GridItem w="100%" h="10">
            <Text textAlign="center" my="2">
              {" "}
              Date
            </Text>
          </GridItem>
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
              Department
            </Text>
          </GridItem>
          <GridItem w="100%" h="10">
            <Text textAlign="center" my="2">
              Year
            </Text>
          </GridItem>
          <GridItem w="100%" h="10">
            <Text textAlign="center" my="2">
              Status
            </Text>
          </GridItem>
          <GridItem w="100%" h="10">
            <Text textAlign="center" my="2">
              Hash
            </Text>
          </GridItem>
        </Grid>
        {courses.map((course, index) => (
          <Card course={course} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

const Card = (props) => {
  let bgColor = "";

  props.index % 2 === 0 ? (bgColor = "rgba(88, 170, 252, 1)") : (bgColor = "rgba(88, 170, 252, 0.65)");

  const handleClick = () => {
    window.location.href = "https://etherscan.io/tx:" + props.course.hash;
  };

  return (
    <Container minW="full" p="0">
      <Grid templateColumns="repeat(7, 1fr)" gap={6} bg={bgColor} color="white" fontWeight="bold">
        <GridItem w="100%" h="10">
          <Text textAlign="center" my="2">
            {props.course.date}
          </Text>
        </GridItem>
        <GridItem w="100%" h="10">
          <Text textAlign="center" my="2">
            {props.course.name}
          </Text>
        </GridItem>
        <GridItem w="100%" h="10">
          <Text textAlign="center" my="2">
            {props.course.credits}
          </Text>
        </GridItem>
        <GridItem w="100%" h="10">
          <Text textAlign="center" my="2">
            {props.course.department}
          </Text>
        </GridItem>
        <GridItem w="100%" h="10">
          <Text textAlign="center" my="2">
            {props.course.year}
          </Text>
        </GridItem>
        <GridItem w="100%" h="10">
          <Text textAlign="center" my="2">
            {props.course.status}
          </Text>
        </GridItem>
        <GridItem w="100%" h="10">
          <Button onClick={handleClick} ml="10" size="sm" mt="1">
            View
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Courses;
