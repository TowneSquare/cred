import { useAppSelector } from "../../../../state/hooks";
import ReferralItem from "./referralItem";

const ReferralList = () => {
  const referrals = useAppSelector(state => state.credpointsState.referralList);

  return (
    <div className="w-full py-5 flex flex-col items-center">
      <p className="text-center">Last 10 referral</p>
      <div className="mt-2 w-8 h-px border border-primary-default" />
      <div className="w-full md:pr-8">
        <div className="history-board w-full h-screen md:h-[300px] flex flex-col overflow-y-auto">
          {referrals.slice(0, 9).map((referral, index) => (
            <ReferralItem data={referral} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralList;
