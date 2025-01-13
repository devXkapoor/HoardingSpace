import React from "react";
import MediaLocation from "../global/MediaLocation";
import img from "../../assets/global/Background.png";

const SingleCity = (props) => {
  return (
    <div className="flex flex-col text-center justify-center max-w-[320px] max-h-[200px] my-[16px]">
      <img className="relative z-0 " src={props.img} alt="city image" />
      {/* <MediaLocation className="z-10" city="Delhi" media="2493+ Media" /> */}
      <div className="text-[20px] font-[600] my-[12px] cursor-pointer hover:font-[700]">
        {props.city}
      </div>
    </div>
  );
};

export default SingleCity;
