import Apt from "./apt";
import LiquidSwap from "./liquidSwap";
import LongestNft from "./nft";
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
      <div className="hidden px-4 md:flex mt-16 w-full gap-2 items-center justify-between">
        <LiquidSwap />
        <Apt />
        <LongestNft />
      </div>
      <div className="credpoints md:hidden mt-16 w-full">
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
