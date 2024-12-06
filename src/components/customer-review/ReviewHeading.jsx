import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";

const ReviewHeading = () => {
  return (
    <div className="flex flex-wrap justify-between mb-[20px] px-[20px] lg:pr-[30px] items-center">
      <div className="mb-[30px] mt-[40px]">
        <p className="font-bold">All Reviews</p>
      </div>

      <div className="flex gap-4">
        <button className="bg-[#F0F0F0] px-[20px] py-[10px] rounded-3xl">
          <GiSettingsKnobs />
        </button>
        <button className="hidden sm:flex bg-[#F0F0F0] px-[20px] md:px-[15px] py-[7px] md:py-[10px] rounded-3xl">
          Latest
        </button>
        <button className="bg-black text-white md:py-[10px] py-[7px] md:px-[25px] px-[15px] rounded-3xl">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default ReviewHeading;
