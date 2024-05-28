import React from "react";
import arrow from "../../assets/global/DownArrow.svg";

const Dropdown = (props) => {
  return (
    <div className="flex justify-between items-center h-[55px] w-[240px] rounded-[10px] border-[1px] border-[#9F9F9F] pl-[12px] pr-[6px] bg-white hover:cursor-pointer">
      <div className="text-[16px] text-[#9F9F9F] font-[400]">{props.name}</div>
      <img className="w-[12px] h-[12px]" src={arrow} alt="arrow" />
    </div>
  );
};

export default Dropdown;
