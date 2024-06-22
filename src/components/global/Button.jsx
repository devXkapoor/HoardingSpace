import React from "react";

const Button = (props) => {
  return (
    <>
      {props.type == "plain" && (
        <div
          className={`flex items-center justify-center  bg-[#B88E2F] hover:bg-[#a37c20]`}
        >
          <button className="text-[16px] text-[#FFF] font-[600] p-[16px]">
            {props.name}
          </button>
        </div>
      )}
      {props.type == "border" && (
        <div className="flex items-center justify-center bg-white hover:bg-[#f4f2f2] border-[1px] border-[#B88E2F] opacity-100">
          <button className="text-[16px] text-[#B88E2F] font-[600] p-[16px]">
            {props.name}
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
