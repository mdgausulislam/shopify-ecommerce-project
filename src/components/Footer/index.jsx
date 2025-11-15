import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiGift } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="py-6 bg-white">
      <div className="container">
        <div className="flex justify-center items-center gap-2 ">
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-2" />
            <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
            <p className="text-[12px] font-[500]">For all Orders Over $100</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <TbTruckReturn className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-2" />
            <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
            <p className="text-[12px] font-[500]">For an Exchange Product</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <MdPayment className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-2" />
            <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
            <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <TfiGift className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-2" />
            <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
            <p className="text-[12px] font-[500]">Our First Product Order</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <BiSupport className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-2" />
            <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
            <p className="text-[12px] font-[500]">Contact us Anytime</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
