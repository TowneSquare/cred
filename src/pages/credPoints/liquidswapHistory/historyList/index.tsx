import HistoryItem from "./historyItem";

const HistoryList = () => {
  return (
    <div className="w-full py-5 flex flex-col items-center">
      <p className="text-center">Last 10 DeFi activities</p>
      <div className="mt-2 w-8 h-px border border-primary-default" />
      <div className="w-full px-2 md:px-8">
        <div className="history-board md:pr-4 w-full h-full md:h-[300px] flex flex-col overflow-y-auto">
          {Histories.map((history, index) => (
            <HistoryItem data={history} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryList;

const Histories = Array(10).fill({
  createdAt: "24 Oct 23",
  type: "APT -> USDC",
  volume: 50,
});
