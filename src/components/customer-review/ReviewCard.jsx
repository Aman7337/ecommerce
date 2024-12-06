import React from "react";
import { GoStar } from "react-icons/go";

const ReviewCard = ({ name, comment, date, className }) => {
  return (
    <div className={className}>
      <div className="flex gap-2 mb-[10px]">
        <GoStar />
        <GoStar />
        <GoStar />
        <GoStar />
        <GoStar />
      </div>
      <p className="text-xl font-bold mb-[5px] ">{name}</p>
      <p className="mb-[10px] text-[#765c5c]">{comment}</p>
      <p className="text-[#765c5c] font-bold">{date}</p>
    </div>
  );
};

export default ReviewCard;
