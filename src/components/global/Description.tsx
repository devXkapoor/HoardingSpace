import React from "react";

const Description = (props) => {
  return (
    <>
      <div className="flex flex-col w-full items-center text-center ">
        <div className="text-[#333] text-[32px] font-[700]">{props.title}</div>
        <div className="text-[#666] text-[20px] font-[400] leading-[30px] w-[560px]">
          {props.text}
        </div>
      </div>
    </>
  );
};

export default Description;
