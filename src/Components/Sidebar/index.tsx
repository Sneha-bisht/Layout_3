"use client"
import { Box, VStack,Text, HStack, Icon, Spacer } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { MdForwardToInbox } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";


function Sidebar() {
  return (
    <Box w="220px" h="232px" mt="174px" ml="24px"  color="#ffffff">
        <Box display='grid' color='white' textAlign={"center"} alignItems={"center"} >
        <VStack spacing={10} align="center">
       <Box w='268px' h='50px'  bg='#ffffff'   borderBottomRadius={"20px"}  borderTopRadius={"20px"}>
        <Box w='220px' h='40px' ml='20px' mt='4px' p='10px'  >

        <HStack spacing={10} >
       <Icon as={MdOutlineDashboard} color="#000000" w='24px' h='24px' />
        <Text  alignContent='center' color='#000000'>Dashboard</Text>
        </HStack>
      </Box>
      </Box>
    <Spacer/>
    <Box w='220px' h='40px' alignContent='center' ml='25px'>
        <HStack spacing={10}>
       <Icon as={CiBoxList} color="#ffffff" w='24px' h='24px' />
        <Text className='pointer'>Listings</Text>
        </HStack>
      </Box>
      <Spacer/>
      <Box w='220px' h='40px' alignContent='center' ml='25px'>
        <HStack spacing={10}>
       <Icon as={MdForwardToInbox} color="#ffffff"  w='24px' h='24px'/>
        <Text className='pointer'>Inbox</Text>
        </HStack>
      </Box>
      <Spacer/>
      <Box w='220px' h='40px' alignContent='center' ml='25px'>
        <HStack spacing={10}>
       <Icon as={FaCartArrowDown} color="#ffffff" w='24px' h='24px' />
        <Text className='pointer'>Profile</Text>
        </HStack>
      </Box>
   
 </VStack>
     </Box>
     </Box>
  )
}

export default Sidebar
