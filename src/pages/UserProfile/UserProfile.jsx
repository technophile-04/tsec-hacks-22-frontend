import Navbar from "./Navbar/Navbar";
import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail/UserDetail";
import Courses from "./UserDetail/Courses/Courses.js";
import { Button, FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function UserProfile() {

  let navigate = useNavigate();

  const { isOpen:isOpenAdd, onOpen:onOpenAdd, onClose:onCloseAdd } = useDisclosure();
  const {isOpen:isOpenTrans, onOpen:onOpenTrans, onClose:onCloseTrans} = useDisclosure();

  const [selectCourse, setSelectCourse] = useState();
  const [selectUni, setSelectUni] = useState();

  const [courses, setCourses] = useState([]);
  const [user,setUser] = useState();

  useEffect(() => {
  }, [courses]);

  const handleSubmitCourse = (event) => {
    event.preventDefault();
    alert(` Selected Course: ${selectCourse}`);
  };

  const handleSubmitUni = (event) => {
    event.preventDefault();
    alert(` Selected University: ${selectUni}`);
  };

  return (
    <>
      <Navbar />
      <UserDetail user={user}/>
      <Courses courses={courses}/>
      <HStack bg="white" justifyContent="space-evenly" px="15%" py="5%">
      <Button colorScheme="red" onClick={onOpenAdd}>
        Add New Courses
      </Button>
      <Modal
                blockScrollOnMount={false}
                isOpen={isOpenAdd}
                onClose={onCloseAdd} 
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add New Courses</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <form onSubmit={handleSubmitCourse} id="uniR">
                    <FormControl isRequired>
                        <FormLabel>New Courses</FormLabel>
                        <Select
                          placeholder="Select option"
                          value={selectCourse}
                          onChange={(e) => setSelectCourse(e.target.value)}
                        >
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </FormControl>
                      <Button
                        variantColor="teal"
                        variant="outline"
                        type="submit"
                        width="full"
                        mt={4}
                      >
                        Add Courses
                      </Button>
                    </form>
                  </ModalBody>
                </ModalContent>
              </Modal>




      <Button colorScheme="red" onClick={onOpenTrans}>
        Apply for transfer
      </Button>
      <Modal
                blockScrollOnMount={false}
                isOpen={isOpenTrans}
                onClose={onCloseTrans}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Apply for tranfer</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <form onSubmit={handleSubmitCourse} id="uniR">
                    <FormControl isRequired>
                        <FormLabel>Explore Universities</FormLabel>
                        <Select
                          placeholder="Select option"
                          value={selectUni}
                          onChange={(e) => setSelectUni(e.target.value)}
                        >
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </FormControl>
                      <Button
                        variantColor="teal"
                        variant="outline"
                        type="submit"
                        width="full"
                        mt={4}
                      >
                        Confirm your transfer
                      </Button>
                    </form>
                  </ModalBody>
                </ModalContent>
              </Modal>
      </HStack>
    </>
  );
}

export default UserProfile;
