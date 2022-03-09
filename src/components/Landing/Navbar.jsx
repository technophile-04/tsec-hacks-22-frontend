import React from 'react'
import {   Flex, Button, Container , Menu , MenuButton, MenuList,MenuItem,Image, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return (
        <Container maxW="container.xl" p="0">
          <Flex
            w="100%"
            px="6"
            py="5"
            align="center"
            justify="space-between"
          >
              <Text>ACADEMIC BANK OF CREDIT</Text>
              <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    My Account
  </MenuButton>
  <MenuList>
    <MenuItem minH='48px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://library.kissclipart.com/20180926/pe/kissclipart-student-clipart-utrecht-university-student-vu-univ-01ccd8efac8776f3.jpg'
        alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Student</span>
    </MenuItem>
    <MenuItem minH='40px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?size=626&ext=jpg'
        alt='Simon the pensive'
        mr='12px'
      />
      <span>University</span>
    </MenuItem>
  </MenuList>
</Menu>
          </Flex>
        </Container>
      );
}

export default Navbar