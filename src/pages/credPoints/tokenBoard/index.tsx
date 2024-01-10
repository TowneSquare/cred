import PointLogo from "./pointLogo";
import "./index.css";
import PrimaryButton from "../../../components/primaryButton";
import ReferralList from "./referralList";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { toggleReferral, toggleSuggestVerifyModal } from "../../../state/dialog";
import SuggestVerify from "../../../components/suggestVerify";

const TokenBoard = () => {
  const dispatch = useAppDispatch();
  const referralList = useAppSelector(
    (state) => state.credpointsState.referralList
  );
  const visitorMode = useAppSelector(
    (state) => state.globalState.visitorMode
  );

  return (
    <div className="w-full px-4">
      <div className="h-[450px] container mt-4 flex border border-gray-light-2 rounded-xl">
        <div className="min-w-full md:min-w-[50%] p-6 flex flex-col justify-center items-center gap-4">
          <PointLogo />
          <p className="text-2xl font-bold">from holding tokens</p>
          <div className="w-full flex flex-col items-center">
            <p className="text-sm text-center text-gray-light-3 w-[90%]">
              Get daily points by holding a certain amount of eligible tokens.
            </p>
            <p className="text-sm font-normal text-[#45A9A7] mt-2 cursor-pointer">Show eligible tokens</p>
          </div>
          {visitorMode ?
            <PrimaryButton
              className="md:hidden w-full text-sm"
              onClick={() => dispatch(toggleSuggestVerifyModal(true))}
            >
              Verify account and join Cred
            </PrimaryButton> :
            <PrimaryButton
              className="md:hidden w-full text-sm"
              onClick={() => dispatch(toggleReferral(true))}
            >
              Last 10 rewards from tokens
            </PrimaryButton>
          }
        </div>
        <div className="hidden md:block w-px border border-gray-light-1 border-opacity-[20%]" />
        {visitorMode ?
          <SuggestVerify /> :
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
        }
      </div>
    </div>
  );
};

export default TokenBoard;
