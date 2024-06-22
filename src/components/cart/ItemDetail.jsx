import React from "react";
import deleat from "../../assets/global/DeleatIcon.svg";
import img from "../../assets/AsgaarSofa.png";
import Text from "../global/Text";

const ItemDetail = () => {
  return (
    <div className="flex flex-col gap-[16px] min  -w-[800px] ">
      <div className="flex justify-between w-full ">
        <div className="text-[16px] text-[#000] font-[500] ">
          Ledscreen - Digital Screen at Elevation at International Business
          Center Piplod Mumbai
        </div>
        <img src={deleat} alt="deleat icon" />
      </div>
      {/*  */}
      <div className="flex justify-center gap-[64px] w-full">
        <img src={img} alt="image" />
        <div className="flex flex-col gap-[16px]">
          <div className="flex justify-start gap-[32px]">
            <Text head="Monthly" text="RS.24100" />
            <Text head="Monthly" text="RS.24100" />
          </div>
          <div className="flex justify-start gap-[32px]">
            <Text head="Monthly" text="RS.24100" />
            <Text head="Monthly" text="RS.24100" />
            <Text head="Monthly" text="RS.24100" />
          </div>
          <div className="flex justify-start gap-[32px]">
            <Text head="Monthly" text="RS.24100" />
            <Text head="Monthly" text="RS.24100" />
            <Text head="Monthly" text="RS.24100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
