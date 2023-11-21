import Apt from "./apt";
import LiquidSwap from "./liquidSwap";
import LongestNft from "./nft";
import Slider from "react-slick";
import "./index.css";

const Cards = () => {
  const settings = {
    infinite: false,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
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
        breakpoint: 330,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0.5,
        },
      },
    ],
  };
  return (
    <>
      <div className="hidden px-4 md:flex mt-16 w-full gap-2 items-center justify-between">
        <LiquidSwap />
        <Apt />
        <LongestNft />
      </div>
      <div className="md:hidden mt-16 w-full">
        <Slider {...settings}>
          <LiquidSwap />
          <Apt />
          <LongestNft />
        </Slider>
      </div>
    </>
  );
};

export default Cards;
