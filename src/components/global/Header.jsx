import React from "react";
import logo from "../../assets/global/Logo.svg";
import search from "../../assets/global/SearchIcon.svg";
import contact from "../../assets/global/ContactIcon.svg";
import cart from "../../assets/global/CartIcon.svg";
import heart from "../../assets/global/Heart.svg";
import { Link, useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../../firebase.config";
// import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  // const [user, setuser] = useState({});

  // onAuthStateChanged(auth, (currentuser) => {
  //   setuser(currentuser);
  // });

  return (
    <>
      <div className="flex items-center justify-between  h-[100px] px-[34px] w-full  shadow-sm">
        <img src={logo} alt="logo" />
        <div className="flex  justify-between items-center w-[430px] h-auto py-[4px] ">
          <Link
            className="text-[16px] text-[#000] font-[500] hover:text-[#B88E2F]"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-[16px] text-[#000] font-[500] hover:text-[#B88E2F]"
            to="/services"
          >
            Service
          </Link>
          <Link
            className="text-[16px] text-[#000] font-[500] hover:text-[#B88E2F]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-[16px] text-[#000] font-[500] hover:text-[#B88E2F]"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        {/* icons */}
        <div className="flex items-center justify-between w-[250px] py-[4px]">
          {/* <AccountCircleIcon /> */}
          {/* <div className="flex flex-col w-[100px] h-[100px] "> */}
          <img
            className="w-[28px] h-[28px] hover:cursor-pointer"
            src={contact}
            alt="contact-icon"
            onClick={() => navigate("/signup")}
          />
          {/* <div className="flex flex-col gap-[4px] rounded-md border-[2px]">
              <div>Loged in as: {user?.email}</div>
              <button className="p-[8px] border-[2px] hover:bg-slate-200">
                Logout
              </button>
            </div> */}
          {/* </div> */}
          <img className="w-[28px] h-[28px] " src={search} alt="search-icon" />
          <img className="w-[28px] h-[28px] " src={heart} alt="heart-icon" />
          <img
            className="w-[28px] h-[28px] hover:cursor-pointer "
            src={cart}
            alt="cart-icon"
            onClick={() => navigate("/cart")}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
