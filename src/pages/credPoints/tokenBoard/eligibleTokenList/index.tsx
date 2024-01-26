import { useDispatch } from "react-redux";
import { toggleEligibleNftModal, toggleEligibleTokenModal } from "../../../../state/dialog";
import NftCollection from "../../../../components/defi/nftCollection";

const EligibleTokenList = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full pt-10 flex flex-col">
      <div className="flex justify-center md:justify-between md:px-8 md:h-7 mb-10">
        <p className="text-[20px] w-[270px] md:w-full md:text-[22px] font-bold text-center md:text-left">Eligible tokens</p>
        <img
          src="/credpoints/close.svg"
          className="absolute top-5 right-6 md:flex cursor-pointer w-8"
          onClick={(e) => dispatch(toggleEligibleTokenModal(false))}
        />
      </div>
      <div className="flex flex-col px-4 md:px-1 font-Inter overflow-y-scroll md:overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <NftCollection
            imgUrl={"/credpoints/token_icons/gui_inu.svg"}
            text={"$GUI"}
            twitterLink={"https://twitter.com/guiinuonaptos"}
            globalLink={"https://www.guiinu.com/"}
          />
          <NftCollection
            imgUrl={"/credpoints/token_icons/SEEDZ.svg"}
            text={"$SEEDZ"}
            text_sm={"& Staking"}
            twitterLink={"https://twitter.com/AptosMonkeys"}
            globalLink={"https://jungle.aptosmonkeys.club/"}
          />
        </div>
      </div>
    </div>
  );
};

export default EligibleTokenList;
