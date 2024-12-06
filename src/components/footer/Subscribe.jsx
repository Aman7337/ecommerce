import React from "react";
import { TfiEmail } from "react-icons/tfi";

const Subscribe = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between max-w-[1300px] mx-4 lg:mx-10 bg-black p-6 lg:p-10 text-white rounded-[24px] mt-10 lg:mt-[-50px]">
      <div className="lg:w-[40%] w-full mb-4 lg:mb-0">
        <p className="text-[24px] sm:text-[34px] font-extrabold">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </p>
      </div>
      <div className="lg:w-[50%] w-full">
        <div className="bg-white py-2 rounded-[28px] px-4 flex items-center gap-4">
          <TfiEmail className="text-[#9ca3b7] text-xl" />
          <input
            type="text"
            placeholder="Enter your email address"
            className="border-none text-black flex-1 py-[2.4px] outline-none"
          />
        </div>
        <button className="text-black bg-white w-full mt-4 py-2 rounded-[28px] text-lg font-semibold">
          Subscribe to Newsletter
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
