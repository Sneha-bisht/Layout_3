"use client"
import { Box,Flex,Icon,Text } from '@chakra-ui/react'
import { Poppins } from 'next/font/google'
import React from 'react'
import { TbHomeDollar } from "react-icons/tb";
import { GrHomeRounded } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { CiMoneyBill } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import { IoMdBusiness } from "react-icons/io";
import { MdIncompleteCircle,MdOutlineComputer ,MdQueryStats } from "react-icons/md";






function About() {
  return (
   <Box w='1081px' h='1084px' mt='80px' ml='20px' border='1px solid #D1D2D6' bg='#FFFFFF' borderRadius={'20px'} p="20px">
    
    <Box w='990px' h='256px' mt='20px' ml='25px' mr='25px' >
    <Box h="36px" w="229px">
    <Text fontFamily="Poppins" fontWeight="400" fontSize="24px" lineHeight="36px" color="#000000">
      About the business
     </Text>
     </Box>

<Text 
  w='990px'
  h="132px"  
  mt="8px" 
  fontFamily="Poppins" 
  fontWeight="400" 
  fontSize="14px"  
  lineHeight="22px" 
  color="#000000"
>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus 
  necessitatibus, reiciendis officia dolore, eveniet doloremque minima 
  quam repellat architecto fuga. Explicabo ratione similique ipsa, 
  cumque molestiae voluptatum aperiam perferendis quos officiis doloribus.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime 
  accusantium aut tempore et voluptate eaque, mollitia aliquam temporibus, aperiam 
  natus! Placeat repudiandae quo qui veniam laborum exercitationem ducimus eos delectus,
  Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur adipisicing
   elit. Magni assumenda fuga fugit eligendi saepe facilis perferendis atque facere minus accusantium 
   quae obcaecati eum, voluptatibus, cum quisquam? Soluta at architecto facilis? adipisicing elit. Exercitationem atque 
   eos est omnis veritatis. Qui adipisci ipsum explicabo.
</Text>

  <Flex w='781px' h='48px' mt='15' justifyContent={"space-between"}>
      <Text display={'flex'} ml='8px' fontFamily={'Outfit'} fontWeight={'400'} fontSize={'16px'} lineHeight={'24px'} w='152' h='48px'><Icon as={GrHomeRounded} w='14px' h='15.79px' mt='3' mr='5px'></Icon>City,State<br/> Bellevue,Washington</Text>
      <Text display={'flex'} ml='8px' fontFamily={'Outfit'} fontWeight={'400'} fontSize={'16px'} lineHeight={'24px'} w='152' h='48px'><Icon as={SlLocationPin} w='24px'h='24px' mt='3'mr='5px'></Icon>Address <br/>14 Broadway Avenue East</Text>
      <Text display={'flex'} ml='8px' fontFamily={'Outfit'} fontWeight={'400'} fontSize={'16px'} lineHeight={'24px'} w='152' h='48px'><Icon as={IoMdBusiness}w='24px'h='24px' mt='3' mr='5px'></Icon>Ask Price <br/> $200,000</Text>
    </Flex>
    </Box>

    <Box w='990px' h='256px'  ml='25px' mr='25px'>
    <Box h="36px" w="300px" >
  <Text fontFamily="Poppins" fontWeight="400" fontSize="24px" lineHeight="36px" color="#000000">
    Justification for ask price
  </Text>
</Box>


<Text 
w='990px'
  h="132px"  
  mt='10px'
  fontFamily="Poppins" 
  fontWeight="400" 
  fontSize="14px"  
  lineHeight="22px" 
  color="#000000"
>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus 
  necessitatibus, reiciendis officia dolore, eveniet doloremque minima 
  quam repellat architecto fuga. Explicabo ratione similique ipsa, 
  cumque molestiae voluptatum aperiam perferendis quos officiis doloribus.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime 
  accusantium aut tempore et voluptate eaque, mollitia aliquam temporibus, aperiam 
  natus! Placeat repudiandae quo qui veniam laborum exercitationem ducimus eos delectus,
  Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur adipisicing
   elit. Magni assumenda fuga fugit eligendi saepe facilis perferendis atque facere minus accusantium 
   quae obcaecati eum, voluptatibus, cum quisquam? Soluta at architecto facilis? adipisicing elit. Exercitationem atque 
   eos est omnis veritatis. Qui adipisci ipsum explicabo.
</Text>
 </Box>

 <Box w='990px' h='501px'  ml='25px' mr='25px' mt='-50px'>
      <Box w='825px' h='166px'>
        <Text w='237px' h='36px'
        fontFamily="Poppins" 
        fontWeight="400" 
        fontSize="24px"  
        lineHeight="36px" 
        color="#000000"
        >
         Company Overview
        </Text>
      <Flex justifyContent={"space-between"} mt='20px'>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'} ml='8px'><Icon as={FiUsers}   w='20px' h='20px' mt='3' mr='5px'></Icon>Company Size<br/>24 employees</Text>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'} ml='8px'><Icon as={FaDollarSign} w='24px'h='24px'  mt='3'mr='5px'></Icon>Revenue <br/> $500,000</Text>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'} ml='8px'><Icon as={FaArrowTrendUp}  w='24px'h='24px'  mt='3' mr='5px'></Icon>Profit<br/>$500,000</Text>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'} ml='8px'><Icon as={CiCalendar}  w='24px'h='24px' mt='3' mr='5px'></Icon>Founding year <br/>2012</Text>
    </Flex>

    <Flex mt='30px' justifyContent={"space-between"}>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'} ml='8px'><Icon as={MdOutlineHomeWork} w='20px'h='20px' mt='3' mr='5px'></Icon>Industry<br/>Marketing</Text>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'} ml='8px'><Icon as={FaPhoneAlt } w='24px'h='24px'mt='3'mr='5px'></Icon>Contact<br/>+1(949) 459 333</Text>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'} ml='8px'><Icon as={IoMdBusiness} w='24px'h='24px' mt='3' mr='5px'></Icon>Business Model<br/>B2B</Text>
    </Flex>
    </Box>

       <Box w='990px' h='36px'mt='40px' >
       <Text w='180px' h='36px'
        fontFamily="Inter" 
        fontWeight="400" 
        fontSize="24px"  
        lineHeight="36px" 
        color="#000000"
        >
         Market Analysis
       </Text>
     <Flex mt='25px' justifyContent={"space-between"}>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'}  ml='8px'><Icon as={MdIncompleteCircle } w='20px'h='20px' mt='3' mr='5px'></Icon>Competitor(s)<br/>ABC ltd</Text>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'}  ml='8px'><Icon as={MdOutlineComputer }  w='24px'h='24px'  mt='3'mr='5px'></Icon>Competitor(s) Website (s)<br/>www.abc.com</Text>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'}  ml='8px'><Icon as={MdQueryStats}  w='24px'h='24px' mt='3' mr='5px'></Icon>Estimated Growth Rate<br/>8%</Text>

      <Box  display={'grid'}>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'}><Icon as={BsBoxArrowInRight} w='24px' h='24px'  mt='2' mr='6px'></Icon>Growth Opportunity </Text>
     
        <ul className='list' >
        <li>Lorem ipsum dolor sit amet,</li>
        <li>consecetur adipiscing elit,sed do</li>
        <li>incididunt ut labore et dolore magn</li>
        </ul>
        </Box>
      </Flex>

   <Box w='552px' h='141px' mt='20px'>
        <Text w='186px' h='36px'
        fontFamily="Inter" 
        fontWeight="400" 
        fontSize="24px"  
        lineHeight="36px" 
        color="#000000"
        >
        Business Details
        </Text>
      <Flex mt='10' justifyContent={"space-between"}>
      <Text  fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'} ml='8px'><Icon as={TbHomeDollar} w='24px' h='24px' mt='3' mr='5px'></Icon>Type of Funding<br/>Bootstrapped</Text>
      
      <Box  display={'grid'}>
      <Text fontFamily={'inter'} fontSize={'14px'} fontWeight={400}lineHeight={'22px'} display={'flex'}><Icon as={BsBoxArrowInRight} w='24px' h='24px'  mt='2' mr='6px'></Icon>Reason for selling </Text>
     
        <ul className='list' >
        <li>Lorem ipsum dolor sit amet,</li>
        <li>consecetur adipiscing elit,sed do</li>
        <li>incididunt ut labore et dolore magn</li>
        </ul>
        </Box>
    </Flex>
    </Box>
      </Box>
     </Box>
    
  </Box>
   
  )
}

export default About