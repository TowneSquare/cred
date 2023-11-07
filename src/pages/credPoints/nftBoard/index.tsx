import NftItem from "./nftItem";
import PointLogo from "./pointLogo";
import "./index.css";

const NftBoard = () => {
  const todayVolume = 2200;
  return (
    <div className="mt-4 w-full flex border border-gray-light-2 rounded-xl">
      <div className="min-w-[50%] flex flex-col justify-center items-center gap-4">
        <PointLogo />
        <p className="text-2xl font-bold">from hodling NFT</p>
        <p className="text-sm text-center text-gray-light-3">
          Get points daily by hodling NFTs.
          <br />
          Eligible collections: Aptosmonkeys,
          <br />
          Pontem Pirates, Bruh bears, AptosMingos
          <br />
        </p>
      </div>
      <div className="w-px border border-gray-light-1" />
      <div className="w-full py-5 flex flex-col items-center">
        <p className="text-center">Eligible NFTs in your wallet</p>
        <div className="mt-2 w-8 h-px border border-primary-default" />
        <div className="mt-6 flex items-center">
          <p className="text-center">You get {todayVolume}&nbsp;</p>
          <img src="/credpoints/cred.svg" alt="cred" className="w-4 h-4" />
          <p className="text-center">&nbsp;/day</p>
        </div>
        <div className="mt-4 w-full px-8">
          <div className="nft-board pr-4 w-full h-[300px] flex flex-wrap justify-between gap-y-4 overflow-y-scroll">
            {Nfts.map((history, index) => (
              <NftItem data={history} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftBoard;

const Nfts = Array(100).fill({
  url: "/credpoints/longestNft.svg",
  name: "Aptos Monkey #8932",
  price: 50,
});
