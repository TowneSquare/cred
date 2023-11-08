import Header from "../../components/header";
import Banner from "./banner";
import Cards from "./cards";
import LiquidSwapHistory from "./liquidswapHistory";
import MyTotal from "./myTotal";
import NftBoard from "./nftBoard";

const CredPoints = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[1000px] px-4 md:px-0 flex flex-col items-center mt-20 mb-10">
          <MyTotal />
          <Cards />
          <LiquidSwapHistory />
          <NftBoard />
          <Banner />
          <p className="mt-20 text-gray-light-1 cursor-pointer">Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default CredPoints;
