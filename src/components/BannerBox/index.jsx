import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg">
      <Link to="/">
        <img src={props.img} alt="adsbanner" className="w-full" />
      </Link>
    </div>
  );
};

export default BannerBox;
