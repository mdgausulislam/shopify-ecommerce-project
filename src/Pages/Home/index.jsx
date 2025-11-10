import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeCatSlider />
      <section className="py-4 bg-white">
        <div className="container">
          <div className="freeShipping w-full py-4 p-4 border-2 border-[red] flex justify-between items-center">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free delivery now on your first order and over $200
              </p>
            </div>
            <p className="text-[25px] font-bold">- Only $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
