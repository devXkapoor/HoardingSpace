import React from "react";
import { useNavigate } from "react-router";

const AdvertiseItem = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="h-[450px] w-[285px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-150 hover:cursor-pointer hover:shadow-lg"
        onClick={() => {
          navigate(`/cart/${props.id}`);
          window.scrollTo(0, 0);
        }}
      >
        <div className="flex flex-col w-[285px] bg-[#F4F5F7] h-[450px] relative  z-0 ">
          <img
            className="h-[300px] w-full bg-[grey] "
            src={props.img}
            alt="product image"
          />
          <div className="flex flex-col justify-center items-start gap-[8px] w-full  p-[16px] z-10 ">
            <div className="text-[24px] text-[#3A3A3A] font-[600]">
              {props.heading}
            </div>
            <div className="text-[16px] text-[#898989] font-[500]  ">
              {props.text}
            </div>
            <div className="flex w-full justify-start gap-[12px]">
              <div className="flex items-center ">
                <div className="text-[20px] text-[#3A3A3A] font-[600] line-through  ">
                  ₹{new Intl.NumberFormat().format(props.price)}
                </div>
              </div>
              <span class="flex items-center absolute top-0 right-0 h-[50px] w-[50px] bg-[#E97171] text-[16px] text-white text-xs font-bold px-3 py-1 rounded-full -translate-x-[20px] translate-y-[20px]">
                -{props.discountPerc}%
              </span>

              <div className="text-[20px] text-[#3A3A3A] font-[600]">
                ₹ {new Intl.NumberFormat().format(props.discount)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertiseItem;
