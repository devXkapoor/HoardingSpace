// this component is scrap not used anywhere

import React from "react";

const FooterItems = (props) => {
  return (
    <div className="flex flex-col items-start gap-[14px]">
      <div className="text-[24px] text-[#000] font-[700] mb-4">
        {props.head}
      </div>
      <div className="text-[16px] text-[#000] font-[400] hover:underline cursor-pointer">
        {props.first}
      </div>
      <div className="text-[16px] text-[#000] font-[400] hover:underline cursor-pointer">
        {props.second}
      </div>
      <div className="text-[16px] text-[#000] font-[400] hover:underline cursor-pointer">
        {props.third}
      </div>
      {/* <div className="text-[16px] text-[#000] font-[400]">{props.fourth}</div>
      <div className="text-[16px] text-[#000] font-[400]">{props.fifth}</div> */}
    </div>
  );
};

export default FooterItems;
