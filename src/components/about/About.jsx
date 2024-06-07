import React from "react";
import PageType from "../global/PageType";
import AboutContent from "./AboutContent";
import img from "../../assets/global/HeroImage.png";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full gap-[118px] mb-[100px]">
      <PageType page="About Us" />
      <AboutContent
        head="Welcome to Hoarding Space!"
        text="Subheading for description or instructions"
        body="Body text for your whole article or post. We’ll put in some lorem
      ipsum to show how a filled-out page might look: Excepteur efficient
      emerging, minim veniam anim aute carefully curated Ginza conversation
      exquisite perfect nostrud nisi intricate Content. Qui international
      first-class nulla ut. Punctual adipisicing, lovely queen tempor
      eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute
      quality of life soft power pariatur Melbourne occaecat discerning. Qui
      wardrobe aliquip, et Porter destination Toto remarkable officia
      Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
      />

      {/*  */}
      <div className="flex w-full justify-between px-[144px]">
        <img className="w-[400px] h-[300px]" src={img} alt="img" />
        <div className="flex flex-col gap-[16px] max-w-[625px]">
          <div className="text-[40px] text-[#3A3A3A] font-bold w-full text-center">
            Our Vision
          </div>
          <div className="text-[16px] text-[#828282] font-[400] w-full text-center">
            Subheading for description or instructions
          </div>
          <div className="text-[16px] text-[#616161] font-[400]">
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look: Excepteur efficient
            emerging, minim veniam anim aute carefully curated Ginza
            conversation exquisite perfect nostrud nisi intricate Content. Qui
            international first-class nulla ut. Punctual adipisicing, lovely
            queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian
            impeccable aute quality of life soft power pariatur Melbourne
            occaecat discerning. Qui wardrobe aliquip, et Porter destination
            Toto remarkable officia Helsinki excepteur Basset hound. Zürich
            sleepy perfect consectetur.
          </div>
        </div>
        {/* <img src={img} alt="img" /> */}
      </div>

      {/*  */}
      <AboutContent
        head="Our Values"
        text="Subheading for description or instructions"
        body="Body text for your whole article or post. We’ll put in some lorem
      ipsum to show how a filled-out page might look: Excepteur efficient
      emerging, minim veniam anim aute carefully curated Ginza conversation
      exquisite perfect nostrud nisi intricate Content. Qui international
      first-class nulla ut. Punctual adipisicing, lovely queen tempor
      eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute
      quality of life soft power pariatur Melbourne occaecat discerning. Qui
      wardrobe aliquip, et Porter destination Toto remarkable officia
      Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
      />
    </div>
  );
};

export default About;
