import React from "react";
import Button from "./Button";

const Enquire = () => {
  return (
    <>
      <div className="flex flex-col items-start max-w-[650px] max-h-[445px] bg-[#FFF3E3] z-10 absolute rounded-lg p-[72px_52px_4px_32px] mr-[142px]">
        <div className="text-[16px] text-[#333] font-[600]">
          Step into the Spotlight
        </div>
        <div className="text-[52px] text-[#B88E2F] font-[700]">
          UNLEASH YOUR BRAND POTENTIAL
        </div>
        <div className="text-[18px] text-[#333] font-[500]">
          The Future of Outdoor Advertising Starts Here
        </div>
        <div className="w-[260px] h-[74px] my-[16px]">
          <Button name={"ENQUIRE NOW"} type={"plain"} />
        </div>
      </div>
    </>
  );
};

export default Enquire;
