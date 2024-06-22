import React from "react";
import CustomInput from "../global/CustomInput";
import Button from "../global/Button";
import PageType from "../global/PageType";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, googleProvider } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginIcon from "../../assets/global/Googlelogin.svg";

const Login = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, Email, Password);
      alert("You are login");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const loginWithGoogle = async () => {
  //   try {
  //     const user = await signInWithPopup(auth, googleProvider);
  //     alert("login Succesfully");
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      <PageType page="Login" />

      <div className="flex w-full justify-center my-[84px]">
        <div className="flex flex-col items-center gap-[32px] p-[16px]">
          <div className="flex flex-col items-center w-full">
            <div className="text-[32px] text-[#333333] font-[500]">Log in </div>
            <div className="text-[16px] text-[#666] font-[400]">
              Don’t have an acount?
              <span
                className="text-[18px] text-[#111] underline cursor-pointer mx-[4px]"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </div>
          </div>
          <img
            className=" w-full cursor-pointer"
            src={LoginIcon}
            alt="Googlee signin"
            // onClick={loginWithGoogle}
          />

          {/*  */}
          <div className="flex w-full  justify-between items-center">
            <div className="h-[2px] min-w-[170px] bg-[#66666640] ml-[12px]" />
            <div className="text-[20px] text-[#111] font-[400]">
              Or continue with email
            </div>
            <div className="h-[2px] min-w-[170px] bg-[#66666640] mr-[12px]" />
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
              placeholder="abc@123 "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/*  */}
          <div className="flex w-full items-center  gap-[8px]">
            <input className="h-[16px] w-[16px]" type="checkbox" />
            <div className="text-[16px] text-[#333333] font-[400]">
              Remember me
            </div>
          </div>
          <button
            className=" p-[16px] border-[4px] hover:bg-slate-500"
            onClick={() => {
              login();
              navigate("/about");
            }}
          >
            login
          </button>
          {/* <div className="w-full" onClick={login}>
            <Button name="Login" type="plain" />
          </div> */}
          {/* <CustomInput head="Name*" type="text" placeholder="Enter name" /> */}
          {/* <CustomInput head="Email*" type="email" placeholder="Enter your email" /> */}
        </div>
      </div>
    </>
  );
};

export default Login;
