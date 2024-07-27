import React from "react";
import Button from "../../global/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../../../firebase.config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const AdvertiserLogin = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [user, setuser] = useState({});

  // ---->for grabing user in state hook
  onAuthStateChanged(auth, (currentuser) => {
    setuser(currentuser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, Email, Password);
      toast.success("You have Loged-In");
      // alert("You have LogedIn");
      // console.log(user);
    } catch (error) {
      // console.log(error.message);
      toast.error(error);
    }
  };
  return (
    <div className="flex w-full justify-center my-[84px]">
      <div className="flex flex-col items-center gap-[32px] p-[16px]">
        <div className="flex flex-col items-center w-full">
          <div className="text-[32px] text-[#333333] font-[500] mb-[16px]">
            Advertiser Login
          </div>
          <div className="text-[16px] text-[#666] font-[400]">
            Don’t have an acount?
            <span
              className="text-[18px] text-[#111] underline cursor-pointer mx-[4px]"
              onClick={() => navigate("/advertiserSignup")}
            >
              Sign up
            </span>
          </div>
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
          <div className="text-[16px] text-[#666666] font-[400]">Password</div>
          <input
            className="h-[56px] min-w-[580px] border-[1px] rounded-[4px] border-[#66666659] pl-[12px] "
            type="password"
            placeholder="abc@123 "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/*  */}
        <div className="flex w-full items-center  gap-[8px]">
          <input className="h-[16px] w-[16px] cursor-pointer" type="checkbox" />
          <div className="text-[16px] text-[#333333] font-[400]">
            Remember me
          </div>
        </div>

        <div
          className="w-full cursor-pointer"
          onClick={() => {
            login();
            navigate("/about");
          }}
        >
          <Button name="Login" type="plain" />
        </div>
      </div>
    </div>
  );
};

export default AdvertiserLogin;
