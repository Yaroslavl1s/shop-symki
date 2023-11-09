import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import symka2 from './../../../image/symka2.jpg';
import symka3 from './../../../image/symka3.jpg';
import symka4 from './../../../image/symka4.jpg';
import symka5 from './../../../image/symka5.jpg';
import symka6 from './../../../image/symka6.jpg';

import { Link } from 'react-router-dom';






// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './Slider.scss';

// import required modules
import { Navigation, EffectFade } from 'swiper/modules';

export default function App() {
  return (
    
    <>
      <Swiper 
      modules={[Navigation, EffectFade]}
      
      spaceBetween={50} 
      navigation={true} 
      
      slidesPerView={3}
      className="mySwiper"
      loop={true}
      
      >
        
        <SwiperSlide><Link to="/shop-all" target="_self" rel="noreferrer">
        <img src={symka2} alt="Symka"></img>
      </Link></SwiperSlide>

      <SwiperSlide><Link to="/shop-all" target="_self" rel="noreferrer">
        <img src={symka3} alt="Symka"></img>
      </Link></SwiperSlide>

      <SwiperSlide><Link to="/shop-all" target="_self" rel="noreferrer">
        <img src={symka4} alt="Symka"></img>
      </Link></SwiperSlide>

      <SwiperSlide><Link to="/shop-all" target="_self" rel="noreferrer">
        <img src={symka5} alt="Symka"></img>
      </Link></SwiperSlide>

      <SwiperSlide><Link to="/shop-all" target="_self" rel="noreferrer">
        <img src={symka6} alt="Symka"></img>
      </Link></SwiperSlide>
       
        
        
      </Swiper>
    </>
  );
}

