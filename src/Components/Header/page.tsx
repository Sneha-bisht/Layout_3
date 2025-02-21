
"use client"; 
import { MdOutlineNotificationAdd } from "react-icons/md"
import { CiSettings } from "react-icons/ci";
import { BiSolidDollarCircle } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { Box, Input, Text ,Button ,Flex, Icon, Avatar, Spacer} from "@chakra-ui/react";
import Main from "../Main/page";
import Proplan from "../ProPlan/page";
import Enterprise from "../EnterPrisePlan/page";


export default function Header() {
  return (
   <Box>
     <Flex justifyContent={"space-between"} mt="60px">
      <Box>
        <Icon as={CiSearch} ml="35px" mr="-30px" h="17px" w="17px" color="#17271D"></Icon>
       <Input 
        placeholder=" Search..." 
        width="433px" 
        height="49.92px"
        ml='35px'
        border='1px solid #EDEDED'
        color={"#F8F8F8"}
       />
      </Box>
      
    <Box ml='40px' display={"Flex"} mr="40px" gap="20px" >
      <Button leftIcon ={<CiSettings/>}  >
      Settings
      </Button>
     <Button leftIcon={<MdOutlineNotificationAdd />} >
       Notifications
    </Button>

    <Avatar name='Dan Abrahmov' borderRadius={'8px'}  w="40px" h="40px" src='https://bit.ly/dan-abramov' />
    
      </Box>
      </Flex>
  
      <Text w='312px' h='46px'  ml='35px' mt='35px' mb='10px'
       className="title" >
        My Subscription
       </Text>
     
       <hr></hr>
       
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
