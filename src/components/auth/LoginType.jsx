import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// ---> firebase
import { auth, db } from "../../../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import AddItems from "../addItem/AddItems";

const LoginType = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({});
  const [data, setData] = useState({});

  onAuthStateChanged(auth, (currentuser) => {
    setuser(currentuser);
  });

  const Logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const SingleData = async () => {
      const docRef = doc(db, "UserData", user?.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists(user.uid)) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data());
      } else {
        console.log("No such document!");
        return null;
      }
    };
    if (user?.uid) {
      SingleData();
    }
  }, [user]);

  return (
    <>
      {user ? (
        <div className="flex flex-col w-full gap-[34px]">
          <div className="w-full flex flex-col ">
            <div className="flex w-full justify-center my-[84px] ">
              <div className="flex flex-col gap-[16px] rounded-md border-[1px] w-[30%] text-center p-[18px] shadow-lg">
                <div className="text-[24px] text-[#111] font-[600]">
                  You Loged-in with Email :
                </div>
                <div>{user?.email}</div>

                <button
                  className="p-[8px] border-[2px] hover:bg-slate-400 w-[100px]"
                  onClick={() => {
                    Logout();
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          {data.userType === "advertiser" ? <AddItems /> : <div></div>}
        </div>
      ) : (
        <div className="flex w-full justify-center items-center my-[210px] p-4  ">
          <div className="flex flex-col items-center gap-[16px] rounded-lg border-[1px] border-t-[#cdcaca] border-t-4 w-[30%] text-center px-[18px] py-[52px] shadow-lg">
            <div
              className="text-[22px] text-[#4d4c4c] font-[500] hover:underline cursor-pointer "
              onClick={() => navigate("/login")}
            >
              Login as User
            </div>
            <div
              className="text-[20px] text-[#4d4c4c] font-[500] hover:underline cursor-pointer"
              onClick={() => navigate("/advertiserLogin")}
            >
              Login as Advertiser
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginType;
