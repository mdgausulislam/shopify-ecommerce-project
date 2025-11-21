import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@mui/material/Button";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const HomeSliderV2 = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="homeSliderV2"
    >
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <div className="info absolute top-0 right-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3">
              Big Saving Days Sale
            </h4>
            <h2 className="text-[40px] font-[700]">
              Women Solid Round <br /> Green T-Shirt
            </h2>
            <h3 className="flex items-center text-[20px] font-[500] w-full text-left mt-3 mb-3">
              Starting At Only
              <span className="text-primary text-[30px] font-[700]">
                $59.00
              </span>
            </h3>
            <div className="w-full">
              <Button className="btn-org">Shop Now</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 absolute top-0 -right-[100%] opacity-0">
              Big Saving Days Sale
            </h4>
            <h2 className="text-[40px] font-[700] absolute top-0 -right-[100%] opacity-0">
              Women Solid Round <br /> Green T-Shirt
            </h2>
            <h3 className="flex items-center text-[20px] font-[500] w-full text-left mt-3 mb-3 absolute top-0 -right-[100%] opacity-0">
              Starting At Only
              <span className="text-primary text-[30px] font-[700]">
                $59.00
              </span>
            </h3>
            <div className="w-full">
              <Button className="btn-org absolute top-0 -right-[100%] opacity-0 btn_">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSliderV2;
