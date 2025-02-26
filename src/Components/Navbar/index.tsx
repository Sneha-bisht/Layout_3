"use client"

import { Box ,Flex,Icon,Text} from '@chakra-ui/react'
import React from 'react'
import { Avatar } from "@chakra-ui/react"
import { MdNotificationsNone,MdOutlineMarkChatUnread } from "react-icons/md";


function Navbar() {
  return (
    <Box mt='50px' ml='30px' >
        <Flex justifyContent={"space-between"}>
      <Text w='550px' h='40px' fontFamily={'Outfit'} fontWeight={500} fontSize={"32px"} lineHeight={'36px'} color='#171A1F'>
        Purple Seed LLC <span className='span' >added 4 month ago</span>
      </Text>
      <Box display={'flex'} justifyContent={'space-evenly'} gap="20"   mr='20px' >
        <Icon as={MdNotificationsNone} alignSelf={"center"} w='17px' h='20px' color="#000000" ></Icon>
        <Icon as={MdOutlineMarkChatUnread} alignSelf={"center"} w='19px' h='17px' color='#000000'></Icon>

        <Avatar 
           name="S"
            w="36px" 
            h="36px" 
            bg="#A3A6AC" 
            color="white" 
            borderRadius="50%"
            />
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar
