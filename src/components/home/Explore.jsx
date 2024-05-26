import React from "react";
import Button from "../global/Button";
import img1 from "../../assets/global/Image1.png";
import img2 from "../../assets/global/Image2.png";
import ForwardArrowIcon from "../../assets/global/ArrowButtonForward.svg";
import arrow from "../../assets/global/ArrowButtonForward.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <div className="absolute h-[90px] w-[90px] flex items-center rounded-full  cursor-pointer ">
        <img
          className="h-[90px] w-[90px]"
          src={ForwardArrowIcon}
          alt="forward"
        />
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    >
      {/* <div className=" absolute right-0 bottom-0 h-[90px] w-[90px] grid items-center rounded-full  cursor-pointer  ">
        <img className="h-[90px] w-[90px]" src={BackArrowIcon} alt="forward" />
      </div> */}
    </div>
  );
}
const Explore = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="flex justify-center gap-[24px] items-start bg-[#FCF8F3] w-full py-[32px] ">
        {/*  */}
        <div className="flex flex-col items-start justify-center gap-[16px] max-w-[450px] h-[580px]">
          <div className="flex flex-col w-full items-center justify-center text-start ">
            <div className="text-[#333] text-[40px] font-[700]">
              Explore your Urban Landscape{" "}
            </div>
            <div className="text-[#666] text-[16px] font-[500] leading-[30px] ">
              Discover top-tier businesses from around the globe through our
              network of partners and associates.{" "}
            </div>
          </div>
          {/*  */}
          <div className="w-[176px] h-[48px]">
            <Button name={"Explore More"} type={"plain"} />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[16px] max-w-[410px]">
          <img src={img1} alt="img" />
        </div>
        <div className="flex items-start  gap-[16px] max-w-[410px] ">
          <Slider className="w-[400px] gap-[4px] rounded-md" {...settings}>
            <img className="w-full" src={img2} alt="img" />
            <img className="" src={img2} alt="img" />
            <img className="" src={img2} alt="img" />
          </Slider>
          {/* <img src={ForwardArrowIcon} alt="forward-arrow" /> */}
        </div>
      </div>
    </>
  );
};

export default Explore;
