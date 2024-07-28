import React from "react";
import SingleCity from "./SingleCity";

const City = () => {
  return (
    <div className="flex justify-center w-full my-[110px] p">
      <div className="flex flex-wrap w-[80%] gap-[20px] ">
        <SingleCity city="Mumbai" />
        <SingleCity city="Delhi" />
        <SingleCity city="Jaipur" />
        <SingleCity city="Noida" />
        <SingleCity city="Surat" />
        <SingleCity city="Patna" />
      </div>
    </div>
  );
};

export default City;
