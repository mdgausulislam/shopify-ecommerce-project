import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import "../Navigation/style.css";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" className="categoryPanel">
      <h3 className="p-2 text-[18px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoClose
          onClick={toggleDrawer(false)}
          className="text-[18px] cursor-pointer"
        />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)]">
              Fashion
            </Button>
            <HiPlus className="absolute top-[10px] right-[15px] cursor-pointer" />

            <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
              <li className="list-none">
                <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)]">
                  Fashion
                </Button>
                <HiPlus className="absolute top-[10px] right-[15px] cursor-pointer" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
