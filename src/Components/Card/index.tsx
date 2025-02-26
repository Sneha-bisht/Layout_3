import { Box,Flex,Icon ,Text } from '@chakra-ui/react'
import { Outfit } from 'next/font/google';
import React from 'react'
import { BiSolidFolder } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";


function Card() {
  return (
    <Box w='228px' h='144px' border="1.75px" bg="#CCE9CE" borderRadius={'10px'}  ml="48px">
    <Icon as={BiSolidFolder} w='68.25px' h='56px' mt='10px' ml='10px'></Icon>
    <Icon as={FaCircleCheck } w='13.89px' h='13.89px' ml='95px'></Icon>
    <Icon as={HiOutlineDotsVertical }w='24px' h='24px' ml='5px'> </Icon>
    <Box w='240px' h='20px'>
    <Text ml='20px' fontFamily={'Outfit'} fontWeight={500} fontSize={'14px'} lineHeight={'21px'} color='#00000'>Corporate Formation Document</Text>
    </Box>


<Flex justifyContent={"space-between"}>
    <Box ml='20px' mt='10px'>
    <Text  w='44px' h='16px' fontFamily={'Outfit'} fontWeight={400} fontSize={'12px'} lineHeight={'16px'} color='#A3A6AC'>PDF File</Text>
    </Box>
    <Box w='62px' h='29px' borderRadius={'20px'} py='6px'px='6px' alignSelf={'center'} bg="#AAD6A0" mr='12px' mt='10px'>
        <Text w='50px' h='21px'fontFamily={'Outfit'} fontWeight={400} fontSize={'12px'} lineHeight={'21px'} color="#000000" >704.7MB</Text>
    </Box>
    </Flex>
    </Box>
  )
}

export default Card
