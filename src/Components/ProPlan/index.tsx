 "use client"
 import { Box ,Button,Flex,Icon,Text} from '@chakra-ui/react'
 import { BiSolidCrown } from "react-icons/bi";
import React from 'react'
import { MdCheck } from 'react-icons/md';
import { HiMiniFire } from "react-icons/hi2";

function ProPlan() {
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
    
    <Button lineHeight="13.8px" fontWeight={"700"} fontSize={"12px"} color="white"  bg="#9BBF82" p='10px' ml="202.2px" borderBottomLeftRadius={"5px"} w='110px' h='26px'> <Icon as={HiMiniFire } color="white" w='11.54px' h='15.38px'mr='3'> </Icon>Most Popular</Button>
    
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
    <Text ml="30px" mt='5px'  mb="8px" className='sub-heading3'>$40 billed monthly</Text>
     
    <Box w="313px" h="442px" bg="#F2F2F2"color="#3C3C3C"className='box-text'display={"grid"} p="20px"
    >
     <Text ><Icon as={MdCheck} color='#68A77C' w='9.12px' h='6.56px' mr='2'></Icon>Unlimited Interview Arranging</Text>
           <Text ><Icon as={MdCheck} w='9.12px' h='6.56px' mr='2'color='#68A77C'></Icon>Automated SMS Candidate Functionality</Text>
           <Text ><Icon as={MdCheck} w='9.12px' h='6.56px' mr='2'color='#68A77C'></Icon>Live Stage Tracker </Text>
           <Text ><Icon as={MdCheck} w='9.12px' h='6.56px' mr='2'color='#68A77C'></Icon>Templates</Text>
           <Text ><Icon as={MdCheck} w='9.12px' h='6.56px' mr='2'color='#68A77C'></Icon>Candidate and Client Filters</Text>
           <Text ><Icon as={MdCheck} w='9.12px' h='6.56px' mr='2'color='#68A77C'></Icon>Invite Unlimited Team Members</Text>
           <Text ><Icon as={MdCheck} w='9.12px' h='6.56px' mr='2'color='#68A77C'></Icon>Calendar Group Viewing</Text>
           <Text ><Icon as={MdCheck} w='9.12px' h='6.56px' mr='2'color='#68A77C'></Icon>Integrate with Zoom, Google Meet,Microsoft Teams</Text>
           <Text ><Icon as={MdCheck} w='9.12px' h='6.56px' mr='2'color='#68A77C'></Icon>Outlook and Google Calendar Connectivity</Text>
      
       <Button  className="button2" ml="10px">Get Started</Button>
    </Box>
   </Box>
  )
}

export default ProPlan
