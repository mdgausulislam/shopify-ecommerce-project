import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import HomeCatSliderImg1 from "../../assets/HomeCatSlider/cat-1.jpg";
import HomeCatSliderImg2 from "../../assets/HomeCatSlider/cat-2.jpg";
import HomeCatSliderImg3 from "../../assets/HomeCatSlider/cat-3.jpg";
import HomeCatSliderImg4 from "../../assets/HomeCatSlider/cat-4.jpg";
import HomeCatSliderImg5 from "../../assets/HomeCatSlider/cat-5.jpg";
import HomeCatSliderImg6 from "../../assets/HomeCatSlider/cat-6.jpg";
import HomeCatSliderImg7 from "../../assets/HomeCatSlider/cat-7.jpg";
import HomeCatSliderImg8 from "../../assets/HomeCatSlider/cat-8.jpg";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/" className="">
              <div className="item py-7 px-3 bg-white rounded-sm text flex justify-center items-center flex-col">
                <img
                  src={HomeCatSliderImg1}
                  alt=""
                  className="w-[120px] transition-all"
                />
                <h3 className="text-[16px] font-[500] link">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text flex justify-center items-center flex-col">
                <img
                  src={HomeCatSliderImg2}
                  alt=""
                  className="w-[120px] transition-all"
                />
                <h3 className="text-[16px] font-[500] ">T-shirt</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text flex justify-center items-center flex-col">
                <img
                  src={HomeCatSliderImg3}
                  alt=""
                  className="w-[120px] transition-all"
                />
                <h3 className="text-[16px] font-[500] ">Leather Watch</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text flex justify-center items-center flex-col">
                <img
                  src={HomeCatSliderImg4}
                  alt=""
                  className="w-[120px] transition-all"
                />
                <h3 className="text-[16px] font-[500] ">Rings</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text flex justify-center items-center flex-col">
                <img
                  src={HomeCatSliderImg5}
                  alt=""
                  className="w-[120px] transition-all"
                />
                <h3 className="text-[16px] font-[500] ">Furniture</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text flex justify-center items-center flex-col">
                <img
                  src={HomeCatSliderImg6}
                  alt=""
                  className="w-[120px] transition-all"
                />
                <h3 className="text-[16px] font-[500] ">Sneakers Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text flex justify-center items-center flex-col">
                <img
                  src={HomeCatSliderImg7}
                  alt=""
                  className="w-[120px] transition-all"
                />
                <h3 className="text-[16px] font-[500] ">Purse</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text flex justify-center items-center flex-col">
                <img
                  src={HomeCatSliderImg8}
                  alt=""
                  className="w-[120px] transition-all"
                />
                <h3 className="text-[16px] font-[500] ">Controller</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
