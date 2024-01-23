import { useAppSelector } from "../../../../state/hooks";
import TokenItem from "./tokenItem";

const TokenList = () => {
  const referrals = useAppSelector(state => state.credpointsState.holdingTokenList);

  return (
    <div className="w-full py-5 flex flex-col items-center">
      <p className="hidden md:block text-center">Last 10 rewards from holding tokens</p>
      <p className="block md:hidden text-center">Last 10 rewards from tokens</p>
      <div className="mt-2 w-8 h-px border border-primary-default" />
      <div className="w-full md:pr-8">
        <div className="history-board w-full h-screen md:h-[380px] flex flex-col overflow-y-auto md:px-0 px-4">
          {referrals.slice(0, 9).map((referral, index) => (
            <TokenItem data={referral} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenList;
