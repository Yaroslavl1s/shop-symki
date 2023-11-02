import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.scss';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src= "https://solarisjapan.com/cdn/shop/products/51llv5cU_2BsL.jpg?v=1571443138" alt="Symka" /></SwiperSlide>
        <SwiperSlide><img src= "https://solarisjapan.com/cdn/shop/products/51llv5cU_2BsL.jpg?v=1571443138" alt="Symka" /></SwiperSlide>
        <SwiperSlide><img src= "https://solarisjapan.com/cdn/shop/products/51llv5cU_2BsL.jpg?v=1571443138" alt="Symka" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
