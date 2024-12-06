import React, { useEffect } from "react";
import Header from "../components/header/Header";
import UpperNav from "../components/header/UpperNAv";
import TshirtsDetails from "../components/t-shirts/TshirtsDetails";
import AllReviews from "../components/customer-review/AllReviews";
import Footer from "../components/footer/Footer";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <UpperNav />
      <Header />
      <TshirtsDetails />
      <AllReviews />
      <Footer />
    </>
  );
};

export default ProductDetails;
