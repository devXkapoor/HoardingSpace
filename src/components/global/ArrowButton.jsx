import React from "react";
import ArrowIcon from "../../assets/global/ArrowIcon.svg";
import { useState } from "react";

const ArrowButton = (props) => {
  //   const [back, setback] = useState(false);
  var back = "true";

  return (
    <>
      <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full shadow-black">
        <img
          className={`${back === "true" ? "rotate-180" : " rotate-0"} `}
          src={ArrowIcon}
          alt="arrow-icon"
        />
      </div>
    </>
  );
};

export default ArrowButton;
