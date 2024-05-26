import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ServicesItems from "./ServicesItems";
import img1 from "../../assets/services/img1.png";
import img2 from "../../assets/services/img2.png";
import img3 from "../../assets/services/img3.png";

import BackArrowIcon from "../../assets/global/ArrowButtonBack.svg";
import ForwardArrowIcon from "../../assets/global/ArrowButtonForward.svg";
import Description from "../global/Description";
// import ArrowButton from "../global/ArrowButton";

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
      img: img1,
      text: "BillBoard",
    },
    {
      img: img2,
      text: "Digital BillBoard",
    },
    {
      img: img3,
      text: "Mall Media",
    },
    {
      img: img1,
      text: "BillBoard",
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
      <div className="flex flex-col items-center w-[70%] my-[50px]">
        <Description
          title="Our Services"
          text="Showcase your advertisements in a uniquely exciting, innovative, and creative manner."
        />
        {/* <div className="flex items-center gap-[12px] w-full mt-[20px]"> */}
        {/* <img src={BackArrowIcon} alt="back-arrow" /> */}
        <Slider className="w-full  my-[24px]" {...settings}>
          {ServicesData.map((items, key) => (
            <ServicesItems img={items.img} name={items.text} />
          ))}
          {/* <ServicesItems img={img1} name="Billboard" />
          <ServicesItems img={img1} name="Billboard" />
          <ServicesItems img={img1} name="Billboard" />
          <ServicesItems img={img1} name="Billboard" /> */}
        </Slider>
        {/* </div> */}
      </div>
    </>
  );
};

export default OurServices;
