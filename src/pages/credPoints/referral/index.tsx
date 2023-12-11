import PointLogo from "./pointLogo";
import "./index.css";
import PrimaryButton from "../../../components/primaryButton";
import ReferralList from "./referralList";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { toggleReferral } from "../../../state/dialog";

const Referral = () => {
  const dispatch = useAppDispatch();
  const referralList = useAppSelector(
    (state) => state.credpointsState.referralList
  );

  return (
    <div className="w-full px-4">
      <div className="container mt-4 flex border border-gray-light-2 rounded-xl">
        <div className="min-w-full md:min-w-[50%] p-6 flex flex-col justify-center items-center gap-4">
          <PointLogo />
          <p className="text-2xl font-bold">from my invited frens</p>
          <div className="w-full flex flex-col items-center">
            <div className="flex gap-1">
              <p className="text-base md:text-xl">
                Get&nbsp;<span className="font-bold">50</span>&nbsp;
              </p>
              <img src="/credpoints/cred.svg" alt="cred" className="w-6" />
            </div>
            <p className="text-sm text-center text-gray-light-3">
              for every fren that joins Cred using your invite code. <br />
              Frens you have invited also get 50 Cred points.
            </p>
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
                Last 10 invited frens
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Referral;
