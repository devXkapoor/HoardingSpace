import React, { useState } from "react";
import PageType from "../global/PageType";
import CustomInput from "../global/CustomInput";
import Button from "../global/Button";
import location from "../../assets/global/LocationIcon.svg";
import call from "../../assets/global/Callicon.svg";
import clock from "../../assets/global/Clock.svg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { useNavigate } from "react-router-dom";

const data = [
  {
    head: "Address",
    add1: " DF02 Govind Bhawan",
    add2: "IIT Roorkee, 247667",
    img: location,
  },
  {
    head: "Phone",
    add1: "Mobile: +(84) 546-6789",
    add2: "Hotline: +(84) 456-6789",
    img: call,
  },
  {
    head: "Working Time",
    add1: "Monday-Friday: 9:00 - 22:00",
    add2: "Saturday-Sunday: 9:00 - 21:00",
    img: clock,
  },
];

const Contact = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const SendMessage = async () => {
    try {
      const res = await addDoc(collection(db, "Messages"), {
        name,
        email,
        number,
        city,
        message,
      });
      console.log(res);
    } catch (error) {
      console.log("Error in sending message", error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <PageType page="Contact" />
        <div className="flex flex-col w-full items-center text-center  my-[72px]">
          <div className="text-[#000] text-[32px] font-[600]">
            Get In Touch With Us
          </div>
          <div className="text-[#9F9F9F] text-[16px] font-[400] leading-[24px] w-[560px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </div>
        </div>

        <div className="flex w-full justify-center gap-[120px]">
          {/*  */}
          <div className="flex flex-col gap-[40px] mt-[16px]">
            {data.map((item, key) => (
              <div
                className="flex items-start min-w-[240px] gap-[16px] w-[60%] "
                key={key}
              >
                <img
                  className="text-black mt-[8px] "
                  src={item.img}
                  alt="icon"
                />
                <div className="flex flex-col items-start gap-[4px] ">
                  <div className="text-[24px] text-[#000] font-[500]">
                    {item.head}
                  </div>
                  <div className="text-[16px] text-[#000] font-[400]">
                    {item.add1}
                  </div>
                  <div className="text-[16px] text-[#000] font-[400]">
                    {item.add2}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*  */}
          <div className="flex flex-col gap-[4px]">
            <CustomInput
              head="Name"
              type="text"
              placeholder="Enter full name"
              onChange={(e) => setName(e.target.value)}
              className="h-[55px] w-[530px]"
            />
            <CustomInput
              head="Email Adress"
              type="email"
              placeholder="abc@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="h-[55px] w-[530px]"
            />
            <CustomInput
              head="Contact"
              type="text"
              placeholder="+91 00000000"
              onChange={(e) => setNumber(e.target.value)}
              className="h-[55px] w-[530px]"
            />
            <CustomInput
              head="City"
              type="text"
              placeholder="Mumbai"
              onChange={(e) => setCity(e.target.value)}
              className="h-[55px] w-[530px]"
            />
            <CustomInput
              head="Message Us"
              type="text"
              placeholder="Message...."
              onChange={(e) => setMessage(e.target.value)}
              className="h-[120px] w-[530px]"
            />

            <div
              className="h-[55px] w-[240px] my-[32px]"
              onClick={() => {
                SendMessage();
                console.log("Message send");
                navigate("/about");
              }}
            >
              <Button name="Send" type="plain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
