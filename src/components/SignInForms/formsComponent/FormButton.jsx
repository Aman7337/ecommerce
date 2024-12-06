import React from "react";

const FormButton = ({ formBtn }) => {
  return (
    <button
      type="submit"
      className="bg-black hover:border-[0.5px] hover:transition-property: color  hover:border-black hover:text-black hover:bg-white  text-white h-[48px] w-full mt-[10px]"
    >
      {formBtn}
    </button>
  );
};

export default FormButton;
