import React from "react";
import FooterItems from "./FooterItems";
import location from "../../assets/global/LocationIcon.svg";
import email from "../../assets/global/Emailicon.svg";
import call from "../../assets/global/Callicon.svg";
import facebook from "../../assets/Facebook.svg";
import youtube from "../../assets/YouTube.svg";
import twitter from "../../assets/Twitter.svg";
import linkdin from "../../assets/LinkedIn.svg";
import instagram from "../../assets/Instagram.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col  w-full px-[84px]  mt-[60px]">
        <div className="h-[1px] w-full bg-[#D9D9D9] my-[16px]" />
        <div className="flex justify-between w-full px-12 ">
          <div className="flex flex-col items-start gap-[14px]">
            <div className="text-[24px] text-[#000] font-[700] mb-4">
              Quick Links
            </div>
            <div
              className="text-[16px] text-[#000] font-[400] hover:underline cursor-pointer"
              onClick={() => {
                navigate("/about");
                window.scrollTo(0, 0);
              }}
            >
              About Us
            </div>
            <div
              className="text-[16px] text-[#000] font-[400] hover:underline cursor-pointer"
              onClick={() => {
                navigate("/services");
                window.scrollTo(0, 0);
              }}
            >
              Services
            </div>

            <div
              className="text-[16px] text-[#000] font-[400] hover:underline cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
            </div>
            {/* <div className="text-[16px] text-[#000] font-[400]">{props.fourth}</div>
      <div className="text-[16px] text-[#000] font-[400]">{props.fifth}</div> */}
          </div>

          <div className="flex flex-col items-start gap-[14px]">
            <div className="text-[24px] text-[#000] font-[700] mb-4">
              Quick Links
            </div>
            <div
              className="text-[16px] text-[#000] font-[400] hover:underline cursor-pointer"
              onClick={() => {
                navigate("/privacy-policy");
                window.scrollTo(0, 0);
              }}
            >
              Privacy policy
            </div>
            <div
              className="text-[16px] text-[#000] font-[400] hover:underline cursor-pointer"
              onClick={() => {
                navigate("/refund-policy");
                window.scrollTo(0, 0);
              }}
            >
              Refund policy
            </div>
            <div
              className="text-[16px] text-[#000] font-[400] hover:underline cursor-pointer"
              onClick={() => {
                navigate("/city");
                window.scrollTo(0, 0);
              }}
            >
              Explore more
            </div>
            {/* <div className="text-[16px] text-[#000] font-[400]">{props.fourth}</div>
      <div className="text-[16px] text-[#000] font-[400]">{props.fifth}</div> */}
          </div>
          {/* <FooterItems
            head="Quick Links"
            first="Login"
            second="About Us"
            third="Contact"
            fourth="Privacy policy"
            fifth="Refund policy"
          /> */}

          <div className="flex flex-col items-start justify-start gap-[20px] ">
            <div className="text-[24px] text-[#000] font-[700]">Reach Us</div>
            <div className="flex text-[16px] text-[#000] font-[500] gap-[6px]">
              <img src={location} alt="icon" />
              <div>Tilak Market 45015, Chota Bazar First Floor -7</div>
            </div>
            <div className="flex text-[16px] text-[#000] font-[500] gap-[6px]">
              <img src={email} alt="icon" />
              <div>alerts@apnahoarding.com</div>
            </div>
            <div className="flex text-[16px] text-[#000] font-[500] gap-[6px]">
              <img src={call} alt="icon" />
              <div>+91 7974552274</div>
            </div>
            <div className="flex text-[16px] text-[#000] font-[500] gap-[14px] my-4 cursor-pointer">
              <img src={facebook} alt="icon" />
              <img src={linkdin} alt="icon" />
              <img src={instagram} alt="icon" />
              <img src={twitter} alt="icon" />
              <img src={youtube} alt="icon" />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#D9D9D9] mt-[16px] " />
        <div className="text-[16px] text-[#000] font-[400] my-[20px]">
          2024 hoarding space All rights reverved
        </div>
      </div>
    </>
  );
};

export default Footer;
