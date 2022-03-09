import { Container, Image, Text } from "@chakra-ui/react";
import React from "react";

const Section1 = () => {
  return (
    <Container maxW="container.xl" py="20" textAlign="center">
      <Image src="/assets/images/3part.png" mx="auto"  mb="5" />
      <Text color="gray.500">“Credits awarded to a student for one program from an institution may be transferred / redeemed by another institution upon students consent”</Text>
      <Text color="gray.500">Credit transfer is the key to successful study mobility</Text>
    </Container>
  );
};

export default Section1;
