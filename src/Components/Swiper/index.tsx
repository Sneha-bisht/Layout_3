"use client"

import { Box ,Text} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const images = [
 'https://plus.unsplash.com/premium_photo-1669055554219-f431495ccae8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1669055554205-e0ba9df0fe1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1669055553412-f6598e28e1eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  
];

const  SwiperPage  = () => {
  return (
    <Box w="1081px" h='257px'  mt="25px" borderRadius={"20px"} ml="30px">
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              style={{ borderRadius:'20px', width:'1081px'
              ,height:'255px' }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box p='20px'>
        <Text fontFamily={"Outfit"} fontWeight={500} fontSize={'36px'} lineHeight={'59px'} color="#000000" mx="5px"> Public Information</Text>
      </Box>
    </Box>
   
  );
};

export default SwiperPage;
