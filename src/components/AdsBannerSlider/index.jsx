import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import AdsBanner1 from "../../assets/Banner/img2_mobile.webp";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox img={AdsBanner1} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={AdsBanner1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={AdsBanner1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={AdsBanner1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={AdsBanner1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={AdsBanner1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
