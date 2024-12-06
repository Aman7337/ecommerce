import React from "react";
import { GoStar } from "react-icons/go";
import { Navigate, useNavigate } from "react-router-dom";

const Tshirts = ({ img1, type, price, className, image, id }) => {
  const navigate = useNavigate();

  const hanldleProductDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className={className} onClick={() => hanldleProductDetails(id)}>
      <img src={img1} alt="logo" className="h-[280px]" />
      <p className="font-semibold ml-[10px] mt-[8px]">{type}</p>
      <div className="flex mt-[8px] ml-[10px] gap-[3px]">
        <GoStar />
        <GoStar />
        <GoStar />
        <GoStar />
        <GoStar />
      </div>
      <p className="ml-[10px] mt-[8px] text-2xl font-bold">{price}</p>
    </div>
  );
};

export default Tshirts;
