import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// ---> firebase
import { auth, db } from "../../../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import AddItems from "../addItem/AddItems";
import Login from "./user/Login";
import { toast } from "react-toastify";

const LoginType = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
    });
  }, []);

  const Logout = async () => {
    await signOut(auth);
    toast.info("You Loged-Out");
    navigate("/");
  };

  return (
    <>
      {user ? (
        <div className="flex flex-col w-full gap-[34px] mt-[100px] mb-[195px]">
          <div className="w-full flex flex-col ">
            <div className="flex w-full justify-center my-[84px] ">
              <div className="flex flex-col gap-[16px] rounded-md border-[1px] border-t-[#B88E2F] border-t-[2px] w-[30%] text-center p-[18px] shadow-lg">
                <div className="text-[24px] text-[#111] font-[600]">
                  You Loged-in with Email :
                </div>
                <div>{user?.email}</div>

                <button
                  className="p-[8px] border-[1px] border-[#B88E2F] text-[#B88E2F] hover:bg-[#edecec] w-[100px]"
                  onClick={() => {
                    Logout();
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default LoginType;
