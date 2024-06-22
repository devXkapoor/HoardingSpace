import { useState } from "react";
import CustomInput from "../global/CustomInput";
import Button from "../global/Button";
import PageType from "../global/PageType";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../../../firebase.config";
import login from "../../assets/global/Googlelogin.svg";

const SignUp = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [user, setuser] = useState({});

  onAuthStateChanged(auth, (currentuser) => {
    setuser(currentuser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, Email, Password);
      alert("User Registered Succesfully");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const registerWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, googleProvider);
      alert("User Registered Succesfully");
      navigate("/");
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  const Logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <PageType page="SignUp" />

      {user ? (
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-[16px] rounded-md border-[2px] w-[30%] text-center p-[16px]">
            <div className="text-[24px] text-[#111] font-[600]">
              You Logedin with Email :
            </div>
            <div>{user?.email}</div>
            <button
              className="p-[8px] border-[2px] hover:bg-slate-200 w-[100px]"
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
            <div className="flex flex-col gap-[32px] p-[16px] ">
              {/*  */}
              <div className="flex justify-between items-center  w-full">
                <div className="text-[32px] text-[#333] font-[600]">
                  Create an account
                </div>
                <div
                  className="text-[16px] text-[#111] font-[400] underline cursor-pointer mr-[6px]"
                  onClick={() => navigate("/login")}
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
                <input className="h-[16px] w-[16px]" type="checkbox" />
                <div className="text-[16px] text-[#333333] font-[400]">
                  By creating an account, I agree to our{" "}
                  <span className=" underline cursor-pointer">
                    Terms of use and Privacy Policy
                  </span>
                </div>
              </div>
              <button
                className=" p-[16px] border-[4px] hover:bg-slate-500"
                onClick={() => {
                  register();
                  navigate("/");
                }}
              >
                Account
              </button>

              {/* <div
              onClick={() => {
                register;
                console.log("user added");
              }}
            >
              <Button name="Create an account" type="plain" />
            </div> */}
              <div className="flex w-full  justify-between items-center">
                <div className="h-[2px] min-w-[200px] bg-[#66666640] ml-[12px]" />
                <div className="text-[20px] text-[#333] font-[400]">OR</div>
                <div className="h-[2px] min-w-[200px] bg-[#66666640] mr-[12px]" />
              </div>
              <img
                className=" cursor-pointer"
                src={login}
                alt="goofle signin"
                onClick={registerWithGoogle}
              />
            </div>
            {/* <div className="flex flex-col gap-[4px] rounded-md border-[2px]">
              <div>Loged in as: {user?.email}</div>
              <button
                className="p-[8px] border-[2px] hover:bg-slate-200"
                onClick={Logout}
              >
                Logout
              </button>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
