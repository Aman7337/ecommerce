import React from "react";

import Carousal from "../Carousal/Carousal";
import { useNavigate } from "react-router-dom";

const TopSellers = () => {
  const navigate = useNavigate();

  const viewAllNavigate = () => {
    navigate("/catagory");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="mt-[3em] mb-[50px] justify-center">
      <div className=" px-[20px]">
        <p className="text-[2.4em] font-extrabold text-center">Top Sellers</p>
        <Carousal />
        <div className="justify-center flex mt-[50px]">
          <button
            className="border-[1px] text-lg font-semibold  border-[#cecece] px-[80px] py-[10px] rounded-[24px] "
            onClick={viewAllNavigate}
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
