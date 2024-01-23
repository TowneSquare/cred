import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../state/hooks";
import ActivityItem from "./swap";
import { toggleEligibleModal } from "../../../../state/dialog";
import EligibleTapItem from "../../../../components/eligibleTapItem";
import { updateEligibleDefiTapIndex } from "../../../../state/credpoints";
import Swap from "./swap";
import Tradebook from "./tradebook";
import Lending from "./lending";
import Pool from "./pool";

const EligibleActivityList = () => {
  const tabs = ["Swap", "Tradebook", "Lending", "Pool"];
  const currentTap = useAppSelector(state => state.credpointsState.eligibleDefiTapIndex);
  const dispatch = useDispatch();
  return (
    <div className="w-full pt-10 pb-12 flex flex-col">
      <div className="flex justify-center md:justify-between md:px-8 md:h-7">
        <p className="text-[20px] w-[270px] md:w-full md:text-[22px] font-bold text-center md:text-left">Eligible DeFi platforms, activities and pairs</p>
        <img
          src="/credpoints/close.svg"
          className="absolute top-5 right-6  md:flex cursor-pointer w-8"
          onClick={(e) => dispatch(toggleEligibleModal(false))}
        />
      </div>
      <div className="grid mt-6 mb-8">
        <div className="flex justify-between h-[49px] items-center border-b-[1px] border-[#B9B9B9]">
          {tabs.map((text, index) => (
            <EligibleTapItem onClick={() => dispatch(updateEligibleDefiTapIndex(index))} key={index} className={`${currentTap == index && 'font-bold border-b-[3px]'}`}>
              {text}
            </EligibleTapItem>
          ))}
        </div>
      </div >
      <div className="grid h-[405px] px-4 md:px-8 font-Inter overflow-y-scroll md:overflow-hidden">
        {currentTap == 0 && <Swap />}
        {currentTap == 1 && <Tradebook />}
        {currentTap == 2 && <Lending />}
        {currentTap == 3 && <Pool />}
      </div>
    </div>
  );
};

export default EligibleActivityList;
