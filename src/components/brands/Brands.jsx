import React, { useEffect, useState } from "react";

const Brands = () => {
  const [brandLogoData, setBrandLogoData] = useState(null);

  const getBrandLogoApi = async () => {
    try {
      fetch("https://e-commerce-server-zeta-beryl.vercel.app/api/brands")
        .then((response) => response.json())
        .then((result) => setBrandLogoData(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(`This error occurs in Brands component ${error.message}`);
    }
  };

  useEffect(() => {
    getBrandLogoApi();
  }, []);

  return (
    <div className="bg-black">
      <div className="px-[10px] m-auto flex-wrap md:justify-between flex justify-center gap-6 py-[34px]  max-w-[1300px]">
        {brandLogoData?.map((item) => {
          return (
            <img
              className=" sm:w-[127px] sm:h-[30px] w-[100px] h-[20px] mb-[10px]"
              src={item.image}
              alt={item.name}
              key={item._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
