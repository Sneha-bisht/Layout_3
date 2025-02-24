 "use client"
import { Box ,Button,Flex,Icon,Text} from '@chakra-ui/react'
import { FaRegBuilding } from "react-icons/fa";
import React from 'react'

function EnterPrisePlan() {
  return (
   <Box w='313px'
     h='338px'
     bg={"#68A77C"}
     
    borderColor={"#F8F8F8"}
     mt="35px"
     ml="35px"
     borderRadius={"15px"}
     >
      <Box >
     <Icon as={FaRegBuilding} w="22px" h="23px" color="white" mt="15px" ml="35"></Icon>
     <Text className='sub-title3' mt="15px">Enterprise Plan</Text>
     </Box>

    <Text className='para'>After something unique to 
        your business with custom features?
    </Text>

    <Text p='10px' m="20px" color="#ffffff">At Arrange, anything is possible.</Text>
      <Button  className="button" p='10px' ml="30px"  alignSelf="center" color={"#68A77C"} >Get Started</Button>
   
   </Box>
  )
}

export default EnterPrisePlan