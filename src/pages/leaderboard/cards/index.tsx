import LowerUsers from "./lowerUsers";
import GetMore from "./getMore";
import Slider from "react-slick";
import "./index.css";

const Cards = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0.5,
        },
      },
    ],
  };
  return (
    <>
      <div className="hidden md:flex mt-16 w-full gap-6 justify-center items-center">
        <LowerUsers />
        <GetMore />
      </div>
      <div className="md:hidden mt-16 w-full">
        <Slider {...settings}>
          <LowerUsers />
          <GetMore />
        </Slider>
      </div>
    </>
  );
};

export default Cards;
