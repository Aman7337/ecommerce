import React, { useEffect, useState } from "react";
import MainLists from "./MainLists";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [bannerData, setBannerData] = useState(null);

  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate("/catagory");
  };

  const getBannerApi = async () => {
    try {
      fetch("https://e-commerce-server-zeta-beryl.vercel.app/")
        .then((response) => response.json())
        .then((result) => setBannerData(result[0]))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(`this error occured in main component ${error.message}`);
    }
  };

  useEffect(() => {
    getBannerApi();
  }, []);

  return (
    <div className="flex justify-center bg-[#f2f0f1]">
      <section className="lg:flex justify-between  max-w-[1300px] px-[10px]">
        <div className="  xl:w-[50%] lg:w-[40%] justify-center py-[5em] md:mt-[2em] flex-col items-center ">
          <div className="">
            <p className="lg:text-[3em] text-[2.7em] font-extrabold leading-[50px] ">
              {/* FIND CLOTHES THAT MATCHES YOUR STYLE */}
              {bannerData?.title} {/* bannerData ? bannerdata.title : null */}
            </p>
            <p className=" mt-2 text-lg">
              {bannerData?.text}
              {/* Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style. */}
            </p>
            <button
              className="bg-black text-white rounded-[40px] w-full py-[14px] mt-[30px]"
              onClick={handleShopNow}
            >
              {bannerData?.btnText}
            </button>
          </div>
          <div className="flex flex-wrap justify-center md:gap-[40px] gap-[10px] text-lg ">
            <MainLists number="200+" text="International Brands" />
            <MainLists number="2,000+" text="High-Quality Products" />
            <MainLists number="30,000+" text="Happy-Customers" />
          </div>
        </div>
        <div className=" sm:flex md:mt-[3em]  sm:justify-center ">
          {/* <img src="src/assets/img/Rectangle 2.png" alt="logo" /> */}
          <img src={bannerData?.image} alt={bannerData?.title} className=" " />
        </div>
      </section>
    </div>
  );
};

export default Main;
