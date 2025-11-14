import React from "react";
import ProductFashion1 from "../../assets/ProductFashion/1.jpg";
import ProductFashion2 from "../../assets/ProductFashion/2.jpg";
import ProductFashion3 from "../../assets/ProductFashion/3.jpg";
import ProductFashion4 from "../../assets/ProductFashion/4.jpg";
import ProductFashion5 from "../../assets/ProductFashion/5.jpg";
import ProductFashion6 from "../../assets/ProductFashion/6.jpg";
import "../ProductItems/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";

const ProductItems = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] group">
      <div className="imgWrapper w-[100%] h-[220px] rounded-md overflow-hidden relative">
        <Link to="/">
          <img
            src={ProductFashion1}
            alt="productItems"
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="discount absolute top-[10px] left-[10px] flex items-center bg-primary text-white rounded-md font-[500] text-[12px] z-50 p-1">
          12%
        </div>
        <div className="actions absolute top-[-200px] right-[0px] z-50 flex items-center gap-2 flex-col w-[50px] group-hover:top-[10px] transition-all duration-300 shadow-md">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-white text-black hover:text-white group">
            <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-primary" />
          </Button>
          <span className="border-[1px] border-gray-200 w-[25px]"></span>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-white text-black hover:text-white group">
            <IoIosGitCompare className="text-[18px] !text-black group-hover:text-white hover:!text-primary" />
          </Button>
          <span className="border-[1px] border-gray-200 w-[25px]"></span>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-white text-black hover:text-white group">
            <FaRegEye className="text-[18px] !text-black group-hover:text-white hover:!text-primary" />
          </Button>
          <span className="border-[1px] border-gray-200 w-[25px]"></span>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-white text-black hover:text-white group">
            <MdOutlineShoppingCart className="text-[18px] !text-black group-hover:text-white hover:!text-primary" />
          </Button>
        </div>
      </div>

      <div className="info p-3 py-5">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Cartify
          </Link>
        </h6>
        <h3 className="text-[14px] mt-1 title fond-[500] mb-2 text-[#000]">
          <Link to="/" className="link transition-all">
            Real Diamond Jewellery Gold Diamond Ring
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={2} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="newPrice text-primary text-[15px] font-[500]">
            $58.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
