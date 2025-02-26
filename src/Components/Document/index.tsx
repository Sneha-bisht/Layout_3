"use client"

import { Box,Text,Icon, Flex } from '@chakra-ui/react'
import React from 'react'
import { CiCircleAlert } from "react-icons/ci";
import Card from '../Card';


function Document() {
  return (
   <Box>
 <Box w='403px' h='59px' ml='20px' mt='10px'>
    <Text fontFamily={'outfit'} fontSize={'36px'} lineHeight='59px' fontWeight={500} color='#00000'>Confidential Documents</Text>
 </Box>
<Box w='537px' h='36px' mt='10px' ml='40px'>
<Text fontFamily={'Poppins'} fontSize={'24px'} lineHeight={'36px'} fontWeight={400} color="#171A1F">Request Permission to view confidential data <Icon as={CiCircleAlert} w='20px' h='20px'></Icon></Text></Box>

    <Flex justifyContent="space-between" mt="30px" mr='10px'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </Flex>

   </Box>

  )
}

export default Document
