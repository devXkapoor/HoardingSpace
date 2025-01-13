import React from "react";
import PageType from "../global/PageType";
import img1 from "../../assets/services/img1.png";
import img2 from "../../assets/services/img2.png";
import img3 from "../../assets/services/img3.png";

import mallmedia from "../../assets/home/MallMedia.png";
import busShelter from "../../assets/home/BusShelter.png";
import digitalBillboard from "../../assets/home/DigitalBillboard.png";
import billboard from "../../assets/home/HoardingSpaceBillboard 1.png";
import railwayHoarding from "../../assets/home/RailwayHoardingSpace.png";
import MetroHoarding from "../../assets/home/MetroHoarding.png";

import { useNavigate } from "react-router-dom";

const ServicesData = [
  {
    img: billboard,
    text: "BillBoard",
  },
  {
    img: MetroHoarding,
    text: "Metro Media",
  },
  {
    img: mallmedia,
    text: "Mall Media",
  },
  {
    img: digitalBillboard,
    text: "Digital Billboard",
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

const AllServices = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageType page="Our Services" />
      <div className="grid grid-cols-3 gap-4 py-10 px-10">
        {ServicesData.map((item, key) => (
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(`/shop/${item.text}`)}
          >
            <img
              className="h-[480px] w-[380px] rounded-sm"
              src={item.img}
              alt="image"
            />
            <div className="text-[24px] text-[#333] font-[600] my-[36px]">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
