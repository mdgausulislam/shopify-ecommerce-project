import React from "react";
import Blog1 from "../../assets/blogs/blog-01.jpg";
import { IoTimeOutline } from "react-icons/io5";

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

      <div className="info"></div>
    </div>
  );
};

export default BlogItem;
