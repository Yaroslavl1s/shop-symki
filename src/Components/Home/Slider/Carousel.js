import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import symka2 from './../../../image/symka2.jpg';
import symka3 from './../../../image/symka3.jpg';
import symka4 from './../../../image/symka4.jpg';
import symka5 from './../../../image/symka5.jpg';
import symka6 from './../../../image/symka6.jpg';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.scss';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    
    <>
      <Swiper spaceBetween={50} navigation={true} modules={[Navigation]} slidesPerView={3}className="mySwiper">
        
        <SwiperSlide><img src={symka2} alt="Symka" /></SwiperSlide>
        <SwiperSlide><img src={symka3} alt="Symka" /></SwiperSlide>
        <SwiperSlide><img src={symka4} alt="Symka" /></SwiperSlide>
        <SwiperSlide><img src={symka5} alt="Symka" /></SwiperSlide>
        <SwiperSlide><img src={symka6} alt="Symka" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}

