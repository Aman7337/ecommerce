import React, { createContext, useContext, useEffect, useState } from "react";

const MyStore = createContext();

export const Store = ({ children }) => {
  const [apiProductsData, setApiProductsData] = useState([]);

  const getProductData = async () => {
    try {
      fetch("https://e-commerce-server-zeta-beryl.vercel.app/api/products")
        .then((res) => res.json())
        .then((result) => setApiProductsData(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(
        `The error occured in the Carousal2 in Carousal Component ${error.message}`
      );
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <MyStore.Provider value={{ apiProductsData }}>{children}</MyStore.Provider>
  );
};

export const useStoreContext = () => useContext(MyStore);
