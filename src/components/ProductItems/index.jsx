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

const ProductItems = () => {
  return (
    <div className="productItem rounded-md overflow-hidden border-2 border-[rgba(0,0,0,0.1)]">
      <div className="imgWrapper w-[100%] h-[250px] rounded-md overflow-hidden">
        <img
          src={ProductFashion1}
          alt="productItems"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="info p-3">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Cartify
          </Link>
        </h6>
        <h3 className="text-[14px] mt-1 title fond-[500] mb-2 text-[rgba(0,0,0,0.9)]">
          <Link to="/" className="link transition-all">
            Real Diamond Jewellery Gold Diamond Ring
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={2} size="small" readOnly />
      </div>
    </div>
  );
};

export default ProductItems;
