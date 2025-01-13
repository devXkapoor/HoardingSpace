import React from "react";
import SingleCity from "./SingleCity";
import img from "../../assets/global/Background.png";
import mumbai from "../../assets/home/Mumbai.png";
import Hyderabad from "../../assets/home/Hyderabad.png";
import delhi from "../../assets/home/Delhi.png";
import Gurugram from "../../assets/home/Gurugram.png";
import Banglore from "../../assets/home/Banglore.png";
import Mumbai_HoardingSpace from "../../assets/home/Mumbai_HoardingSpace.png";

const City = () => {
  return (
    <div className="flex justify-center w-full ">
      <div className="grid grid-cols-3 gap-[80px] my-[150px] ">
        <SingleCity city="Hyderabad" img={Hyderabad} />
        <SingleCity city="Mumbai" img={mumbai} />
        <SingleCity city="Delhi" img={delhi} />
        <SingleCity city="Gurugram" img={Gurugram} />
        <SingleCity city="Banglore" img={Banglore} />
        <SingleCity city="Kolkata" img={Mumbai_HoardingSpace} />
      </div>
    </div>
  );
};

export default City;
