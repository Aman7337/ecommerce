import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Comments = () => {
  const [getApi, setGetApi] = useState([]);

  const getReviewApi = async () => {
    try {
      fetch("http://localhost:3000/api/reviews")
        .then((response) => response.json())
        .then((result) => setGetApi(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(`error occur at AllRevies ${error.message}`);
    }
  };

  useEffect(() => {
    getReviewApi();
  }, []);

  return (
    <div className=" mb-[50px] mt-[40px]">
      <div className="flex flex-wrap    justify-center  gap-[20px] ">
        {getApi.map((item, key) => {
          return (
            <ReviewCard
              className="border-[#bac3d9] border-[2px] px-[20px] pt-[20px] pb-[10px] rounded-2xl max-w-[600px] "
              name={item.name}
              date={item.Date}
              comment={item.text}
              key={key}
            />
          );
        })}
      </div>

      <button className="flex  px-[50px] py-[10px] border-[2px] border-[#bac3d9] mt-[50px] mx-auto rounded-3xl font-bold">
        Load More Reviews
      </button>
    </div>
  );
};

export default Comments;
