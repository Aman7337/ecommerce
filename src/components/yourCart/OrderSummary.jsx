import React from "react";

const OrderSummary = ({ title, price, className, text }) => {
  return (
    <div className="flex justify-between mb-[20px]">
      <p className={text}>{title}</p>
      <p className={className}>{price}</p>
    </div>
  );
};

export default OrderSummary;
