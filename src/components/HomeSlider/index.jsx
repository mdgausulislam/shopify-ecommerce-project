import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

import Logo from "../../assets/Banner/img1.webp";
import Logo1 from "../../assets/Banner/img5.webp";
import Logo2 from "../../assets/Banner/img2.webp";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4 bg-[#f5f0f0]">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={Logo} alt="banner" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={Logo1} alt="banner" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={Logo2} alt="banner" className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
