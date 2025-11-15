import React from "react";
import Blog1 from "../../assets/blogs/blog-01.jpg";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src={Blog1}
          alt="blog image"
          className="w-full group-hover:scale-105 group-hover:rotate-1"
        />

        <span className="absolute flex items-center justify-center text-white z-50 bottom-[15px] right-[15px] bg-primary rounded-md gap-1 p-2 text-[11px] font-[500]">
          <IoTimeOutline className="text-[17px]" />
          5, April,2025
        </span>
      </div>

      <div className="info py-4">
        <h2 className="text-[16px] font-[600] text-black">
          <Link to="/" className="link">Nullam Table</Link>
        </h2>
        <p className="text-[14px] font-[400] text-[rgba(0,0,0,0.8)] mb-4 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          perspiciatis nobis molestias ratione esse....
        </p>

        <Link
          to="/"
          className="link font-[500] text-[14px] flex items-center gap-1"
        >
          Read More <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
