import NftCollection from "../../../../components/defi/nftCollection";

interface Props {
  data?: any;
}

const Tokens: React.FC<Props> = () => {
  return (
    <div className="flex flex-col px-4 md:px-1 font-Inter overflow-y-scroll md:overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <NftCollection
          imgUrl={"/credpoints/staking_icons/animal.svg"}
          text={"Amnis Finance"}
          twitterLink={"https://twitter.com/AmnisFinance"}
          globalLink={"https://amnis.finance/"}
        />
      </div>
    </div>
  );
};

export default Tokens;
