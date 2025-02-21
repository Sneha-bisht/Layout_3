"use client"
import { Box, HStack, Icon, VStack,Text, Spacer, Avatar, Badge, Flex } from '@chakra-ui/react'
import React from 'react'
import { AiFillDashboard , AiOutlineDollar} from "react-icons/ai";
import { FaUsers,FaUser ,FaCircleUser} from "react-icons/fa6";
import { RiUserStarLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaCampground} from "react-icons/fa";
import { IoChatbubblesSharp} from "react-icons/io5";
import { FaMountain } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";


function Sidebar() {
  return (
  <Box>

  <Text as="h1" ml="30px" fontSize={'40px'} fontWeight={700} mt="40px" > <Icon as={FaMountain} color="#9BBF82" h="30px" w="35px" gap='10px'></Icon>Arrange</Text>
    
    <Box w='247px' bg="#FAFAFB"  minH="576px" border-right='1px solid grey'  mt="25px" ml='31px'>
      
    <VStack spacing={8} align="center" px='5'>
        <Box py='10px'px='12px' bg="#F8FAFB" cursor="pointer">
      <HStack spacing={10}>
      <Icon as={AiFillDashboard} color="#B9B9B9" />
        <Text color="#898989">Dashboard</Text>
        </HStack>
      </Box>
    <Spacer/>
      <Box py='10px'px='12px' bg="#F8FAFB"  cursor="pointer">
      <HStack spacing={10}>
      <Icon as={FaUsers} color="#B9B9B9" />
        <Text color="#898989">My Clients</Text>
        </HStack>
      </Box>
      <Spacer/>
      <Box py='10px'px='12px' bg="#F8FAFB"  cursor="pointer">
      <HStack spacing={10}>
      <Icon as={RiUserStarLine} color="#B9B9B9" />
        <Text color="#898989">My Candidates</Text>
        </HStack>
      </Box>
      <Spacer/>
      <Box py='10px'px='12px' bg="#F8FAFB"  cursor="pointer">
      <HStack spacing={10}>
      <Icon as={FaCampground} color="#B9B9B9" />
      <Text color="#898989">Arrange</Text>
        </HStack>
      </Box>
      <Spacer/>
      <Box py='10px'px='12px' bg="#F8FAFB" cursor="pointer">
      <HStack spacing={10}>
      <Icon as={MdOutlineEmail} color="#B9B9B9" />
      <Text color="#898989">Email Templates</Text>
        </HStack>
      </Box>
      <Spacer/>
      <Box height={59} width={'246px'} bg="#9BBF82"  cursor="pointer" alignContent={'center'} borderRadius={"5px"} >
      <HStack spacing={10}>
      <Icon as={ AiOutlineDollar} ml='25'color="#FFFFFF"  alignContent='center'/>
      <Text color="#FFFFFF" ml='10px'>Your Subscription</Text>
        </HStack>
      </Box>
      <Spacer/>
      <Box  py='10px'px='12px' bg="#F8FAFB"  cursor="pointer">
      <HStack spacing={10}>
      <Icon as={FaUser} color="#B9B9B9" />
      <Text color="#898989">Users</Text>
        </HStack>
      </Box>
      <Spacer/>
      <Box py='10px'px='12px' bg="#F8FAFB" cursor="pointer">
      <HStack spacing={10}>
      <Icon as={FaCircleUser} color="#B9B9B9" />
      <Text color="#898989">My Account</Text>
        </HStack>
      </Box>
      <Spacer/>
      <Box py='10px'px='12px' bg="#F8FAFB" cursor="pointer">
      <HStack spacing={10}>
      <Icon as={IoChatbubblesSharp } color="#B9B9B9" />
      <Text color="#898989">Interviews</Text>
        </HStack>
      </Box>
      <Spacer/>
    </VStack>
    <Flex>
    <Box  border="1px solid #F2F2F2" py="10px" px="10px" borderRadius={"10px"} mt='30px' >
     <Box display={"flex"} gap='10'>
    <Avatar name='Dan Abrahmov' w="40px" h="40px" src='https://bit.ly/dan-abramov' />
    <Box>
    <Text fontWeight='700' fontSize={'12px'} lineHeight={"13.8px"}>
     Josh Collins
    </Text>
    <Text color={"#B9B9B9"} fontWeight="400" lineHeight='13.8px' fontSize={'12px'}>josh@collinsrecruitment.com</Text>
    </Box>
    </Box>
  </Box>
</Flex>
    
    <Box py='8px'px='12px' bg="#F8FAFB"ml='55px'  mt="30px" cursor="pointer">
      <HStack spacing={10}>
      <Icon as={IoIosLogOut } color="#B9B9B9" />
      <Text color="#898989" alignSelf={"center"}>Logout</Text>
        </HStack>
      </Box>
  </Box>
  </Box>
  )
}

export default Sidebar
