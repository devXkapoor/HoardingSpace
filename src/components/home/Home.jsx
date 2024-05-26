import React from "react";
import Header from "../global/Header";

import home from "../../assets/HomeImage.png";
import OurServices from "./OurServices";
import Advertisement from "./Advertisement";
import MessageUs from "../contact/MessageUs";
import Footer from "../footer/Footer";
import Explore from "./Explore";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <Header />
        <img
          className=" w-full h-[800px] object-cover"
          src={home}
          alt="homeImage"
        />

        <OurServices />
        <Advertisement />
        <Explore />
        <div className="w-full flex flex-col items-center">
          <MessageUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
