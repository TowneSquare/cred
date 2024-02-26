import { useDispatch } from "react-redux";
import { toggleEligibleTokenModal } from "../../../../state/dialog";
import { useAppSelector } from "../../../../state/hooks";
import { updateEligibleTokenTapIndex } from "../../../../state/credpoints";
import Tokens from "./tokens";
import Staking from "./staking";
import EligibleTapItemTokens from "../../../../components/eligibleTapItemTokens";

const EligibleTokenList = () => {

  const tabs = ["Tokens", "Staking"];
  const currentTap = useAppSelector(state => state.credpointsState.eligibleTokenTapIndex);
  const dispatch = useDispatch();

  return (
    <div className="w-full pt-10 pb-12 flex flex-col">
      <div className="flex justify-center md:justify-between md:px-8 md:h-7">
        <p className="text-[20px] w-[270px] md:w-full md:text-[22px] font-bold text-center md:text-left">Eligible DeFi platforms, activities and pairs</p>
        <img
          src="/credpoints/close.svg"
          className="absolute top-5 right-6  md:flex cursor-pointer w-8"
          onClick={(e) => dispatch(toggleEligibleTokenModal(false))}
        />
      </div>
      <div className="grid mt-6 mb-8">
        <div className="flex justify-between h-[49px] items-center border-b-[1px] border-[#B9B9B9]">
          {tabs.map((text, index) => (
            <EligibleTapItemTokens onClick={() => dispatch(updateEligibleTokenTapIndex(index))} key={index} className={`${currentTap == index && 'font-bold border-b-[3px]'}`}>
              {text}
            </EligibleTapItemTokens>
          ))}
        </div>
      </div >
      <div className="grid h-[405px] font-Inter overflow-y-scroll md:overflow-hidden">
        {currentTap == 0 && <Tokens />}
        {currentTap == 1 && <Staking />}
      </div>
    </div>
  );
};

export default EligibleTokenList;