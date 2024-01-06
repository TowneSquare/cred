import PointLogo from "./pointLogo";
import "./index.css";
import PrimaryButton from "../../../components/primaryButton";
import ReferralList from "./referralList";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { toggleReferral } from "../../../state/dialog";

const TokenBoard = () => {
  const dispatch = useAppDispatch();
  const referralList = useAppSelector(
    (state) => state.credpointsState.referralList
  );

  return (
    <div className="w-full px-4">
      <div className="h-[450px] container mt-4 flex border border-gray-light-2 rounded-xl">
        <div className="min-w-full md:min-w-[50%] p-6 flex flex-col justify-center items-center gap-4">
          <PointLogo />
          <p className="text-2xl font-bold">from holding tokens</p>
          <div className="w-full flex flex-col items-center">
            <p className="text-sm text-center text-gray-light-3">
              Get daily points by holding a certain amount of eligible  <br /> tokens.
            </p>
            <p className="text-sm font-normal text-[#45A9A7] mt-2 cursor-pointer">Show eligible tokens</p>
          </div>
          <PrimaryButton
            className="md:hidden w-full text-sm"
            onClick={() => dispatch(toggleReferral(true))}
          >
            See referral list
          </PrimaryButton>
        </div>
        <div className="hidden md:block w-px border border-gray-light-1" />
        <div className="hidden md:block min-w-[50%]">
          {referralList.length > 0 ? (
            <ReferralList />
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <span className="text-center text-sm">
                Last 10 rewards from holding tokens
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenBoard;
