import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import YorCat from "../components/yourCart/YorCat";
import Footer from "../components/footer/Footer";
import UpperNav from "../components/header/UpperNAv";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <UpperNav />
      <Header />
      <YorCat />
      <Footer />
    </>
  );
};

export default Cart;
