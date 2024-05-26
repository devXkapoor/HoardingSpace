import React from "react";

const ServicesItems = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
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
