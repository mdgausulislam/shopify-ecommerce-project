import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiGift } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { Link } from "react-router-dom";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Payment1 from "../../assets/footer/payment-all-6 (1).png";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container">
          <div className="flex justify-center items-center gap-2 pb-8 py-8">
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

          <br />
          <hr />

          <div className="footer flex py-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600] mb-4">Contact Us</h2>
              <p className="text-[13px] font-[400] pb-3">
                Classyshop Demo <br /> 507-Union Trade Centre <br /> United
                States
              </p>
              <span className="text-[18px] font-[600] block w-full mb-2 text-primary">
                Call us: +00 123-456-789
              </span>
              <Link
                className="link text-[13px]"
                to="mailto:someone@example.com"
              >
                Email us: admin@example.com
              </Link>

              <div className="flex items-center gap-4 mt-4">
                <HiOutlineChatAlt2 className="text-[40px] text-primary" />
                <span className="text-[17px] font-[600]">
                  Online Chat <br /> Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[50%] flex pl-8">
              <div className="part2-col1 w-[33%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none text-[14px] mb-1 w-full">
                    <Link to="/" className="link">
                      Prices Drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      New Products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Best Sellers
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2-col2 w-[33%]">
                <h2 className="text-[18px] font-[600] mb-4">Our company</h2>
                <ul className="list">
                  <li className="list-none text-[14px] mb-1 w-full">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Secure Payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2-col3 w-[33%]">
                <h2 className="text-[18px] font-[600] mb-4">Your Account</h2>
                <ul className="list">
                  <li className="list-none text-[14px] mb-1 w-full">
                    <Link to="/" className="link">
                      Order Tracking
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Sign In
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Create Account
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Discount
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Wishlist
                    </Link>
                  </li>
                  <li className="list-none text-[14px] mb-2 w-full">
                    <Link to="/" className="link">
                      Credit Slip
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part3 w-[25%] flex  flex-col pr-8">
              <h2 className="text-[18px] font-[600] mb-4">
                Get Our Latest Update !
              </h2>
              <p className="text-[13px] font-[400] pb-3">
                Subscribe to our latest newsletter to get news <br /> about
                special discounts.
              </p>

              <form action="" className="mt-5 mb-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-md mb-4 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Enter Your Email Address"
                />
                <Button className="btn-org">SUBSCRIBE</Button>
              </form>

              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the terms and conditions and the privacy policy"
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-3">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group transition-all hover:bg-primary"
              >
                <FaFacebookF className="tex-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group transition-all hover:bg-primary"
              >
                <FaXTwitter className="tex-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group transition-all hover:bg-primary"
              >
                <FaInstagram className="tex-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group transition-all hover:bg-primary"
              >
                <FaPinterest className="tex-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group transition-all hover:bg-primary"
              >
                <FaGoogle className="tex-[15px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p className="text-[14px] text-center font-[400] mb-0">
            Copyright © Classyshop. All Rights Reserved.
          </p>

          <div className="flex items-center">
            <img src={Payment1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
