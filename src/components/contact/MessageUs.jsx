import React from "react";
import CustomInput from "../global/CustomInput";
import close from "../../assets/global/CloseIcon.svg";
import Button from "../global/Button";

const MessageUs = () => {
  const data = [
    {
      title: "Have a requirement?",
      text: "Tell us your requirements and we will reach you with the brainstormed, creative and most effective solutions instantly.",
    },
    {
      title: "Have a query ?",
      text: "Feel free to write to us. Our reps are right there to answer them all.",
    },
    {
      title: "Have a suggestion?",
      text: "Your feedback and suggestions are always welcome. We are constantly striving to be better than what we were yesterday.",
    },
  ];
  return (
    <>
      <div className="flex flex-col w-full items-center my-[44px]">
        <div className="flex flex-col w-full items-center text-center my-[32px] ">
          <div className="text-[#616161] text-[20px] font-[600] leading-[30px] w-[560px]">
            How can Hoarding Space help you?
          </div>
          <div className="text-[#3A3A3A] text-[40px] font-[700]">
            Talk to us!
          </div>
        </div>
        <div className="flex max-w-[1064px] min-h-[464px] shadow-md rounded-[16px] shadow-[rgba(0,0,0,0.25)]">
          <div className="flex flex-col justify-start gap-[36px] w-[40%] bg-[#FCF8F3] py-[60px] px-[25px]">
            <div className="text-[20px] text-[#616161] font-[600] underline">
              How can Hoarding Space help you?
            </div>
            {data.map((items, key) => (
              <div className="flex flex-col items-start w-full" key={key}>
                <div className="text-[16px] text-[#616161] font-[500]">
                  {items.title}
                </div>
                <div className="text-[12px] text-[#616161] font-[400] leading-[18px]">
                  {items.text}
                </div>
              </div>
            ))}
          </div>
          {/* input fields */}
          <div className="flex flex-col w-[60%] p-[16px_32px_16px_32px] items-center">
            <div className="flex justify-between w-full mb-[40px]">
              <div className="text-[16px] text-[#353535] font-[500]">
                *Please fill all the details
              </div>
              <img
                className=" hover:cursor-pointer"
                src={close}
                alt="CloseIcon"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <CustomInput head="Name*" type="text" placeholder="Enter name" />
              <CustomInput
                head="Email*"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            {/*  */}
            <div className="flex flex-col items-start justify-between w-full ">
              <div className="text-[14px] text-[#353535] font-[600] my-[12px]">
                Your Message*
              </div>
              <input
                type={"text"}
                placeholder={"Your Meassage..."}
                className="bg-[#fff] border-[1px] border-[#CACACA] rounded-[8px] p-[6px_16px_24px_16px]  h-[86px] w-full  cursor-pointer "
              />
            </div>
            {/*  */}

            <div className="flex justify-between items-center w-full">
              <CustomInput
                head="Contact"
                type="text"
                placeholder="+91 00000000"
              />
              <CustomInput head="City" type="text" placeholder="Mumbai" />
            </div>
            <div className=" w-[270px] h-[46px] mb-[16px] mt-[32px]">
              <Button name={"Send Message"} type={"plain"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageUs;
