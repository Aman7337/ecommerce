import React from "react";

const FormInput = ({ type, id, placeholder, handleChange, value }) => {
  return (
    <input
      type={type}
      onChange={handleChange}
      name={id}
      value={value}
      id={id}
      placeholder={placeholder}
      // required={true}
      className="border-[1px] outline-none hover:border-[1.3px] hover:border-black  placeholder-black pl-[10px] font-thin border-[#9c9c9c] mt-[10px] w-full h-[42px] my-[10px]"
    />
  );
};

export default FormInput;
