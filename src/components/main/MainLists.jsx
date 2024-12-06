import React from "react";

const MainLists = ({ number, text }) => {
  return (
    <div className="mt-[20px]">
      <p className=" text-3xl font-semibold ">{number}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default MainLists;
