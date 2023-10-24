import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";

import 'bootstrap/dist/css/bootstrap.min.css';


const ProductSlider = () => {
    return (
        <div className="container py-4 px-4 justify-content-center">
            <Swiper
            freeMode={true}
            grabCursor={true}
            
            className="mySwiper"
            slidesPerView={5}
            spaceBetween={30}
            >
            <SwiperSlide>
                <h1>Slide 1</h1>
            </SwiperSlide>

            <SwiperSlide>
                <h1>Slide 2</h1>
            </SwiperSlide>

            <SwiperSlide>
                <h1>Slide 3</h1>
            </SwiperSlide>





            </Swiper>

        </div>
    );
};

export default ProductSlider;