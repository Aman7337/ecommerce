import React from "react";

const FormContainer = ({ children, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="w-[400px]   text-center mx-auto mt-[100px]">
      {children}
    </form>
  );
};

export default FormContainer;
