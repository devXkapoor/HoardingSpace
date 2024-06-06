import img from "../../assets/ShopImage.png";
import Dropdown from "../global/Dropdown";
import arrow from "../../assets/global/DownArrow.svg";

import AdvertiseItem from "../home/AdvertiseItem";
import pic1 from "../../assets/advertisement/pic1.png";
import pic2 from "../../assets/advertisement/pic2.png";
import pic3 from "../../assets/advertisement/pic3.png";
import pic4 from "../../assets/advertisement/pic4.png";
import pic5 from "../../assets/advertisement/pic5.png";
import pic6 from "../../assets/advertisement/pic6.png";
import pic7 from "../../assets/advertisement/pic7.png";
import pic8 from "../../assets/advertisement/pic8.png";

const Shop = () => {
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
    {
      img: pic2,
      heading: "Slyterine",
      text: "Stylish sofa chair",
      price: "Rs. 8.400.000",
    },
    {
      img: pic5,
      heading: "Lolite",
      text: "Luxary big sofa ",
      price: "Rs. 6.400.000",
    },
    {
      img: pic8,
      heading: "Leviosa",
      text: "West Bandra Mumbai,734781",
      price: "Rs. 4.400.000",
    },
    {
      img: pic7,
      heading: "Bus Shelter",
      text: "East Bandra Mumbai,834781",
      price: "Rs. 9.600.000",
    },
    {
      img: pic4,
      heading: "Respiro",
      text: "Outdore bar table and Stool",
      price: "Rs. 4.400.000",
    },
    {
      img: pic8,
      heading: "Leviosa",
      text: "West Bandra Mumbai,734781",
      price: "Rs. 4.400.000",
    },
    {
      img: pic4,
      heading: "Respiro",
      text: "Outdore bar table and Stool",
      price: "Rs. 4.400.000",
    },
    {
      img: pic7,
      heading: "Bus Shelter",
      text: "East Bandra Mumbai,834781",
      price: "Rs. 9.600.000",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full \">
        <div className="flex items-center gap-[32px] justify-center w-full h-auto ">
          <div className="flex flex-col  items-center w-full z-10 absolute">
            <div className="text-[42px] text-[#000] font-[500]">
              Outdoor Advertising
            </div>
            <div className="flex items-center gap-[4px] text-[16px] text-[#000] font-[500]">
              Home
              <img
                className="w-[20px] h-[20px] rotate-90"
                src={arrow}
                alt="arrow"
              />
              <span className="text-[16px] text-[#000] font-[300]">
                Outdoor
              </span>
            </div>
          </div>
          <img className=" w-full object-cover" src={img} alt="image" />
        </div>
        <div className="flex justify-center gap-[64px] w-full bg-[#F9F1E7] py-[24px]  ">
          <Dropdown name="Location" />
          <Dropdown name="Ad Option" />
          <Dropdown name="Media Type" />
          <Dropdown name="Tags" />
          <Dropdown name="LIT/ NONLIT" />
        </div>
        <div className="flex flex-wrap gap-[32px] w-full max-w-[1236px] my-[20px]">
          {ItemsData.map((item, key) => (
            <AdvertiseItem
              key={key}
              img={item.img}
              heading={item.heading}
              text={item.text}
              price={item.price}
            />
          ))}
        </div>
        {/*  */}
        <div className="flex flex-col items-center w-full my-[32px]">
          <div className="flex justify-center gap-[32px] w-full  ">
            <div className=" flex items-center h-[60px]  rounded-[10px] bg-[#B88E2F] px-[30px] ">
              <p className="text-[20px] text-[#FFF] font-[400] p-0">1</p>
            </div>
            <div className=" flex items-center  h-[60px]  rounded-[10px] bg-[#F9F1E7] px-[30px] ">
              <p className="text-[20px] text-[#000] font-[400] p-0">2</p>
            </div>
            <div className=" flex items-center h-[60px]  rounded-[10px] bg-[#F9F1E7] px-[30px] ">
              <p className="text-[20px] text-[#000] font-[400] p-0">3</p>
            </div>
            <div className=" flex items-center h-[60px]  rounded-[10px] bg-[#F9F1E7] px-[30px] ">
              <p className="text-[20px] text-[#000] font-[400] p-0">NEXT </p>
            </div>
          </div>
          <div className="text-[16px] text-[#000] font-[400] my-[20px] ">
            Showing 1-16 of 32 results
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
