import React from "react";
import UpperNav from "../components/header/UpperNAv";
import Register from "../components/SignInForms/Register";
import Header from "../components/header/Header";

const RegisterPage = () => {
  return (
    <>
      <UpperNav />
      <Header />
      <hr />
      <Register />
    </>
  );
};

export default RegisterPage;
