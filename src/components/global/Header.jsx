import React from "react";
import logo from "../../assets/global/Logo.svg";
import search from "../../assets/global/SearchIcon.svg";
import contact from "../../assets/global/ContactIcon.svg";
import heart from "../../assets/global/HeartIcon.svg";
import cart from "../../assets/global/CartIcon.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-[100px] px-[34px] ">
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
          <img className="w-[28px] h-[28px]" src={contact} alt="contact-icon" />
          <img className="w-[28px] h-[28px] " src={search} alt="search-icon" />
          <img className="w-[28px] h-[28px] " src={heart} alt="heart-icon" />
          <img className="w-[28px] h-[28px] " src={cart} alt="cart-icon" />
        </div>
      </div>
    </>
  );
};

export default Header;
