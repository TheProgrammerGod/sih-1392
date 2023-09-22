import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ewasteImg1 from "../assets/ewaste1.jpg";
import ewasteImg2 from "../assets/ewaste2.jpg";
import ewasteImg3 from "../assets/Namo-banner-2-2.png";
import ewasteImg4 from "../assets/Namo-Nov-2022-5.webp";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/carousel.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function Carousel() {
  return (
    <div className="mx-auto h-[35vw] w-[100vw]">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={ewasteImg3} alt="ewaste" /></SwiperSlide>
        <SwiperSlide><img src={ewasteImg4} alt="ewaste" /></SwiperSlide>
        <SwiperSlide><img src={ewasteImg3} alt="ewaste" /></SwiperSlide>
        <SwiperSlide><img src={ewasteImg4} alt="ewaste" /></SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Carousel