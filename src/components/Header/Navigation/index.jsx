import React, { useState } from "react";
import "../Navigation/style.css";
import { BsFire } from "react-icons/bs";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col-1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
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
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/fashion"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/electronics"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/bags"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/footwear"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/groceries"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/beauty"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/wellness"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/jewellery"
                  className="link transition text-[16px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3 w-[20%]">
            <div className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <BsFire className="text-[16px]" />
              Deals Ending Soon!
            </div>
          </div>
        </div>
      </nav>
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
