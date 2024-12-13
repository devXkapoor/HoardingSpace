import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../../../../firebase.config";
import Button from "../../global/Button";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const user = auth.currentUser; // Get the current logged-in user

      if (!user) {
        throw new Error("User is not logged in");
      }

      const data = {
        fname,
        lname,
        contact,
        password,
        email: user.email,
      };

      console.log("data", data, user.uid);

      await setDoc(doc(db, "UserData", user.uid), data);
      toast.success("Profile Completed Successfully!");

      // Reset input fields
      setFname("");
      setLname("");
      setContact("");
      setPassword("");

      // Reload the page to reflect changes
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error in register:", error);
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <div className="w-full flex flex-col items-center my-[32px]">
      <div className="max-w-[580px] flex flex-col items-center gap-[10px] pt-[30px]">
        <div className="text-[32px] font-[500]">Complete Profile</div>
        <div className="flex flex-col gap-[8px] items-start">
          <div className="text-[16px] text-[#666666] font-[400]">
            First Name
          </div>
          <input
            className="h-[56px] min-w-[580px] border-[1px] rounded-[4px] border-[#66666659] pl-[12px]"
            type="text"
            placeholder="First name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[8px] items-start">
          <div className="text-[16px] text-[#666666] font-[400]">Last Name</div>
          <input
            className="h-[56px] min-w-[580px] border-[1px] rounded-[4px] border-[#66666659] pl-[12px]"
            type="text"
            placeholder="Last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[8px] items-start">
          <div className="text-[16px] text-[#666666] font-[400]">
            Contact Number
          </div>
          <input
            className="h-[56px] min-w-[580px] border-[1px] rounded-[4px] border-[#66666659] pl-[12px]"
            type="text"
            placeholder="+91 000000"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[8px] items-start">
          <div className="text-[16px] text-[#666666] font-[400]">Password</div>
          <input
            className="h-[56px] min-w-[580px] border-[1px] rounded-[4px] border-[#66666659] pl-[12px]"
            type="password"
            placeholder="ABX@123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full pt-[40px]" onClick={register}>
          <Button name="Create an account" type="plain" />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
