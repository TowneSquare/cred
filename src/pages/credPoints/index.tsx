import Header from "../../components/header";
import PrivacyPolicy from "../../components/privacyPolicy";
import Banner from "./banner";
import Cards from "./cards";
import LiquidSwapHistory from "./liquidswapHistory";
import MyTotal from "./myTotal";
import NftBoard from "./nftBoard";

const CredPoints = () => {
  return (
    <div>
      <Header />
      <div
        className="relative w-full flex justify-center z-10 !bg-fixed"
        style={{
          background: "url(/credpoints/bg.png)",
        }}
      >
        <div className="w-full md:w-[1000px] px-4 md:px-0 flex flex-col items-center mt-20 mb-10">
          <MyTotal />
          <Cards />
          <LiquidSwapHistory />
          <NftBoard />
          <Banner />
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  );
};

export default CredPoints;
