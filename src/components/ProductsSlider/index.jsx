import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItems from "../ProductItems";

const ProductsSlider = (props) => {
  return (
    <section className="productsSlider py-5">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductsSlider;
