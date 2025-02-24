"use client"

import { Box ,Button,Flex,Icon,ListIcon,ListItem,Text, UnorderedList} from '@chakra-ui/react'
import React from 'react'
import { MdCheck } from 'react-icons/md'
import { FaDiceD6 } from "react-icons/fa";


function Main() {
  return ( 
   <Box w='313px'
     h='636px'
     bg={"#F8F8F8"}
    borderColor={"#F8F8F8"}
     mt="35px"
     ml='35px'
     borderRadius={'15px'}
     >
    <Icon as={FaDiceD6} w='16.66px' h='18.91px' color='#68A77C' ml='38px' mt='40px'></Icon>
    <Box className='heading' ml='25px' p="10px" >Free Trial
    <Text className='sub-heading' mt="3">Full access to Arrange</Text>
    </Box>
     <Flex  gap='10' ml="30px" mb="15px">
      <span className='span'>$0</span> 
      <Text className='sub-heading2' mt="20px" >
       /14 day free trial</Text>
     </Flex>
    

     <Box w="313px" h="442px" bg="#F2F2F2" color="#3C3C3C"className='box-text'display={"grid"} p="20px" >
     
      <Text ><Icon as={MdCheck} color='#68A77C' w='9.12px' h='6.56px' mr='3'></Icon>Unlimited Interview Arranging</Text>
      <Text ><Icon as={MdCheck} color='#68A77C' w='9.12px' h='6.56px' mr='3'></Icon>Automated SMS Candidate Functionality</Text>
      <Text ><Icon as={MdCheck} color='#68A77C' w='9.12px' h='6.56px' mr='3'></Icon>Live Stage Tracker </Text>
      <Text ><Icon as={MdCheck} color='#68A77C' w='9.12px' h='6.56px' mr='3'></Icon>Templates</Text>
      <Text ><Icon as={MdCheck} color='#68A77C' w='9.12px' h='6.56px' mr='3'></Icon>Candidate and Client Filters</Text>
      <Text ><Icon as={MdCheck} color='#68A77C' w='9.12px' h='6.56px' mr='3'></Icon>Invite Unlimited Team Members</Text>
      <Text ><Icon as={MdCheck} color='#68A77C' w='9.12px' h='6.56px' mr='3'></Icon>Calendar Group Viewing</Text>
      <Text ><Icon as={MdCheck} color='#68A77C' w='9.12px' h='6.56px' mr='3'></Icon>Integrate with Zoom, Google Meet,Microsoft Teams</Text>
      <Text ><Icon as={MdCheck} color='#68A77C' w='9.12px' h='6.56px' mr='3'></Icon>Outlook and Google Calendar Connectivity</Text>
    
       <Button  className="button" ml='10px'>Get Started</Button>
    </Box>
   </Box>
  )
}

export default Main
