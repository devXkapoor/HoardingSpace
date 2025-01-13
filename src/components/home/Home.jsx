import React from "react";
import home from "../../assets/NewHomeImage.png";
import OurServices from "./OurServices";
import Advertisement from "./Advertisement";
import MessageUs from "../contact/MessageUs";
import Explore from "./Explore";
import Enquire from "../global/Enquire";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-end w-full h-auto ">
          <Enquire />
          <img
            className="w-full h-[800px] object-cover"
            src={home}
            alt="homeImage"
          />
        </div>
        <OurServices />
        <Advertisement />
        <Explore />
        <div className="w-full flex flex-col items-center">
          <MessageUs />
        </div>
      </div>
    </>
  );
};

export default Home;
