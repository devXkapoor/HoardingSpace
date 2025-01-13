import React from "react";
import arrow from "../../assets/global/DownArrow.svg";
import img from "../../assets/home/PageTypeImg.png";

const PageType = (props) => {
  return (
    <div className="flex items-center gap-[32px] justify-center w-full h-auto mt-[100px] ">
      <div className="flex flex-col  items-center w-full z-10 absolute">
        <div className="text-[42px] text-[#000] font-[500]">{props.page}</div>
        <div className="flex items-center gap-[4px] text-[16px] text-[#000] font-[500]">
          Home
          <img
            className="w-[20px] h-[20px] rotate-90"
            src={arrow}
            alt="arrow"
          />
          <span className="text-[16px] text-[#000] font-[300]">
            {props.page}
          </span>
        </div>
      </div>
      <img className=" w-full object-cover" src={img} alt="image" />
    </div>
  );
};

export default PageType;
