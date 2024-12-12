import React from "react";
import PageType from "../global/PageType";
import img1 from "../../assets/services/img1.png";
import img2 from "../../assets/services/img2.png";
import img3 from "../../assets/services/img3.png";
import { useNavigate } from "react-router-dom";

const ServicesData = [
  {
    img: img1,
    text: "BillBoard",
  },
  {
    img: img2,
    text: "Transit Media",
  },
  {
    img: img3,
    text: "Mall Media",
  },
  {
    img: img1,
    text: "BillBoard",
  },
  {
    img: img2,
    text: "Railway Media",
  },
  {
    img: img3,
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
