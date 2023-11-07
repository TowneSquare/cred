import Header from "../../components/header";
import Cards from "./cards";
import LiquidSwapHistory from "./liquidswapHistory";
import MyTotal from "./myTotal";
import NftBoard from "./nftBoard";

const CredPoints = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-[1000px] flex flex-col items-center mt-20">
          <MyTotal />
          <Cards />
          <LiquidSwapHistory />
          <NftBoard />
        </div>
      </div>
    </div>
  );
};

export default CredPoints;
