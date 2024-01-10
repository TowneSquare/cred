import PointLogo from "./pointLogo";
import "./index.css";
import PrimaryButton from "../../../components/primaryButton";
import ActivityList from "./activityList";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { toggleActivityList, toggleEligibleModal, toggleSuggestVerifyModal } from "../../../state/dialog";
import SuggestVerify from "../../../components/suggestVerify";

const DefiActivity = () => {
  const dispatch = useAppDispatch();
  const defiActivities = useAppSelector(state => state.credpointsState.defiActivities);
  const visitorMode = useAppSelector((state) => state.globalState.visitorMode);

  return (
    <div className="w-full px-4">
      <div className="h-[450px] container mt-4 flex border border-gray-light-1 rounded-xl">
        <div className="min-w-full md:min-w-[50%] p-6 flex flex-col justify-center items-center gap-4">
          <PointLogo />
          <p className="text-2xl font-bold">from DeFi trading</p>
          <p className="text-sm text-center text-gray-light-3">
            Get points by being active on Aptos DeFi.
          </p>
          <p onClick={() => dispatch(toggleEligibleModal(true))} className="text-sm font-normal text-[#45A9A7] cursor-pointer">Show eligible activities and pairs</p>
          {visitorMode ?
            <PrimaryButton
              className="md:hidden w-full text-sm"
              onClick={() => dispatch(toggleSuggestVerifyModal(true))}
            >
              Verify account and join Cred
            </PrimaryButton> :
            <PrimaryButton
              className="md:hidden w-full text-sm"
              onClick={() => dispatch(toggleActivityList(true))}
            >
              See last 10 DeFi activities
            </PrimaryButton>
          }
        </div>
        <div className="hidden md:block w-px border border-gray-light-1 border-opacity-[20%]" />
        {visitorMode ?
          <SuggestVerify /> :
          <div className="hidden md:block min-w-[50%]">
            {defiActivities.length > 0 ? (
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
        }
      </div>
    </div>
  );
};

export default DefiActivity;
