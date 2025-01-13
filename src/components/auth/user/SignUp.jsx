import { useState } from "react";
import PageType from "../../global/PageType";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../../../../firebase.config";

//---> firestore
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase.config";
import Button from "../../global/Button";
import LoginIcon from "../../../assets/global/Googlelogin.svg";
import { toast } from "react-toastify";
import TermsAndConditions from "../../global/CompanyTerms";

const SignUp = () => {
  const navigate = useNavigate();

  // const [userType, setuserType] = useState("user");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [contact, setContact] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setuser] = useState({});
  // const [toggle, setToggle] = useState(false);
  // let isread = false;

  onAuthStateChanged(auth, (currentuser) => {
    setuser(currentuser);
  });

  const RegisterWithGoogle = async () => {
    console.log("Google runing");
    try {
      const user = await signInWithPopup(auth, googleProvider);
      navigate("/update-profile");
      // toast.success("You have Loged-in by google");
      console.log(user);
    } catch (error) {
      toast.error(error);
      // alert("wromg ceredentails");
    }
  };

  const register = async () => {
    try {
      if (!email || !password || !fname || !lname || !contact) {
        return toast.error("All fields are required!");
      }
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const data = {
        fname,
        lname,
        email,
        password,
        contact,
      };
      console.log("data", data, user?.uid);
      const res = await setDoc(doc(db, "UserData", user?.uid), data);
      console.log("res", res);
      toast.success("User Registered Succesfully");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  const Logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <PageType page="SignUp" />

      {user ? (
        <div className="w-full flex flex-col ">
          <div className="flex w-full justify-center my-[84px] ">
            <div className="flex flex-col gap-[16px] rounded-md border-[1px] w-[30%] text-center p-[18px] shadow-lg">
              <div className="text-[24px] text-[#111] font-[600]">
                You Loged-in with Email :
              </div>
              <div>{user?.email}</div>
              <div>{user?.fname}</div>

              <button
                className="p-[8px] border-[2px] hover:bg-slate-400 w-[100px]"
                onClick={() => {
                  Logout();
                  navigate("/LoginType");
                }}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="flex"></div>
        </div>
      ) : (
        <div className="flex w-full justify-center my-[84px]">
          <div className="flex flex-col items-center gap-[32px] p-[16px] w-full max-w-[600px] bg-white ">
            {/* Header */}
            <div className="flex justify-between items-center w-full px-6">
              <div className="text-[24px] text-[#333] font-semibold">
                Create an account
              </div>
              <div
                className="text-[14px]  font-medium underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Log in instead
              </div>
            </div>

            {/* Input Fields */}
            <div className="flex flex-col gap-[16px] w-full px-6">
              {/* First Name */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] text-[#666666]">First Name</label>
                <input
                  className="h-[48px] w-full border border-[#ccc] rounded-md px-3"
                  type="text"
                  placeholder="First name"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] text-[#666666]">Last Name</label>
                <input
                  className="h-[48px] w-full border border-[#ccc] rounded-md px-3"
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              {/* Email Address */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] text-[#666666]">
                  Email Address
                </label>
                <input
                  className="h-[48px] w-full border border-[#ccc] rounded-md px-3"
                  type="email"
                  placeholder="Enter your Email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Contact Number */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] text-[#666666]">
                  Contact Number
                </label>
                <input
                  className="h-[48px] w-full border border-[#ccc] rounded-md px-3"
                  type="text"
                  placeholder="+91 000000"
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              {/* Password */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] text-[#666666]">Password</label>
                <input
                  className="h-[48px] w-full border border-[#ccc] rounded-md px-3"
                  type="password"
                  placeholder="ABX@123"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="w-full px-6  mt-4">
              <TermsAndConditions />
            </div>

            {/* Checkbox */}
            <div className="flex items-center w-full gap-[8px] px-6 mt-4">
              <input
                className="h-[16px] w-[16px] cursor-pointer"
                type="checkbox"
              />
              <span className="text-[14px] text-[#333333]">
                I agree to the terms and conditions
              </span>
            </div>

            {/* Create Account Button */}
            <div className="w-full px-6 ">
              <Button
                name="Create an account"
                type="plain"
                onClick={() => register()}
              />
            </div>

            {/* Separator */}
            <div className="flex w-full justify-between items-center px-6 ">
              <div className="h-[1px] w-full bg-[#ccc]"></div>
              <div className="text-[14px] text-[#333] mx-2">OR</div>
              <div className="h-[1px] w-full bg-[#ccc]"></div>
            </div>

            {/* Google Sign-In */}
            <div className="w-full px-6">
              <img
                className="cursor-pointer w-full"
                src={LoginIcon}
                alt="Google Sign-In"
                onClick={RegisterWithGoogle}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
