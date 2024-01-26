import BridgeShowcase from "../../../../components/defi/bridgeShowcase";
import GlobalLink from "../../../../components/defi/globalLink";
import TwitterLink from "../../../../components/defi/twitterLink";

interface Props {
  data?: any;
}

const Lending: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="grid h-[129px] border-b-[1px] border-[#626262]">
        <div className="flex justify-between md:mt-4 h-8 items-center">
          <div className="flex">
            <img
              src="/credpoints/defi/aries.svg"
              className="w-6 h-6"
            />
            <p className="text-4 font-semibold ml-2">Aries Market</p>
          </div>
          <div className="flex">
            <TwitterLink link="https://twitter.com/AriesMarkets" />
            <GlobalLink link="https://ariesmarkets.xyz/" />
          </div>
        </div>
        <div className="grid h-[49px]">
          <div className="flex justify-start">
            <BridgeShowcase
              Item1={{ imgUrl: "/credpoints/token_icons/usdc.svg", text: "USDC" }}
              Item2={{ imgUrl: "/credpoints/aptos.svg", text: "APT" }}
            />
          </div>
          <p className="text-[12px] text-[#B9B9B9] mt-2">Supported bridges for <b>USDC</b>: LayerZero</p>
        </div>
      </div>
    </div>
  );
};

export default Lending;
