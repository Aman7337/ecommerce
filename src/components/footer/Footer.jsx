import React from "react";
import Subscribe from "./Subscribe";
import Logos from "./Logos";
import FooterFeatures from "./FooterFeatures";

const Footer = () => {
  return (
    <>
      <footer className=" bg-[#f0f0f0] ">
        <div className="max-w-[1300px] mx-auto   ">
          <Subscribe />
          <div className="sm:flex flex-row justify-center sm:justify-between mt-[5em] pb-[5em] m-auto px-[50px]">
            <div className=" w-[cover]">
              <p className="text-[30px] font-extrabold mb-[20px] mt-[4px] ">
                SHOP.CO
              </p>
              <p className=" text-[#71757e] mb-[20px] ">
                We have clothes that suits your style <br /> and which you’re
                proud to wear. <br /> From women to men.
              </p>
              <Logos />
            </div>

            <div className="lg:flex  mt-[20px] sm:mt-[0px] justify-between">
              <div className="flex">
                <FooterFeatures
                  heading="COMPANY"
                  item1="About"
                  item2="Features"
                  item3="Works"
                  item4="Carrer"
                />
                <FooterFeatures
                  heading="Help"
                  item1="Customer Support"
                  item2="Delivery Details"
                  item3="Terms & Conditions"
                  item4="Privacy Policy"
                />
              </div>

              <div className="flex">
                <FooterFeatures
                  heading="FAQ"
                  item1="Account"
                  item2="Manage Deleveries"
                  item3="Orders"
                  item4="Pyments"
                />
                <FooterFeatures
                  heading="Resources"
                  item1="Free eBooks"
                  item2="Devlepoment tutorials"
                  item3="How to-Blog"
                  item4="Youtube Playlist"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
