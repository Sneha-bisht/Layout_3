
"use client"; 
import { MdOutlineNotificationAdd } from "react-icons/md"
import { CiSettings } from "react-icons/ci";
import { BiSolidDollarCircle } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { Box, Input, Text ,Button ,Flex, Icon, Avatar, Spacer} from "@chakra-ui/react";
import Main from "../Main";
import Proplan from "../ProPlan";
import Enterprise from "../EnterPrisePlan";


export default function Header() {
  return (
   <Box>
     <Flex justifyContent={"space-between"} mt="60px">
    
      <Box className='relative' width="433px" 
        height="49.92px"
        ml='35px'
        border='1px solid #EDEDED'
        color={"#F8F8F8"}
        borderRadius={'10px'}
         alignItems={"center"}>
        <Icon as={CiSearch} h="17px" w="17px" color="#17271D" className="absolute" mt='12px' ml='20px'></Icon>
       <Input  ml='45px' mt='9'
       alignItems={'center'}
       type='text'
       placeholder=" Search..."  
       />
      </Box>
      
    <Box ml='40px' display={"Flex"} mr="40px" gap="20px" >
      <Button leftIcon ={<CiSettings/>}  >
      Settings
      </Button>
     <Button leftIcon={<MdOutlineNotificationAdd />} >
       Notifications
    </Button>

    <Avatar name='Dan Abrahmov' borderRadius={'8px'}  w="40px" h="40px" border="1px solid #E3E3E3" src='https://bit.ly/dan-abramov' />
    
      </Box>
      </Flex>
  
      <Text w='312px' h='46px'  ml='35px' mt='35px' mb='10px'
       className="title" >
        My Subscription
       </Text>
    
    
       <Text className="Sub-Title"
      ml='35px' mt='35px' p="4px" >
      <Icon as={BiSolidDollarCircle } color="#2D5A3D" h="31px" w='31px' bg="#F8F8F8"> </Icon>  Plan & Pricing</Text>

      <Flex>
      <Main/>
      <Proplan/>
      <Enterprise/>
     </Flex>
     
    </Box>
  );
}
