import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ServicesItems from "./ServicesItems";
import img1 from "../../assets/services/img1.png";
import img2 from "../../assets/services/img2.png";
import img3 from "../../assets/services/img3.png";
import mallmedia from "../../assets/home/MallMedia.png";
import busShelter from "../../assets/home/BusShelter.png";
import digitalBillboard from "../../assets/home/DigitalBillboard.png";
import billboard from "../../assets/home/HoardingSpaceBillboard 1.png";
import railwayHoarding from "../../assets/home/RailwayHoardingSpace.png";
import MetroHoarding from "../../assets/home/MetroHoarding.png";

import BackArrowIcon from "../../assets/global/ArrowButtonBack.svg";
import ForwardArrowIcon from "../../assets/global/ArrowButtonForward.svg";
import Description from "../global/Description";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
      }}
      onClick={onClick}
    >
      <div className="absolute bottom-0 h-[90px] w-[90px] grid items-center rounded-full  cursor-pointer ">
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
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <div className=" absolute right-0 bottom-0 h-[90px] w-[90px] grid items-center rounded-full  cursor-pointer  ">
        <img className="h-[90px] w-[90px]" src={BackArrowIcon} alt="forward" />
      </div>
    </div>
  );
}

const OurServices = () => {
  const ServicesData = [
    {
      img: billboard,
      text: "BillBoard",
    },
    {
      img: digitalBillboard,
      text: "Transit Media",
    },
    {
      img: mallmedia,
      text: "Mall Media",
    },
    {
      img: MetroHoarding,
      text: "Metro Media",
    },
    {
      img: railwayHoarding,
      text: "Railway Media",
    },
    {
      img: busShelter,
      text: "Bus Shelter",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="flex flex-col items-center w-[80%] my-[50px]">
        <Description
          title="Our Services"
          text="Showcase your advertisements in a uniquely exciting, innovative, and creative manner."
        />
        <Slider className="w-full flex gap-[20px] my-[24px]" {...settings}>
          {ServicesData.map((items, key) => (
            <ServicesItems key={key} img={items.img} name={items.text} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default OurServices;
