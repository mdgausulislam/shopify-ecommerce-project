import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import AdsBanner1 from "../../assets/AdsBanner/banner-1.jpg";
import AdsBanner2 from "../../assets/AdsBanner/banner-3.webp";
import AdsBanner3 from "../../assets/AdsBanner/banner-4.webp";
import AdsBanner4 from "../../assets/Banner/img2.webp";


const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box">
            <p>frdf</p>
            <img src={AdsBanner1} alt="adsbanner" className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <p>frdf</p>
            <img src={AdsBanner4} alt="adsbanner" className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <p>frdf</p>
            <img src={AdsBanner3} alt="adsbanner" className="w-full" />
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="box">
            <p>frdf</p>
            <img src={AdsBanner3} alt="adsbanner" className="w-full" />
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="box">
            <p>frdf</p>
            <img src={AdsBanner3} alt="adsbanner" className="w-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
