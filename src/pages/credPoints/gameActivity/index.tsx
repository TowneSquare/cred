import PointLogo from "./pointLogo";
import "./index.css";
import PrimaryButton from "../../../components/primaryButton";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { toggleEligibleGameModal, toggleSuggestVerifyModal, togglebGameList } from "../../../state/dialog";
import SuggestVerify from "../../../components/suggestVerify";
import GameActivityList from "./gameActivityList";

const GameActivity = () => {
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
          <p className="text-2xl font-bold text-center">from playing on-chain games</p>
          <div className="w-full flex flex-col items-center">
            <p className="text-sm text-center text-gray-light-3">
              Get points every day you login to on-chain games.
            </p>
            <p onClick={() => dispatch(toggleEligibleGameModal(true))} className="text-sm font-normal text-[#45A9A7] mt-2 cursor-pointer">Show eligible games</p>
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
              onClick={() => dispatch(togglebGameList(true))}
            >
              Last 10 rewards from games
            </PrimaryButton>
          }
        </div>
        <div className="hidden md:block w-px border border-gray-light-1 border-opacity-[20%]" />
        {visitorMode ?
          <SuggestVerify /> :
          <div className="hidden md:block min-w-[50%]">
            {referralList.length > 0 ? (
              <GameActivityList />
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <span className="text-center text-sm">
                  Last 10 days you played on-chain games
                </span>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default GameActivity;
