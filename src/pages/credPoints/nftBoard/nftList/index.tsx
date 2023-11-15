import { useAppSelector } from "../../../../state/hooks";
import NftItem from "./nftItem";

const NftList = () => {
  const rewardPerDay = useAppSelector(state => state.credpointsState.rewardNFTPointPerDay);
  const nfts = useAppSelector(state => state.credpointsState.nfts);
  return (
    <div className="w-full py-5 flex flex-col items-center">
      <p className="text-center">Eligible NFTs in your wallet</p>
      <div className="mt-2 w-8 h-px border border-primary-default" />
      <div className="mt-6 flex items-center">
        <p className="text-center">You get {rewardPerDay.toLocaleString()}&nbsp;</p>
        <img src="/credpoints/cred.svg" alt="cred" className="w-4 h-4" />
        <p className="text-center">&nbsp;/day</p>
      </div>
      <div className="mt-4 w-full px-2 md:px-8">
        <div className="nft-board pr-4 w-full h-auto md:h-[300px] flex flex-wrap justify-between gap-y-4 overflow-y-scroll">
          {nfts.map((history, index) => (
            <NftItem data={history} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NftList;

const Nfts = Array(10).fill({
  url: "/credpoints/longestNft.svg",
  name: "Aptos Monkey #8932",
  price: 50,
});
