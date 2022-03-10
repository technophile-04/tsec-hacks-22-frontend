import { Container, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
// import heroImage from "../../../public/assets/images/hero.svg";

const Hero = () => {
  return (
      <>
    <Container maxW="container.xl">
        <HStack justifyContent="space-between">
            <Container m="0">
                <VStack alignItems="left">
                    <Text as="h3" fontSize="2xl">Academic Bank of Credits</Text>
                    <Text as="h1" fontSize="4xl" fontWeight="bold">Enabling students mobility</Text>
                    <Text as="h2" fontSize="2xl" fontWeight="bold" style={{marginTop:"-4px",marginBottom:"8px"}}>across Higher Education Institution</Text>
                    <Text fontSize="sm" color="gray.300">Helps in seamless integration of skills and experiences into a Credit Based system</Text>
                </VStack>
            </Container>
            <Container>
                <Image 
                boxSize='2xl'
                maxH="md"
                src="/assets/images/hero.svg"
                alt='Fluffybuns the destroyer'
                mr='12px'/>
            </Container>
        </HStack>
        </Container>
        <Image src="https://www.abc.gov.in/assets/images/hero-bottom.svg" mt="-12"/>
        
        </>
  )
}

export default Hero