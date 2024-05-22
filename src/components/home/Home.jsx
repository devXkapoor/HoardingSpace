import React from "react";
import Header from "../global/Header";
import home from "../../assets/HomeImage.png";

const Home = () => {
  return (
    <>
      <Header />
      <img className=" w-full h-[100vh]" src={home} alt="homeImage" />
    </>
  );
};

export default Home;
