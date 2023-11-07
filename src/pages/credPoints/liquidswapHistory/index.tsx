import HistoryItem from "./historyItem";
import PointLogo from "./pointLogo";
import "./index.css";

const LiquidSwapHistory = () => {
  return (
    <div className="mt-4 w-full flex border border-gray-light-2 rounded-xl">
      <div className="min-w-[50%] flex flex-col justify-center items-center gap-4">
        <PointLogo />
        <p className="text-2xl font-bold">from DeFi trading</p>
        <p className="text-sm text-center text-gray-light-3">
          Get points by being active on Aptos DeFi.
          <br />
          Eligible DeFi protocols: Liquidswap, Pancakeswap,
          <br />
          Aries Market, Thala
        </p>
      </div>
      <div className="w-px border border-gray-light-1" />
      <div className="w-full py-5 flex flex-col items-center">
        <p className="text-center">Last 10 DeFi activities</p>
        <div className="mt-2 w-8 h-px border border-primary-default" />
        <div className="w-full px-8">
          <div className="history-board pr-4 w-full h-[300px] flex flex-col overflow-y-scroll">
            {Histories.map((history, index) => (
              <HistoryItem data={history} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidSwapHistory;

const Histories = Array(100).fill({
  createdAt: "24 Oct 23",
  type: "APT -> USDC",
  volume: 50,
});
