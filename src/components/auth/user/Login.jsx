import React from "react";
import Button from "../../global/Button";
import PageType from "../../global/PageType";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, googleProvider } from "../../../../firebase.config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import LoginIcon from "../../../assets/global/Googlelogin.svg";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [user, setuser] = useState({});

  // ----> for grabing user in state hook
  onAuthStateChanged(auth, (currentuser) => {
    setuser(currentuser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, Email, Password);
      toast.success("You have Loged-in");
      // alert("You have LogedIn");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const LoginWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, googleProvider);
      toast.success("You have Loged-in by google");
      navigate("/");
      console.log(user);
    } catch (error) {
      toast.error(error);
      // alert("wromg ceredentails");
    }
  };
  const Logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <PageType page="Login" />
      {user ? (
        <div className="flex w-full justify-center my-[84px]">
          <div className="flex flex-col gap-[16px] rounded-md border-[1px] w-[30%] text-center p-[18px] shadow-lg">
            <div className="text-[24px] text-[#111] font-[600]">
              You Loged-in with Email :
            </div>
            <div>{user?.email}</div>
            <button
              className="p-[8px] border-[2px] hover:bg-slate-400 w-[100px]"
              onClick={() => {
                Logout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center my-[84px]">
          <div className="flex flex-col items-center gap-[32px] p-[16px]">
            <div className="flex flex-col items-center w-full">
              <div className="text-[32px] text-[#333333] font-[500]">
                Log in{" "}
              </div>
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
              onClick={LoginWithGoogle}
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
              <input
                className="h-[16px] w-[16px] cursor-pointer"
                type="checkbox"
              />
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
      )}
    </>
  );
};

export default Login;
