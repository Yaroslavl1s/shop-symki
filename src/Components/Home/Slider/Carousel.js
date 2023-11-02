import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import symka1 from './../../../image/symka1.jpg';
import symka2 from './../../../image/symka2.jpg';
import symka3 from './../../../image/symka3.jpg';




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
        <SwiperSlide><img src={symka1} alt="Symka" /></SwiperSlide>
        <SwiperSlide><img src={symka2} alt="Symka" /></SwiperSlide>
        <SwiperSlide><img src={symka3} alt="Symka" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}

