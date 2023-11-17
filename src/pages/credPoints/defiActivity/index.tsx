import PointLogo from "./pointLogo";
import "./index.css";
import PrimaryButton from "../../../components/primaryButton";
import ActivityList from "./activityList";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { toggleActivityList } from "../../../state/dialog";

const DefiActivity = () => {
  const dispatch = useAppDispatch();
  const isLive = useAppSelector((state) => state.credpointsState.isLive);

  return (
    <div className="container mt-4 w-full flex border border-gray-light-2 rounded-xl">
      <div className="min-w-full md:min-w-[50%] p-6 flex flex-col justify-center items-center gap-4">
        <PointLogo />
        <p className="text-2xl font-bold">from DeFi trading</p>
        <p className="text-sm text-center text-gray-light-3">
          Get points by being active on Aptos DeFi.
          <br />
          Eligible DeFi protocols: Liquidswap, Pancakeswap,
          <br />
          Aries Market, Thala
        </p>
        <PrimaryButton
          className="md:hidden w-full text-sm"
          onClick={() => dispatch(toggleActivityList(true))}
        >
          See last 10 DeFi activities
        </PrimaryButton>
      </div>
      <div className="hidden md:block w-px border border-gray-light-1" />
      <div className="hidden md:block min-w-[50%]">
        {isLive ? (
          <ActivityList />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <span className="text-center text-sm">
              Here we’ll show the last 10 activities,
              <br /> when you interact with DeFi protocols
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefiActivity;
