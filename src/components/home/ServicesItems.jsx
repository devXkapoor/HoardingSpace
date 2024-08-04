import React from "react";
import { useNavigate } from "react-router-dom";

const ServicesItems = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate(`/shop/${props.name}`)}
      >
        <img
          className="h-[480px] w-[380px] rounded-sm"
          src={props.img}
          alt="image"
        />
        <div className="text-[24px] text-[#333] font-[600] my-[36px]">
          {props.name}
        </div>
      </div>
    </>
  );
};

export default ServicesItems;
