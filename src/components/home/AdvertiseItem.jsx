import React from "react";
import Button from "../global/Button";
import share from "../../assets/global/Share.svg";
import compare from "../../assets/global/Compare.svg";
import like from "../../assets/global/Like.svg";
import { Link } from "react-router-dom";
import ButtonImage from "../../assets/global/ButtonImage.svg";

const AdvertiseItem = (props) => {
  return (
    <>
      <div className="h-[450px] w-[285px] ">
        <div className="flex flex-col items-center justify-center h-[450px] w-[285px] bg-black hover:opacity-70 opacity-0 absolute hover:cursor-pointer z-10 ">
          <div className="relative w-[205px] h-[46px] ">
            <img
              className="opacity-[100] "
              src={ButtonImage}
              alt="buttonimage"
              onClick={() => {
                console.log("Clicked");
                // <Link to="/about" />;
              }}
            />
            {/* <Button
              // className="bg-[#FFFFFF] z-20 opacity-100 "
              name={"Add to cart"}
              type={"border"}
              // onClick={() => {
              //   <Link to="/about" />;
              // }}
            /> */}
          </div>
          {/* <div className="flex justify-between w-full p-[24px] my-[12px]">
            <img src={share} alt="share" />
            <img src={compare} alt="compare" />
            <img src={like} alt="like" />
          </div> */}
        </div>

        <div className="flex flex-col w-[285px] bg-[#F4F5F7] h-[450px] relative  z-0 ">
          <img className="h-[300px] w-full bg-[grey] " src={props.img} alt="" />
          <div className="flex flex-col justify-center items-start gap-[8px] w-full  p-[16px] z-10 ">
            <div className="text-[24px] text-[#3A3A3A] font-[600]">
              {props.heading}
            </div>
            <div className="text-[16px] text-[#898989] font-[500]  ">
              {props.text}
            </div>
            <div className="text-[20px] text-[#3A3A3A] font-[600]">
              {props.price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertiseItem;
