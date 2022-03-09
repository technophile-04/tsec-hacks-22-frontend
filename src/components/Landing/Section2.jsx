import { Container, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineFileText,AiOutlineBulb,AiOutlineUnorderedList} from 'react-icons/ai'

const Section2 = () => {
  return (
    <Container maxW="container.xl" textAlign="center">
        <HStack justifyContent="space-between" pb="20">
            <VStack>
                <AiOutlineFileText size="3rem" color="gray.500" />
                <Container boxSize="16" bg="orange" rounded="full" style={{marginTop:"-55px"}} zIndex="-1">
                  </Container>
                <Text fontSize="2xl" fontWeight="bold">
                    Brief
                </Text>
                <Text>
                Online centralized system
                </Text>
                <Text>
                Credit accumulation and redemption
                </Text>
                <Text>
                Credit audit trail management
                </Text>
                <Text>
                Credit accounting
                </Text>
            </VStack>
            <VStack>
              <AiOutlineBulb size="3rem" color="gray.500" />
              <Container boxSize="16" bg="orange" rounded="full" style={{marginTop:"-55px"}} zIndex="-1">
                  </Container>
              <Text fontSize="2xl" fontWeight="bold">
                    Benefits
                </Text>
                <Text>
                Enable student mobility
                </Text>
                <Text>
                Academic flexibility
                </Text>
                <Text>
                Allows student to choose own learning path
                </Text>
                <Text>
                Recognized learning achievements
                </Text>
            </VStack>
            <VStack>
              <AiOutlineUnorderedList size="3rem" color="gray.500" />
              <Container boxSize="16" bg="orange" rounded="full" style={{marginTop:"-55px"}} zIndex="-1">
                  </Container>
              <Text fontSize="2xl" fontWeight="bold">
              Key feature
                </Text>
                <Text>
                Multiple entry multiple exit
                </Text>
                <Text>
                Anytime anywhere learning
                </Text>
                <Text>
                Allows student to study at their own pace
                </Text>
                <Text>
                transparency
                </Text>
            </VStack>
        </HStack>
        </Container>
  )
}

export default Section2