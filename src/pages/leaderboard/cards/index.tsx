import LowerUsers from "./lowerUsers";
import GetMore from "./getMore";
import Slider from "react-slick";
import "./index.css";

const Cards = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="hidden md:flex mt-16 w-full gap-2 items-center justify-between">
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
