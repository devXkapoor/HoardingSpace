import React from "react";
import AdvertiseItem from "./AdvertiseItem";
import Button from "../global/Button";
import pic1 from "../../assets/advertisement/pic1.png";
import pic2 from "../../assets/advertisement/pic2.png";
import pic3 from "../../assets/advertisement/pic3.png";
import pic4 from "../../assets/advertisement/pic4.png";
import pic5 from "../../assets/advertisement/pic5.png";
import pic6 from "../../assets/advertisement/pic6.png";
import pic7 from "../../assets/advertisement/pic7.png";
import pic8 from "../../assets/advertisement/pic8.png";

const Advertisement = () => {
  const ItemsData = [
    {
      img: pic1,
      heading: "Hoarding",
      text: "West Bandra Mumbai,234781",
      price: "Rs. 2.500.000",
    },
    {
      img: pic2,
      heading: "Leviosa",
      text: "West Bandra Mumbai,744781",
      price: "Rs. 2.500.000",
    },
    {
      img: pic3,
      heading: "Bus Shelter",
      text: "West Bandra Mumbai,134781",
      price: "Rs. 7.500.000",
    },
    {
      img: pic4,
      heading: "Hoarding",
      text: "Worli Mumbai,346281",
      price: "Rs. 1.500.000",
    },
    {
      img: pic5,
      heading: "Bus Shelter",
      text: "West Bandra Mumbai,234781",
      price: "Rs. 5.500.000",
    },
    {
      img: pic6,
      heading: "Hoarding",
      text: "Worli Mumbai,556781",
      price: "Rs. 6.200.000",
    },
    {
      img: pic7,
      heading: "Bus Shelter",
      text: "East Bandra Mumbai,834781",
      price: "Rs. 9.600.000",
    },
    {
      img: pic8,
      heading: "Leviosa",
      text: "West Bandra Mumbai,734781",
      price: "Rs. 4.400.000",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-[1236px] my-[30px]">
        <div className="text-[40px] font-[700] text-[#3A3A3A] my-[20px] ">
          Outdoor Advertising
        </div>

        <div className="flex flex-wrap gap-[32px] w-full">
          {/* <div className="h-[450px] w-[285px] absolute bg-black opacity-70 hidden hover:visible"></div> */}
          {ItemsData.map((item, key) => (
            <AdvertiseItem
              img={item.img}
              heading={item.heading}
              text={item.text}
              price={item.price}
            />
          ))}
          {/* <AdvertiseItem />
          <AdvertiseItem />
          <AdvertiseItem />
          <AdvertiseItem />
          <AdvertiseItem /> */}
        </div>
        <div className="w-[245px] h-[48px] my-[60px]">
          <Button name={"Show more"} type={"border"} />
        </div>
      </div>
    </>
  );
};

export default Advertisement;
