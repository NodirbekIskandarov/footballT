import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../../assets/images/banner.png'; // Replace with your actual image path

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="Slide 2" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}