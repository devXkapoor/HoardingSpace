import React from "react";

const MediaLocation = (props) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[130px] max-h-[48px] bg-white opacity-70 absolute ">
      <div className="text-[#616161] text-[16px] font-500">{props.city}</div>
      <div className="text-[#3A3A3A] text-[20px] font-600">{props.media}</div>
    </div>
  );
};

export default MediaLocation;
