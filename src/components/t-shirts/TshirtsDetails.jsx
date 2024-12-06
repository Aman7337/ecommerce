import React, { useEffect, useState } from "react";
import TshirtsDetailsData from "./TshirtsDetailsData";
import Counter from "./Counter";
import { FaCheck } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const TshirtsDetails = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [apiData, setApiData] = useState();

  const [selectImageIndex, setSelectImageIndex] = useState(0);

  const parmas = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      try {
        fetch(`https://e-commerce-server-zeta-beryl.vercel.app/${parmas.id}`)
          .then((res) => res.json())
          .then((result) => setApiData(result))
          .catch((error) => console.error(error));
      } catch (error) {
        console.error(
          `The error occured in the Carousal2 in Carousal Component ${error.message}`
        );
      }
    })();
  }, [parmas.id]);

  console.log(apiData);

  const handleClick = (size) => {
    setSelectedSize(size);
  };

  const sizes = ["Small", "Medium", "Large", "Extra Large"];
  return (
    <div className="lg:flex max-w-[1300px] justify-between lg:ml-[126px]  mx-auto mt-[70px] px-[10px] mb-[50px]">
      <div className="sm:flex sm:flex-row flex flex-col-reverse lg:w-[48%] justify-center gap-[10px] mb-[20px] ">
        <div className="sm:flex-col flex  justify-evenly ">
          {apiData?.image?.map((item, index) => {
            return (
              <img
                className="mb-[24px] sm:w-[9.7em] w-[6em] mt-[10px] rounded-2xl border-[2px]  hover:border-slate-500 hover:border-[4px] cursor-pointer"
                src={item}
                alt="logo"
                onClick={() => setSelectImageIndex(index)}
              />
            );
          })}
        </div>
        <div className=" flex justify-center ">
          <img
            src={apiData?.image[selectImageIndex]}
            alt="logo"
            className="rounded-2xl w-[full] mt-[3px] border-[2px] "
          />
        </div>
      </div>
      <div className=" lg:w-[48%] max-w-[1300px] mx-auto">
        <p className="text-[30px] font-extrabold mb-[10px]">{apiData?.name}</p>
        <TshirtsDetailsData
          color={`text-grey mt-[20px] `}
          className="text-4xl font-bold mt-[10px]"
          price={apiData?.price}
          details={apiData?.text}
        />
        <div>
          <div className="max-w-full bg-[#cbcaca] h-[0.6px] mt-[10px] "> </div>
          <div className="mt-[10px]">
            <p>Select Colors</p>
          </div>

          <div className="flex gap-4 mt-[20px]">
            <div
              className={`bg-[#62402c] rounded-full w-[37px] h-[37px] cursor-pointer`}
            >
              <FaCheck className="text-white mx-[10px] my-[10px] text-lg" />
            </div>
            <div className="bg-[#314f4a] rounded-full w-[37px] h-[37px] cursor-pointer"></div>
            <div className="bg-[#462f47] rounded-full w-[37px] h-[37px] cursor-pointer"></div>
          </div>
        </div>

        <div className="max-w-full bg-[#cbcaca] h-[0.6px] mt-[10px] "> </div>

        <div className="mt-[30px]">
          <p>Choose size</p>
          <div className="flex justify-between max-w-[500px] mt-[20px]">
            {apiData?.size.map((size, index) => (
              <button
                key={index}
                className={`sm:px-[30px] sm:py-[10px] px-[5px] py-[6px] rounded-3xl ${
                  selectedSize === size ? "bg-black text-white" : "bg-[#F0F0F0]"
                }`}
                onClick={() => handleClick(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="max-w-full bg-[#cbcaca] h-[0.6px] mt-[10px] "> </div>
        </div>
        <div className="flex justify-between sm:w-[28rem] mt-[15px] ">
          <Counter />
          <button className="bg-black text-white sm:px-[100px] px-[20px] py-[12px] rounded-[42px] mt-[30px]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TshirtsDetails;
