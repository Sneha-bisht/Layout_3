"use client"

import { Box ,Button,Flex,Icon,ListIcon,ListItem,Text, UnorderedList} from '@chakra-ui/react'
import React from 'react'
import { MdCheck } from 'react-icons/md'

function Main() {
  return (
   <Box w='313px'
     h='636px'
     bg={"#F8F8F8"}
     borderRadius={"15px"}
    borderColor={"#F8F8F8"}
     mt="30px"
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
     
      <Text ><Icon as={MdCheck} color='#68A77C'></Icon>Unlimited Interview Arranging</Text>
      <Text ><Icon as={MdCheck} color='#68A77C'></Icon>Automated SMS Candidate Functionality</Text>
      <Text ><Icon as={MdCheck} color='#68A77C'></Icon>Live Stage Tracker </Text>
      <Text ><Icon as={MdCheck} color='#68A77C'></Icon>Templates</Text>
      <Text ><Icon as={MdCheck} color='#68A77C'></Icon>Candidate and Client Filters</Text>
      <Text ><Icon as={MdCheck} color='#68A77C'></Icon>Invite Unlimited Team Members</Text>
      <Text ><Icon as={MdCheck} color='#68A77C'></Icon>Calendar Group Viewing</Text>
      <Text ><Icon as={MdCheck} color='#68A77C'></Icon>Integrate with Zoom, Google Meet,Microsoft Teams</Text>
      <Text ><Icon as={MdCheck} color='#68A77C'></Icon>Outlook and Google Calendar Connectivity</Text>
    
       <Button  className="button" ml='15px'>Get Started</Button>
    </Box>


   </Box>
  )
}

export default Main
