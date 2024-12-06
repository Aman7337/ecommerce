import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useStoreContext } from "../../context/Store";

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

const YouMghtLikeCarousal = () => {
  const { apiProductsData } = useStoreContext();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
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
          initialSlide: 2,
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
    apiProductsData.length > 0 && (
      <div className="max-w-[1350px] px-[20px] sm:px-[20px] mx-auto  mt-[40px]">
        <Slider {...settings}>
          {apiProductsData.map((item, key) => {
            return (
              key < 5 && (
                <Card
                  img1={item.image[0]}
                  type={item.name}
                  price={`Rs:${item.price}`}
                  key={key}
                  id={item._id}
                />
              )
            );
          })}

          {/* <Card
            img1="src/assets/img/Frame 38.png"
            type="SLEEVE STRIPED T-SHIRT"
            price="$145"
          />
          <Card
            img1="src/assets/img/Frame 34 (1).png"
            type="Polo with Tipping Details"
            price="$80"
          />
          <Card
            img1="src/assets/img/Frame 38 (1).png"
            type="Black Striped T-shirt"
            price="$210"
          /> */}
        </Slider>
      </div>
    )
  );
};

export default YouMghtLikeCarousal;
