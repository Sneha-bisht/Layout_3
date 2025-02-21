 "use client"
 import { Box ,Button,Flex,Icon,Text} from '@chakra-ui/react'
 import { BiSolidCrown } from "react-icons/bi";
import React from 'react'

function Proplan() {
  return (
   <Box w='313px'
     h='636px'
     bg={"#F8F8F8"}
     border="1px solid #F8F8F8 "
    borderColor={"#F8F8F8"}
     mt="35px"
     ml="35px"
     borderRadius={"15px"}
     >
    
    <Button lineHeight="13.8px" fontWeight={"700"} fontSize={"12px"} color="white"  bg="#9BBF82" p='10px' ml="217px" borderRadius={'10px'}>Most Popular</Button>
    
    <Box className='heading' ml='25px' p="10px" >
      
    <Icon as={BiSolidCrown} h='16px' w="20px" color="#68A77C"  ml='5px'></Icon>
     <Text> Pro Plan</Text>
    <Text className='sub-heading' mt="3">Experience Arrange like never before</Text>
    </Box>
    <Text display={"Flex"} gap="19" ml="30px" className='span'><span>$30</span>
    <Text className='sub-heading2'  mt="15px"> per user/month
    <Text className='sub-heading3'  mt="2px"> billed annually</Text>
    </Text>
    </Text>
    <Text ml="30px" mt='5px'  mb="10px" className='sub-heading3'>$40 billed monthly</Text>
     
    <Box w="313px" h="442px" bg="#F2F2F2"color="#3C3C3C"className='box-text'display={"grid"} p="30px" borderBottomRadius={"10px"}
    >
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
       <Button  className="button2">Get Started</Button>
    </Box>
   </Box>
  )
}

export default Proplan
