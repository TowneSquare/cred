import Apt from "./apt";
import LiquidSwap from "./liquidSwap";
import LongestNft from "./nft";

const Cards = () => {
  return (
    <div className="mt-16 w-full flex flex-col lg:flex-row gap-2 lg:gap-0 items-center lg:justify-between">
      <LiquidSwap />
      <Apt />
      <LongestNft />
    </div>
  )
}

export default Cards;