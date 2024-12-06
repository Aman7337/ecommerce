import React from "react";

const FormText = ({ formText, formHeading }) => {
  return (
    <>
      <p className="text-3xl mb-[30px] font-semibold ">{formHeading}</p>
      <p className="my-[20px]">{formText}</p>
    </>
  );
};

export default FormText;
