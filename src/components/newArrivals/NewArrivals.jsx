import React from "react";

import Carousal2 from "../Carousal/Carousal2";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const navigate = useNavigate();

  const viewAllNavigate = () => {
    navigate("/catagory");
  };
  return (
    <section className="mt-[3em] mb-[50px]  justify-center ">
      <div className=" px-[20px]">
        <p className="text-[2.4em] font-extrabold text-center">New Arrival</p>
        <Carousal2 />
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

export default NewArrivals;
