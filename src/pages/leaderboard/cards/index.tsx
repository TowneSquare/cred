import LowerUsers from "./lowerUsers";
import GetMore from "./getMore";
import Slider from "react-slick";
import "./index.css";

const Cards = () => {
  const settings = {
    infinite: false,
    slidesToShow: 1.4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };
  return (
    <>
      <div className="hidden md:flex mt-16 w-full gap-6 justify-between items-center">
        <LowerUsers />
        <GetMore />
      </div>
      <div className="leaderboard md:hidden mt-16 w-full">
        <Slider {...settings}>
          <LowerUsers />
          <GetMore />
        </Slider>
      </div>
    </>
  );
};

export default Cards;
