import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../customer-review/ReviewCard";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#b3b3b3",
        borderRadius: "32px",
        border: "1px solid #b3b3b3",
        width: "22px",
        height: "21px",
        marginTop: "1px",
        paddingTop: "1.237px",
      }}
      onClick={onClick}
    />
  );
}

const Carousal3 = () => {
  const [reviewData, setReviewData] = useState([]);

  const getReviewData = async () => {
    try {
      fetch("https://e-commerce-server-zeta-beryl.vercel.app/api/products")
        .then((response) => response.json())
        .then((result) => setReviewData(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(`Error occur at the Carousal3 in CustomerReview section. `);
    }
  };

  useEffect(() => {
    getReviewData();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  return (
    reviewData?.length > 0 && (
      <div className="max-w-[1300px] mx-auto px-[30px] ">
        <Slider {...settings}>
          {reviewData.map((item, key) => {
            return (
              <ReviewCard
                name={item.name}
                comment={item.text}
                date={item.date}
                key={key}
                className="  border-[1px] ml-[12px] border-[grey] w-[95%] h-[15em]  rounded-3xl p-[30px]"
              />
            );
          })}
        </Slider>
      </div>
    )
  );
};

export default Carousal3;
