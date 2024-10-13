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

  const [userType, setuserType] = useState("user");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [contact, setContact] = useState("");

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [user, setuser] = useState({});
  // const [toggle, setToggle] = useState(false);
  let isread = false;

  onAuthStateChanged(auth, (currentuser) => {
    setuser(currentuser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, Email, Password);
      const data = {
        userType,
        fname,
        lname,
        Email,
        Password,
        contact,
        isRead: isread,
      };
      console.log("data", data, user?.user?.uid);
      const res = await setDoc(doc(db, "UserData", user?.user?.uid), data);
      console.log("res", res);
      toast.success("User Registered Succesfully");

      // alert("User Registered Succesfully");
      navigate("/");
    } catch (error) {
      toast.error(error);

      // alert("Error in creating account!");
      // console.log(error.message);
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
          <div className="flex flex-col items-center gap-[32px] p-[16px]">
            <div className="flex flex-col items-center gap-[32px] p-[16px] ">
              {/*  */}
              <div className="flex justify-between items-center w-full px-6">
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
                  Contact Number
                </div>
                <input
                  className="h-[56px] min-w-[580px] border-[1px] rounded-[4px] border-[#66666659] pl-[12px] "
                  type="text"
                  placeholder="+91 000000"
                  onChange={(e) => setContact(e.target.value)}
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
              {/* <div className="flex w-full items-center  gap-[8px]"> */}
              {/* <input
                  className="h-[16px] w-[16px] cursor-pointer"
                  type="checkbox"
                />
                <div className="text-[16px] text-[#333333] font-[400]">
                  By creating an account, I agree to our{" "}
                  <span className=" underline cursor-pointer">
                    Terms of use and Privacy Policy
                  </span>
                </div> */}
              {/* </div> */}
              <div>
                <TermsAndConditions />
              </div>
              <div className="flex w-full items-center ml-4 gap-[8px]">
                <input
                  className="h-[16px] w-[16px] cursor-pointer"
                  type="checkbox"
                  // onClick={() => setToggle(!toggle)}
                />
                <div className="text-[14px] text-[#333333] font-[400]">
                  I agree to the terms and conditions
                </div>
              </div>

              <div
                className="w-full"
                onClick={() => {
                  register();
                }}
              >
                <Button name="Create an account" type="plain" />
              </div>

              {/* signup with google */}
              {/* <div className="flex w-full  justify-between items-center">
                <div className="h-[2px] min-w-[200px] bg-[#66666640] ml-[12px]" />
                <div className="text-[20px] text-[#333] font-[400]">OR</div>
                <div className="h-[2px] min-w-[200px] bg-[#66666640] mr-[12px]" />
              </div>
              <img
                className=" cursor-pointer"
                src={LoginIcon}
                alt="goofle signin"
                onClick={registerWithGoogle}
              /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
