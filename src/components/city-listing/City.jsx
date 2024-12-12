import React from "react";
import SingleCity from "./SingleCity";

const City = () => {
  return (
    <div className="flex justify-center w-full my-[110px] ">
      <div className="grid grid-cols-3 gap-[80px] ">
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
