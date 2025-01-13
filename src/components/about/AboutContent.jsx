import React from "react";
import img from "../../assets/global/HeroImage.png";

const AboutContent = (props) => {
  return (
    <div className="flex w-full justify-between px-[144px]">
      <div className="flex flex-col gap-[16px] max-w-[625px]">
        <div className="text-[40px] text-[#3A3A3A] font-bold w-full text-center">
          {props.head}
        </div>
        <div className="text-[16px] text-[#828282] font-[400] w-full text-center">
          {props.text}
        </div>
        <div className="text-[16px] text-[#616161] font-[400] text-center">
          {props.body}
        </div>
      </div>
      <img
        className="w-[420px] h-[280px] rounded-xl"
        src={props.img}
        alt="img"
      />
    </div>
  );
};

export default AboutContent;
