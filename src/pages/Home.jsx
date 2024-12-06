import React, { useEffect, useState } from "react";
import UpperNav from "../components/header/UpperNAv";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Brands from "../components/brands/Brands";
import NewArrivals from "../components/newArrivals/NewArrivals";
import TopSellers from "../components/topSellers/TopSellers";
import DressStyle from "../components/dress-style/DressStyle";
import CustomerReview from "../components/customer-review/CustomerReview";
import Footer from "../components/footer/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <UpperNav />
      <Header />
      <Main />
      <Brands />
      <NewArrivals />
      <TopSellers />
      <DressStyle />
      <CustomerReview />
      <Footer />
    </>
  );
};

export default Home;
