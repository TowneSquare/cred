import Header from "../../components/header";
import PrivacyPolicy from "../../components/privacyPolicy";
import Banner from "./banner";
import Cards from "./cards";
import LiquidSwapHistory from "./liquidswapHistory";
import MyTotal from "./myTotal";
import NftBoard from "./nftBoard";
import "./index.css";

const CredPoints = () => {
  return (
    <div className="parallax">
      <Header />
      <div className="parallax__group">
        <div className="parallax__layer cred__effect1">
          <img src="/credpoints/effect1.png" alt="effect1" />
        </div>
        <div className="parallax__layer cred__effect2">
          <img src="/credpoints/effect2.png" alt="effect2" />
        </div>
        <div className="parallax__layer cred__effect3">
          <img src="/credpoints/effect3.png" alt="effect3" />
        </div>
      </div>
      <div className="relative w-full flex justify-center z-10 !bg-fixed">
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
