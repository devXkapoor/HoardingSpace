// THIS COMPONENT IS SCRAP. NOT USED IN ANY PLACE IN THIS REPOSITORY

import React from "react";
import { useState } from "react";
import Button from "../../global/Button";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../../../firebase.config";

//---> firestore
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase.config";
import { toast } from "react-toastify";

const AdvertiserSignUp = () => {
  const navigate = useNavigate();

  const [userType, setuserType] = useState("advertiser");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [user, setuser] = useState({});

  onAuthStateChanged(auth, (currentuser) => {
    setuser(currentuser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, Email, Password);
      const data = { userType, fname, lname, Email, Password };
      console.log("data", data, user?.user?.uid);
      const res = await setDoc(doc(db, "UserData", user?.user?.uid), data);
      console.log("res", res);
      toast.success("Advertiser Registered Succesfully");
      // alert("Advertiser Registered Succesfully");
      navigate("/");
    } catch (error) {
      toast.error("Aadvertiser account not created!");
      // alert("Error advertiser account!");
      // console.log(error.message);
    }
  };
  return (
    <div className="flex w-full justify-center my-[84px]">
      <div className="flex flex-col items-center gap-[32px] p-[16px]">
        <div className="flex flex-col gap-[32px] p-[16px] ">
          {/*  */}
          <div className="flex justify-between items-center  w-full">
            <div className="text-[32px] text-[#333] font-[600]">
              Create an account
            </div>
            <div
              className="text-[16px] text-[#111] font-[400] underline cursor-pointer mr-[6px]"
              onClick={() => navigate("/advertiserLogin")}
            >
              Log in insteed
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-[8px] items-start">
            <div className="text-[16px] text-[#666666] font-[400]">
              First Name
            </div>
            <input
              className="h-[56px] min-w-[580px] border-[1px] rounded-[4px] border-[#66666659] pl-[12px] "
              type="text"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          {/*  */}
          <div className="flex flex-col gap-[8px] items-start">
            <div className="text-[16px] text-[#666666] font-[400]">
              Last Name
            </div>
            <input
              className="h-[56px] min-w-[580px] border-[1px] rounded-[4px] border-[#66666659] pl-[12px] "
              type="text"
              placeholder="Last name "
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          {/*  */}
          <div className="flex flex-col gap-[8px] items-start">
            <div className="text-[16px] text-[#666666] font-[400]">
              Email Address
            </div>
            <input
              className="h-[56px] min-w-[580px] border-[1px] rounded-[4px] border-[#66666659] pl-[12px] "
              type="email"
              placeholder="Enter your Email... "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/*  */}
          <div className="flex flex-col gap-[8px] items-start">
            <div className="text-[16px] text-[#666666] font-[400]">
              Password
            </div>
            <input
              className="h-[56px] min-w-[580px] border-[1px] rounded-[4px] border-[#66666659] pl-[12px] "
              type="password"
              placeholder="ABX@123 "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/*  */}
          <div className="flex w-full items-center  gap-[8px]">
            <input
              className="h-[16px] w-[16px] cursor-pointer"
              type="checkbox"
            />
            <div className="text-[16px] text-[#333333] font-[400]">
              By creating an account, I agree to our{" "}
              <span className=" underline cursor-pointer">
                Terms of use and Privacy Policy
              </span>
            </div>
          </div>

          <div
            onClick={() => {
              register();
            }}
          >
            <Button name="Create an account" type="plain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserSignUp;
