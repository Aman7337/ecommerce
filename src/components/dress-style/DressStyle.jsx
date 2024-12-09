import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DressStyle = () => {
  const navigate = useNavigate();

  const viewAllNavigate = () => {
    navigate("/catagory?type=''");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [styleData, setStyleData] = useState([]);
  const getStyleApiData = async () => {
    try {
      fetch("https://e-commerce-server-zeta-beryl.vercel.app/api/styles")
        .then((response) => response.json())
        .then((result) => setStyleData(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(`The error occur at the main component ${error.message}`);
    }
  };

  useEffect(() => {
    getStyleApiData();
  }, []);

  return (
    <div className="pb-[5em] bg-[#f0f0f0] py-[3em] px-[2em] sm:max-w-[1300px] rounded-3xl mb-[5em] mx-auto ">
      <p className="text-[40px] text-center font-extrabold">
        BROWSE BY DRESS STYLE
      </p>
      <div className="flex flex-wrap justify-between lg:px-[80px]">
        {styleData.map((item, key) => {
          return (
            <div
              className={` ${item.style}  sm:h-[18em] h-[14em] md:w-[25.6em] w-[full] mb-[50px] md:mb-[0px] rounded-3xl mt-[30px] `}
              onClick={viewAllNavigate}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              key={key}
            >
              <p className="text-3xl font-bold px-10 py-7">{item.style}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DressStyle;
