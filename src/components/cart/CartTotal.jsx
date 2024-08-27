import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  return (
    <div className="flex flex-col p-[16px] items-center max-h-[400px] w-[400px] bg-[#F9F1E7] ">
      <div className="text-[32px] font-[600] text-[#000]">Cart Total</div>
      <div className="flex flex-col items-center justify-center my-[46px] w-full gap-[28px] ">
        <div className="flex  justify-center gap-[46px] w-full ">
          <a className="text-[16px] text-[#000] font-[500]">Subtotal</a>
          <a className="text-[16px] text-[#9F9F9F] font-[400]">₹ 25.00.000</a>
        </div>
        <div className="flex justify-center gap-[46px] w-full ">
          <a className="text-[16px] text-[#000] font-[500]">Total</a>
          <a className="text-[20px] text-[#B88E2F] font-[500]">₹ 25.00.000</a>
        </div>
      </div>

      <div
        className="text-[20px] text-[#111] font-[400] py-[16px] px-[68px] border-[2px] border-[#000] hover:bg-[#fce7ce] cursor-pointer"
        onClick={() => navigate("/orders")}
      >
        Proceed To Buy
      </div>
    </div>
  );
};

export default CartTotal;
