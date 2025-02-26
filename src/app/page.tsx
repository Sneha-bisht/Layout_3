"use client"
import About from '@/components/About-Section'
import Document from '@/components/Document'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import SwiperPage from '@/components/Swiper'

import { Box, Flex } from '@chakra-ui/react'


import React from 'react'

function page() {
  return (
    <>
  <Flex >
  <Box width="268px" bg='#1C2127' height='1980px' >
   <Sidebar/>
  </Box>
  <Box flex={1}  bg="#D1D2D6" h='1980px' >
   <Navbar/>
   <SwiperPage/>
   <About/>
   <Document/>
  </Box>
</Flex>

     </>
    
  )
}

export default page
