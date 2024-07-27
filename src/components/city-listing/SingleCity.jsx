import React from "react";
import MediaLocation from "../global/MediaLocation";
import img from "../../assets/global/Background.png";

const SingleCity = () => {
  return (
    <div className="max-w-[320px] max-h-[200px]">
      <img className=" z-0 " src={img} alt="city image" />
      <MediaLocation className=" z-10" city="Delhi" media="2493+ Media" />
    </div>
  );
};

export default SingleCity;
