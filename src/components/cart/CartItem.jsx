import React from "react";
import Text from "../global/Text";
import deleat from "../../assets/global/DeleatIcon.svg";
import calender from "../../assets/CalenderIcon.svg";

const CartItem = (props) => {
  return (
    <div className="flex flex-col gap-[16px] w-[800px] p-4 shadow-md rounded-xl ">
      <div className="flex justify-between w-full ">
        <div className="text-[16px] text-[#000] font-[500] ">{props.title}</div>
      </div>
      <div className="flex justify-center items-center gap-[24px] w-full py-[4px]">
        <img
          className="h-[200px] w-[200px] object-cover "
          src={props.img}
          alt="image"
        />
        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-start gap-[76px]">
            <Text text={props.type} head="Type" />

            <Text text={` ₹ ${props.monthlyprice}`} head="Monthly" />
            <Text text={` ₹ ${props.perdayprice}`} head="Per Day" />
          </div>
          <div className="flex justify-start gap-[76px] ">
            <div className="flex flex-col items-center gap-[14px]">
              <div className="text-[16px] text-[#9F9F9F] font-[400]">
                Calender
              </div>

              <img src={calender} alt="calender icon" />
            </div>
            <Text text={`${props.illuminate}`} head="Illumination" />
            <Text text={`${props.size}`} head="Size(Sq.Ft)" />
            {/* </div> */}
          </div>
          <div className="flex justify-between gap-[76px]">
            <Text head="Price" text={`₹ ${props.monthlyprice}`} />
            <Text head="Discount" text={`₹ ${props.discount}`} />
            <Text
              className="mr-[52px]"
              head="Dicount(%)"
              text={`${props.discountPerc} %`}
            />
            <div className="flex items-start flex-col gap-[16px]">
              <div className="text-[16px] text-[#000] font-[500] mr-[38px]">
                Total
              </div>
              <div className="text-[16px] text-[#000] font-[700]">
                ₹ {props.monthlyprice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
