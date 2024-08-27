import React from "react";
import Text from "../global/Text";
import deleat from "../../assets/global/DeleatIcon.svg";
import calender from "../../assets/CalenderIcon.svg";

const CartItem = (props) => {
  return (
    <div
      className="flex flex-col gap-[16px] w-[800px] p-4 shadow-md rounded-xl "
      //   key={index}
    >
      <div className="flex justify-between w-full ">
        <div className="text-[16px] text-[#000] font-[500] ">{props.title}</div>
        {/* <img
          className=" cursor-pointer"
          onClick={() => {
            DeleatItem(item.id);
            // setLoading(true);
          }}
          src={deleat}
          alt="deleat icon"
        /> */}
      </div>
      {/*  */}
      <div className="flex justify-center items-center gap-[24px] w-full py-[4px]">
        <img
          className="h-[200px] w-[200px] object-cover "
          src={props.img}
          alt="image"
        />
        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-start gap-[96px]">
            <Text text={props.type} head="Type" />

            <Text text={` ₹ ${props.monthlyprice}`} head="Monthly" />
            <Text text={` ₹ ${props.perdayprice}`} head="Per Day" />
          </div>
          <div className="flex justify-between ">
            <div className="flex flex-col items-center gap-[14px]">
              <div className="text-[16px] text-[#9F9F9F] font-[400]">
                Calender
              </div>

              <img src={calender} alt="calender icon" />
            </div>
            <Text head="Start Date" text="29/05/24" />
            <Text head="End Date" text="02/06/24" />
            <div className="flex items-start flex-col gap-[16px] ">
              <div className="text-[16px] text-[#000] font-[500]">
                Total Days
              </div>
              <div className="text-[16px] text-[#000] font-[500]">
                ₹ {props.monthlyprice}
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-[52px]">
            <Text head="Origional Price" text={`₹ ${props.monthlyprice}`} />
            <Text head="After Discount" text="₹ 24100" />
            <Text className="mr-[52px]" head="GST (18%)" text="₹ 45890" />
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
