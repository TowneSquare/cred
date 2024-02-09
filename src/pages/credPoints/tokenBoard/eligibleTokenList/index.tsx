import { useDispatch } from "react-redux";
import { toggleEligibleNftModal, toggleEligibleTokenModal } from "../../../../state/dialog";
import NftCollection from "../../../../components/defi/nftCollection";

const EligibleTokenList = () => {

  const tipData = [
    {
      title: "Rewards",
      items: [
        { descr: "5 - 10 milion $GUI", price: "50" },
        { descr: "10 - 30 milion $GUI", price: "100" },
      ]
    }
  ];
  const tipData2 = [
    {
      title: "Holding Rewards",
      items: [
        { descr: "5 < X ≤ 100 $SEEDZ", price: "20" },
        { descr: "101 < X ≤ 200 $SEEDZ", price: "50" },
        { descr: "200 < X $SEEDZ", price: "100" },
      ]
    },
    {
      title: "Staking Rewards",
      items: [
        { descr: "1-100 staked $SEEDZ", price: "20" },
        { descr: "101-200 staked $SEEDZ", price: "50" },
        { descr: "+200 staked $SEEDZ", price: "100 " }
      ]
    }
  ];

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
            tipData={tipData}
            twitterLink={"https://twitter.com/guiinuonaptos"}
            globalLink={"https://www.guiinu.com/"}
          />
          <NftCollection
            imgUrl={"/credpoints/token_icons/SEEDZ.svg"}
            text={"$SEEDZ"}
            tipData={tipData2}
            text_sm={"& Staking"}
            twitterLink={"#"}
            globalLink={"#"}
          />
          <NftCollection
            imgUrl={"/credpoints/token_icons/DOODOO.svg"}
            text={"$DOODOO"}
            text_sm={""}
            twitterLink={"https://twitter.com/doodoocoin"}
            globalLink={"https://doodoo.io/"}
          />
        </div>
      </div>
    </div>
  );
};

export default EligibleTokenList;
