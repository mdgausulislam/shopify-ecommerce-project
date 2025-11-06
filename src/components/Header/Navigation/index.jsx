import React from "react";
import "../Navigation/style.css";
import { BsFire } from "react-icons/bs";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="py-2">
      <div className="container flex items-center justify-end gap-8">
        <div className="col-1 w-[20%]">
          <Button className="!text-black gap-2 w-full">
            <RiMenu2Fill className="text-[18px]" />
            Shop By Categories
            <MdOutlineKeyboardArrowDown className="text-[20px] ml-auto font-bold" />
          </Button>
        </div>
        <div className="col-2 w-[60%]">
          <ul className="flex items-center gap-4">
            <li className="list-none">
              <Link
                to="/home"
                className="link transition text-[16px] font-[500]"
              >
                <Button className="link transition !font-[500]">Home</Button>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/home"
                className="link transition text-[16px] font-[500]"
              >
                Fashion
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/home"
                className="link transition text-[16px] font-[500]"
              >
                Electronics
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/home"
                className="link transition text-[16px] font-[500]"
              >
                Bags
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/home"
                className="link transition text-[16px] font-[500]"
              >
                Footwear
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/home"
                className="link transition text-[16px] font-[500]"
              >
                Groceries
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/home"
                className="link transition text-[16px] font-[500]"
              >
                Beauty
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/home"
                className="link transition text-[16px] font-[500]"
              >
                Wellness
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/home"
                className="link transition text-[16px] font-[500]"
              >
                Jewellery
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3 w-[20%]">
          <div className="flex items-center justify-end">
            <BsFire className="text-[16px]" />
            Deals Ending Soon!
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
