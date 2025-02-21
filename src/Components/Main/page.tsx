"use client"

import { Box ,Button,Flex,Text} from '@chakra-ui/react'
import React from 'react'

function Main() {
  return (
   <Box w='313px'
     h='636px'
     bg={"#F8F8F8"}
     borderRadius={"15px"}
    borderColor={"#F8F8F8"}
     mt="35px"
     ml='35px'
     >
    
    <Box className='heading' ml='25px' p="15px"  mt='20px'>Free Trial
    <Text className='sub-heading' mt="3">Full access to Arrange</Text>
    </Box>
     <Flex gap="19" ml="40px" mb="20px">
      <span className='span'>$0</span> 
      <Text className='sub-heading2' mt="20px" >
       /14 day free trial</Text>
     </Flex>
    

     <Box w="313px" h="442px" bg="#F2F2F2" color="#3C3C3C"className='box-text'display={"grid"} p="20px" >
      <Text  align={"center"}>Unlimited Interview Arranging</Text>
      <Text  align={"center"}>Automated SMS Candidate Functionality</Text>
      <Text  align={"center"}>Live Stage Tracker </Text>
      <Text  align={"center"}>Templates</Text>
      <Text  align={"center"}>Candidate and Client Filters</Text>
      <Text  align={"center"}>Invite Unlimited Team Members</Text>
      <Text  align={"center"}>Calendar Group Viewing</Text>
      <Text  align={"center"}>Integrate with Zoom, Google Meet, 
      Microsoft Teams</Text>
      <Text align={"center"}>Outlook and Google Calendar Connectivity</Text>
       <Button  className="button">Get Started</Button>
    </Box>


   </Box>
  )
}

export default Main
