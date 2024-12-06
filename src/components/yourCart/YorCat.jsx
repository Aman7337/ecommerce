import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const YorCat = () => {
  return (
    <div className=" max-w-[1300px] px-[20px] mx-auto mb-[80px]">
      <div className=" mt-[40px] mb-[30px] ">
        <p className="text-[2.8rem]  font-extrabold ">YOUR CART</p>
      </div>
      <div className="flex flex-wrap gap-[20px] justify-center mt-[40px] mb-[30px] ">
        <div className="flex-col flex p-[px] border-[2px] border-[#b2b2b2] pt-[30px] rounded-2xl mb-[40px] lg:w-[60%] w-[100%]  ">
          <CartItem
            img="src/assets/img/Frame 60.png"
            name="Gradient Graphic T-shirt"
            size="Large"
            color="White"
            price="140"
          />

          <CartItem
            img="src/assets/img/Frame 60.png"
            name="Gradient Graphic T-shirt"
            size="Large"
            color="White"
            price="140"
          />
          <CartItem
            img="src/assets/img/Frame 60.png"
            name="Gradient Graphic T-shirt"
            size="Large"
            color="White"
            price="140"
          />
        </div>
        <div className="border-[2px] border-[#b2b2b2] rounded-2xl h-[30rem]  mb-[40px] lg:w-[35%] w-[100%]  p-[20px]">
          <p className="font-bold text-xl mb-[30px]">Order Summary</p>
          <OrderSummary
            className="font-bold text-xl"
            text="text-[#765c5c]"
            title="Subtotal"
            price="$565"
          />
          <OrderSummary
            className="text-red-600 font-bold text-xl "
            title="Discount (-20%)"
            text="text-[#765c5c]"
            price="-$113"
          />
          <OrderSummary
            className="font-bold text-xl mb-[10px]"
            title="Delivery Free"
            text="text-[#765c5c]"
            price="$15"
          />
          <div className="bg-[#e6e6e6] h-[1px]"> </div>
          <div className=" mt-[40px]">
            <OrderSummary
              text="text-xl font-bold"
              className="font-bold text-2xl"
              title="Total"
              price="$467"
            />
          </div>

          <div className="flex  justify-between gap-2 w-full">
            <input
              type="text"
              placeholder="Add promo code"
              className="bg-[#f0f0f0] rounded-xl px-[10px] text-sm w-60% lg:py-[7px] py-[5px] lg:text-base sm:rounded-3xl sm:px-[30px]"
            />
            <button className="bg-black text-white w-[150px] px-[15px] xl:px-[35px] xl:py-[10px] py-[5px] rounded-3xl w-35%">
              Apply
            </button>
          </div>

          <button className="bg-black text-white w-full py-[7px] sm:py-[14px] mt-[30px] rounded-3xl flex items-center justify-center gap-3 my-[20px]">
            Go to Checkout
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default YorCat;
