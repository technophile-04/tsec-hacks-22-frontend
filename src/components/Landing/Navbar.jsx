import React, { useState } from "react";
import {
  Flex,
  Button,
  HStack,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Select,
  Input,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen:isOpenStud, onOpen:onOpenStud, onClose:onCloseStud } = useDisclosure();
  const {isOpen:isOpenUni, onOpen:onOpenUni, onClose:onCloseUni} = useDisclosure();

  const [email, setEmail] = useState("");
  const [selectUni, setSelectUni] = useState();
  const [selectDept, setSelectDept] = useState();
  const [uniName,setUniName] = useState();

  const handleSubmitStudent = (event) => {
    event.preventDefault();
    alert(`Name: ${email} & Selected University: ${selectUni} & Selected Department: ${selectDept}`);
  };

  const handleSubmitUni = (event) => {
    event.preventDefault();
    alert(` Selected University: ${uniName}`);
  };

  


  return (
    <Container maxW="container.xl" p="0">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Text as="h1" fontSize="3xl" fontStyle="" fontWeight="bold">DeBAC</Text>
        <HStack>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Register
            </MenuButton>
            <MenuList>
              <MenuItem minH="48px" onClick={onOpenStud}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://library.kissclipart.com/20180926/pe/kissclipart-student-clipart-utrecht-university-student-vu-univ-01ccd8efac8776f3.jpg"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>Student</span>
              </MenuItem>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpenStud}
                onClose={onCloseStud}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <form onSubmit={handleSubmitStudent} id="studentR">
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="name"
                          placeholder="test shah"
                          size="lg"
                          onChange={(event) =>
                            setEmail(event.currentTarget.value)
                          }
                          value={email}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>University</FormLabel>
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
                      <FormControl isRequired>
                        <FormLabel>Department</FormLabel>
                        <Select
                          placeholder="Select option"
                          value={selectDept}
                          onChange={(e) => setSelectDept(e.target.value)}
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
                        Sign In
                      </Button>
                    </form>
                  </ModalBody>
                </ModalContent>
              </Modal>

              <MenuItem minH="40px" onClick={onOpenUni}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?size=626&ext=jpg"
                  alt="Simon the pensive"
                  mr="12px"
                />
                <span>University</span>
              </MenuItem>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpenUni}
                onClose={onCloseUni}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <form onSubmit={handleSubmitUni} id="uniR">
                      <FormControl isRequired>
                        <FormLabel>Name of the University</FormLabel>
                        <Input
                          type="text"
                          placeholder="Dwarkadas Jivanlal Sanghvi"
                          size="lg"
                          onChange={(event) =>
                            setUniName(event.currentTarget.value)
                          }
                          value={uniName}
                        />
                      </FormControl>
                      <Button
                        variantColor="teal"
                        variant="outline"
                        type="submit"
                        width="full"
                        mt={4}
                      >
                        Register your University
                      </Button>
                    </form>
                  </ModalBody>
                </ModalContent>
              </Modal>


            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              My Account
            </MenuButton>
            <MenuList>
              <MenuItem minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://library.kissclipart.com/20180926/pe/kissclipart-student-clipart-utrecht-university-student-vu-univ-01ccd8efac8776f3.jpg"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>Student</span>
              </MenuItem>
              <MenuItem minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?size=626&ext=jpg"
                  alt="Simon the pensive"
                  mr="12px"
                />
                <span>University</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
