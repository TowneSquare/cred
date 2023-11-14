import PointLogo from "./pointLogo";
import "./index.css";
import PrimaryButton from "../../../components/primaryButton";
import NftList from "./nftList";
import { useState } from "react";
import { useAppSelector } from "../../../state/hooks";

const NftBoard = () => {
  const [isModal, toggleModal] = useState(false);
  const isLive = useAppSelector((state) => state.credpointsState.isLive);
  return (
    <div className="container mt-4 w-full flex border border-gray-light-2 rounded-xl">
      <div className="min-w-full md:min-w-[50%] p-6 flex flex-col justify-center items-center gap-4">
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
        <PrimaryButton
          className="md:hidden w-full text-sm"
          onClick={() => toggleModal(true)}
        >
          See eligible NFTs in your wallet
        </PrimaryButton>
      </div>
      <div className="hidden md:block w-px border border-gray-light-1" />
      <div className="hidden md:block min-w-[50%]">
        {isLive ? (
          <NftList />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <span className="text-center text-sm">
              Here we’ll show the eligible
              <br /> NFTs you have in the wallet
            </span>
          </div>
        )}
      </div>
      {isModal && (
        <div
          className="absolute inset-0 z-10"
          onClick={(e) => toggleModal(false)}
        >
          <div
            className="fixed top-20 bottom-px left-px right-px flex justify-center border border-gray-light-1 rounded-md"
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, -2.263) 1%, rgba(255, 255, 255, 0.32) 100%), linear-gradient(91.58deg, rgba(255, 255, 255, -1.86) 0%, rgba(255, 255, 255, 0) 38.54%), black",
            }}
          >
            <NftList />
          </div>
        </div>
      )}
    </div>
  );
};

export default NftBoard;

const Nfts = Array(100).fill({
  url: "/credpoints/longestNft.svg",
  name: "Aptos Monkey #8932",
  price: 50,
});
