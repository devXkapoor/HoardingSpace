import React from "react";
import PageType from "../global/PageType";
import AboutContent from "./AboutContent";
import img from "../../assets/global/HeroImage.png";
import values from "../../assets/about/values.webp";
import goal from "../../assets/about/goal.webp";
import vision from "../../assets/about/vision.webp";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full gap-[118px] mb-[100px]">
      <PageType page="About Us" />
      <AboutContent
        head="Welcome to Apna Hoarding!"
        // text="Subheading for description or instructions"
        body="Our vision is to make apnahoarding.com is India's largest and most trusted outdoor advertising marketplace, bringing advertisers, media owners, and agencies together on a single platform.

Our mission is to provide our customers with the best outdoor advertising solutions that help grow their businesses.

"
        img={goal}
      />

      {/*  */}
      <div className="flex w-full justify-between px-[144px]">
        <img
          className="w-[420px] h-[280px] rounded-xl"
          src={values}
          alt="img"
        />
        <div className="flex flex-col gap-[16px] max-w-[625px]">
          <div className="text-[40px] text-[#3A3A3A] font-bold w-full text-center">
            Our Vision
          </div>
          {/* <div className="text-[16px] text-[#828282] font-[400] w-full text-center">
            Subheading for description or instructions
          </div> */}
          <div className="text-[16px] text-[#616161] font-[400] text-center">
            Our goal is to become India's largest outdoor advertising
            marketplace by providing a single platform for advertisers, media
            owners, and agencies to rent outdoor advertising space, delivering
            the best solutions to our customers, and revolutionizing the
            industry through innovation and technology.
          </div>
        </div>
        {/* <img src={img} alt="img" /> */}
      </div>

      {/*  */}
      <AboutContent
        head="Our Values"
        // text="Subheading for description or instructions"
        body="
Our values are deeply rooted in ensuring exceptional customer satisfaction, embracing innovation and technology to drive progress, fostering transparency and trust in every interaction, and promoting teamwork and collaboration to achieve shared success."
        img={vision}
      />
    </div>
  );
};

export default About;
