import React from "react";
import { GoStar } from "react-icons/go";

const TshirtsDetailsData = ({ price, details, className, color }) => {
  return (
    <div>
      <div className="flex gap-2 mb-[10px]">
        <GoStar />
        <GoStar />
        <GoStar />
        <GoStar />
        <GoStar />
      </div>
      <div>
        <p className={className}>${price}</p>
        <p className={color}>{details}</p>
      </div>
    </div>
  );
};

export default TshirtsDetailsData;
