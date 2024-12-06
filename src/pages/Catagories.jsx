import React, { useEffect } from "react";
import Header from "../components/header/Header";
import UpperNav from "../components/header/UpperNAv";
import Casual from "../components/casual/Casual";
import Footer from "../components/footer/Footer";

const Catagories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <UpperNav />
      <Header />
      <Casual />
      <Footer />
    </>
  );
};

export default Catagories;
