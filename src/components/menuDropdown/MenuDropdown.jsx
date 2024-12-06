import React from "react";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const MenuDropdown = ({ icon, onclick }) => {
  return (
    <div className=" flex flex-col pl-[10px] md:pl-[25px] h-[full] dropdownPofile">
      {icon}
      <ul className="flex flex-col gap-4">
        <IoSearch
          className=" mt-[1px] sm:text-slate-400 md:text-lg text-2xl flex md:hidden"
          onClick={onclick}
        />
        <CgProfile className="text-2xl flex md:hidden" />
      </ul>
    </div>
  );
};

export default MenuDropdown;
