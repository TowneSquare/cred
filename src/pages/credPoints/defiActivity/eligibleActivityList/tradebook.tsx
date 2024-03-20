import BridgeShowcase from "../../../../components/defi/bridgeShowcase";
import GlobalLink from "../../../../components/defi/globalLink";
import TwitterLink from "../../../../components/defi/twitterLink";

interface Props {
  data?: any;
}

const Tradebook: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col">
      {/* <div className="grid h-[129px] border-b-[1px] border-[#626262] mb-2">
        <div className="flex justify-between md:mt-4 h-8 items-center">
          <div className="flex">
            <img
              src="/credpoints/defi/swapgpt.svg"
              className="w-6 h-6"
            />
            <p className="text-4 font-semibold ml-2">Swap GPT</p>
          </div>
          <div className="flex">
            <TwitterLink link="https://twitter.com/SwapGPT" />
            <GlobalLink link="https://app.swapgpt.ai/trade" />
          </div>
        </div>
        <div className="grid h-[49px]">
          <div className="flex justify-start">
            <BridgeShowcase
              Item1={{ imgUrl: "/credpoints/aptos.svg", text: "APT" }}
              Item2={{ imgUrl: "/credpoints/token_icons/usdc.svg", text: "USDC" }}
            />
          </div>
          <p className="text-[12px] text-[#B9B9B9] mt-2">Supported bridges for <b>USDC</b>: LayerZero</p>
        </div>
      </div> */}

      <div className="grid h-[129px] border-b-[1px] border-[#626262] mb-2">
        <div className="flex justify-between md:mt-4 h-8 items-center">
          <div className="flex">
            <img
              src="/credpoints/defi/kana_labs.svg"
              className="w-6 h-6"
            />
            <p className="text-4 font-semibold ml-2">Kana Labs</p>
          </div>
          <div className="flex">
            <TwitterLink link="https://twitter.com/kanalabs" />
            <GlobalLink link="https://app.kanalabs.io" />
          </div>
        </div>
        <div className="grid h-[49px]">
          <div className="flex justify-start">
            <BridgeShowcase
              Item1={{ imgUrl: "/credpoints/aptos.svg", text: "APT" }}
              Item2={{ imgUrl: "/credpoints/defi/pancakeswap.svg", text: "CAKE" }}
            />
            <BridgeShowcase
              Item1={{ imgUrl: "/credpoints/aptos.svg", text: "APT" }}
              Item2={{ imgUrl: "/credpoints/token_icons/usdc.svg", text: "USDC" }}
            />
          </div>
          <p className="text-[12px] text-[#B9B9B9] mt-2">Supported bridges for <b>USDC</b>: LayerZero</p>
        </div>
      </div>

      <div className="grid h-[106px] border-b-[1px] border-[#626262]">
        <div className="flex justify-between md:mt-4 h-8 items-center">
          <div className="flex">
            <img
              src="/credpoints/defi/panora.svg"
              className="w-6 h-6"
            />
            <p className="text-4 font-semibold ml-2">SwapGPT</p>
          </div>
          <div className="flex">
            <TwitterLink link="https://twitter.com/PanoraExchange" />
            <GlobalLink link="https://panora.exchange/" />
          </div>
        </div>
        <div className="grid h-[49px] mt-4">
          <div className="flex justify-start">
            <BridgeShowcase
              Item1={{ imgUrl: "/credpoints/aptos.svg", text: "APT" }}
              Item2={{ imgUrl: "/credpoints/token_icons/usdc.svg", text: "USDC" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tradebook;
