import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  return (
    <div className="flex mt-[30px] justify-between items-center gap-4 sm:px-[20px] px-[2px] pb-[3px] bg-[#F0F0F0] sm:max-w-[150px] rounded-[32px]">
      <div
        onClick={decreaseCount}
        className="flex items-center justify-center w-12 h-12 text-3xl cursor-pointer "
      >
        -
      </div>
      <p className="text-xl">{count}</p>
      <div
        onClick={increaseCount}
        className="flex items-center justify-center w-12 h-12 text-3xl cursor-pointer"
      >
        +
      </div>
    </div>
  );
};

export default Counter;
