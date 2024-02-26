import NftCollection from "../../../../components/defi/nftCollection";

interface Props {
  data?: any;
}

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
const tipData3 = [
  {
    title: "Rewards",
    items: [
      { descr: "<1 $DOODOO", price: "0" },
      { descr: "1 - 25 $DOODOO", price: "50" },
      { descr: "26 - 50 $DOODOO", price: "100" },
      { descr: "51 - 100 $DOODOO", price: "150" },
      { descr: ">100 $DOODOO", price: "200" },
    ]
  }
];

const Tokens: React.FC<Props> = () => {
  return (
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
          tipData={tipData3}
          text_sm={""}
          twitterLink={"https://twitter.com/doodoocoin"}
          globalLink={"https://doodoo.io/"}
        />
      </div>
    </div>
  );
};

export default Tokens;
