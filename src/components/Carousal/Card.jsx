import React from "react";
import Tshirts from "../t-shirts/Tshirts";
import { useNavigate, Navigate } from "react-router-dom";

const Card = ({ img1, type, price, id }) => {
  const navigate = useNavigate();
  const handleProductNavigate = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="px-[40px] cursor-pointer" onClick={()=>handleProductNavigate(id)}>
      <Tshirts img1={img1} type={type} price={price} id={id} />
    </div>
  );
};

export default Card;
