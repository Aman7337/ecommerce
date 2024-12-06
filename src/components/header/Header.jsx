import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cartNavigate = () => {
    navigate("/cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const LoginNavigate = () => {
    navigate("/login");
  };

  return (
    <header className="flex flex-col items-center header">
      <div className="flex max-w-[1300px] justify-between px-[10px] gap-2 sm:px-5 py-[24px]   items-center w-full ">
        <p
          className="text-4xl font-extrabold cursor-pointer"
          onClick={homeNavigate}
        >
          SHOP.CO
        </p>

        <div className=" sm:bg-[#F0F0F0] lg:pr-[20vw] md:pr-[7vw] sm:pr-[10px] pl-[20px] py-[8px] max-w-[38em] rounded-3xl flex items-center gap-[10px]">
          <div className="sm:flex hidden ">
            <IoSearch className=" mt-[1px] sm:text-slate-400 md:text-lg text-2xl " />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search for Products..."
              className=" sm:flex border-none bg-[#F0F0F0] hidden w-96 outline-none"
            />
          </div>
        </div>

        <div className="flex sm:gap-[2em] gap-[14px] mr-[0px] sm:ml-[0px] items-center pt-[6px]">
          <div className="sm:hidden ">
            <IoSearch className=" mt-[1px] sm:text-slate-400 md:text-lg text-2xl " />
          </div>
          <button>
            <LuShoppingCart
              className="text-2xl cursor-pointer"
              onClick={cartNavigate}
            />
          </button>
          <button className="sm:flex ">
            <CgProfile className="text-2xl" onClick={LoginNavigate} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
