import Sidebar from '@/Components/Sidebar'
import { Box, Flex } from '@chakra-ui/react'
import Header from '@/Components/Header'

import React from 'react'

function page() {
  return (
    <>
  <Flex >
  <Box width="333px" bg="#FAFAFB"height='1026px' >
    <Sidebar/>
  </Box>
  <Box flex={1} bg="#FFFFFF" height='100vh'>
    <Header/>
  </Box>
</Flex>

     </>
    
  )
}

export default page
