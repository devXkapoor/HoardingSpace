import React from "react";
import Button from "../global/Button";
import img1 from "../../assets/global/Image1.png";
import img2 from "../../assets/global/Image2.png";
import ForwardArrowIcon from "../../assets/global/ArrowButtonForward.svg";
import arrow from "../../assets/global/ArrowButtonForward.svg";
import mumbai from "../../assets/home/Mumbai.png";
import hyderabad from "../../assets/home/Hyderabad.png";
import Delhi from "../../assets/home/Delhi.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} cursor-pointer`}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      {/* Arrow image */}
      <div className="w-[70px] h-[70px] pb-20  flex items-center justify-center">
        <img
          className="w-[70px] h-[70px]"
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
    ></div>
  );
}
const Explore = () => {
  const navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="flex justify-center gap-[24px] items-center  bg-[#FCF8F3] w-full ">
        {/*  */}
        <div className="flex flex-col items-start justify-center gap-[16px] max-w-[450px] py-[100px]">
          <div className="flex flex-col w-full items-center justify-center text-start ">
            <div className="text-[#333] text-[40px] font-[700]">
              Explore your Urban Landscape
            </div>
            <div className="text-[#666] text-[16px] font-[500] leading-[30px] ">
              Discover top-tier businesses from around the globe through our
              network of partners and associates.{" "}
            </div>
          </div>
          {/*  */}
          <div
            className="w-[176px] h-[48px]"
            onClick={() => {
              navigate("/city");
              window.scrollTo(0, 0);
            }}
          >
            <Button name={"Explore More"} type={"plain"} />
          </div>
        </div>

        <div className="flex w-[60%] p-[38px] mt-10 ">
          <Slider className="w-full " {...settings}>
            <img
              className="max-w-[400px] rounded-lg bg-cover"
              src={Delhi}
              alt="img"
            />
            <img className=" max-w-[400px] rounded-lg" src={mumbai} alt="img" />
            <img
              className="max-w-[400px] rounded-lg"
              src={hyderabad}
              alt="img"
            />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Explore;
