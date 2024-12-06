import React from "react";

const UpperNav = () => {
  return (
    <div className="bg-black text-white  flex justify-center items-center gap-1 py-[10px]">
      <p className="text-[12px] md:text-[14px]">
        Sign up and get 20% off to your first order.
      </p>
      <u>
        {" "}
        <p className="text-[12px] md:text-[14px]  ">Sign Up Now</p>{" "}
      </u>
    </div>
  );
};

export default UpperNav;
