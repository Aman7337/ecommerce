import React from "react";
import ReviewCard from "./ReviewCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Carousal3 from "../Carousal/Carrousal3";

const CustomerReview = () => {
  return (
    <section className="max-w-[1300px] mb-[5em] mx-auto">
      <p className="text-[40px] font-extrabold mx-5 text-center">
        OUR HAPPY CUSTOMERS
      </p>

      <div className="mt-[60px]">
        <Carousal3 />
      </div>
    </section>
  );
};

export default CustomerReview;
