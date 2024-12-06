import React from "react";
import TypeOfCloths from "./TypeOfCloths";
import { RiArrowUpSLine } from "react-icons/ri";
import PriceRange from "./PriceRange";
import Colors from "./Colors";
import Sizes from "./Sizes";

const Filter = ({ className }) => {
  return (
    <div className={className}>
      <div className="w-[300px] p-[20px] ">
        <div className="flex justify-between">
          <p className="font-bold text-2xl">Filters</p>
        </div>

        <div className="mt-[2.7rem]">
          <TypeOfCloths cloths="T-shirts" />
          <TypeOfCloths cloths="Shorts" />
          <TypeOfCloths cloths="Shirts" />
          <TypeOfCloths cloths="Hoddie" />
          <TypeOfCloths cloths="Jeans" />
        </div>
        <div className="mt-[2.7rem] flex justify-between items-center">
          <p className="text-lg font-bold">Price</p>
          <p className="cursor-pointer">
            {" "}
            <RiArrowUpSLine className="text-2xl" />
          </p>
        </div>
        <div className="flex justify-center">
          <PriceRange />
        </div>
        <div className="mt-[2.7rem] flex justify-between items-center">
          <p className="text-lg font-bold">Colors</p>
          <p className="cursor-pointer">
            {" "}
            <RiArrowUpSLine className="text-2xl" />
          </p>
        </div>
        <div className="mt-[1.8rem]">
          <Colors />
        </div>
        <div className="mt-[2.7rem] flex justify-between items-center">
          <p className="text-lg font-bold">Sizes</p>
          <p className="cursor-pointer">
            {" "}
            <RiArrowUpSLine className="text-2xl" />
          </p>
        </div>
        <div>
          <Sizes />
        </div>
        <div className="mt-[2.7rem] flex justify-between items-center">
          <p className="text-lg font-bold">Dress Style</p>
          <p className="cursor-pointer">
            {" "}
            <RiArrowUpSLine className="text-2xl" />
          </p>
        </div>
        <div className="mt-[1.2rem]">
          <TypeOfCloths cloths="Casual" />
          <TypeOfCloths cloths="Formal" />
          <TypeOfCloths cloths="Party" />
          <TypeOfCloths cloths="Gym" />
        </div>
        <div>
          <button className="bg-black text-white w-full py-[10px] rounded-3xl my-[10px]">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
