import React from "react";
import { FaAngleRight } from "react-icons/fa6";
const TypeOfCloths = ({ cloths }) => {
  return (
    <div className="flex items-center justify-between mb-[1rem]">
      <p>{cloths}</p>
      <p>
        <FaAngleRight />
      </p>
    </div>
  );
};

export default TypeOfCloths;
