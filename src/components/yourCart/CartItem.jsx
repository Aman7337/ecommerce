import React, { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CartItem = ({ name, size, color, price, img }) => {
  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate("/details/qwertyu");
  };

  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  return (
    <div className="flex flex-row gap-4  max-w-[800px] m-[20px]  sm:h-[150px] mt-[2px]  ">
      <img
        src={img}
        alt={name}
        className="sm:w-[160px] w-[120px] h-[120px] sm:h-[140px] cursor-pointer"
        onClick={handleProductDetails}
      />
      <div className="flex-col mt-[10px] w-full">
        <div className="flex flex-wrap justify-between items-center">
          <p className="font-bold text-sm sm:text-lg w-[100px] sm:w-auto sm:mb-[5px]">
            {name}
          </p>
          <button className="sm:text-xl ">
            <RiDeleteBinFill className="text-red-600" />
          </button>
        </div>
        <p className="text-xs sm:text-base sm:mb-[3px]">
          <b className="font-medium text-xs sm:text-base">Size: </b>
          {size}
        </p>
        <p className="text-xs sm:text-base sm:mb-[3px]">
          <b className="font-medium text-xs sm:text-base ">Color: </b>
          {color}
        </p>
        <div className="flex flex-wrap justify-between items-center sm:mt-[5px]">
          <p className="font-bold text-2xl">${price}</p>
          <div className="flex items-center gap-1 w-[60px] sm:w-auto   bg-gray-200 rounded-full">
            <button
              onClick={decreaseCount}
              className="w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
            >
              -
            </button>
            <p className="text-sm">{count}</p>
            <button
              onClick={increaseCount}
              className="w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
