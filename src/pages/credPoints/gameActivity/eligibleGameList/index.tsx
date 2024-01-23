import { useDispatch } from "react-redux";
import { toggleEligibleGameModal } from "../../../../state/dialog";
import NftCollection from "../../../../components/defi/nftCollection";

const EligibleGameList = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full pt-10 flex flex-col">
      <div className="flex justify-center md:justify-between md:px-8 md:h-7 mb-10">
        <p className="text-[20px] w-[270px] md:w-full md:text-[22px] font-bold text-center md:text-left">Eligible on-chain games</p>
        <img
          src="/credpoints/close.svg"
          className="absolute top-5 right-6 md:flex cursor-pointer w-8"
          onClick={(e) => dispatch(toggleEligibleGameModal(false))}
        />
      </div>
      <div className="flex flex-col px-4 md:px-1 font-Inter overflow-y-scroll md:overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <NftCollection
            imgUrl={"/credpoints/aptos_game/AptosArena.svg"}
            text={"Aptos Arena"}
            twitterLink={"https://twitter.com/PlayAptosArena"}
            globalLink={"https://play.aptosarena.xyz/"}
          />
        </div>
      </div>
    </div>
  );
};

export default EligibleGameList;
