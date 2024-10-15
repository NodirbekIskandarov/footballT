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
import { Link } from 'react-router-dom';

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
          <div style={{
            width: "100%",
            height: "800px",
            backgroundImage: `url(${img1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              width: "800px",
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              <span style={{
                fontWeight: "500",
                fontSize: "48px",
                color: "#FFFFFF"
              }}>Oʻzbekiston U-20 terma jamoasi Osiyo kubogi saralash bosqichini yirik gʻalaba bilan boshladi.</span>
              <Link to="/" ><button style={{
                padding: "12px 16px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                border: "none",
                fontSize: "18px",
                fontWeight: "#1E1E1E",
                cursor: "pointer"
              }}>Ko’proq ma’lumot</button></Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}