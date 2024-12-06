import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Catagories from "../pages/Catagories";
import LoGIN from "../pages/LogIN";
import RegisterPage from "../pages/RegisterPage";
import RecoverPassword from "../pages/RecoverPassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catagory" element={<Catagories />} />
        <Route path="/login" element={<LoGIN />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<RecoverPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
