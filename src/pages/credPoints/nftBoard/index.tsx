import PointLogo from "./pointLogo";
import "./index.css";
import PrimaryButton from "../../../components/primaryButton";
import NftList from "./nftList";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { toggleNftList } from "../../../state/dialog";

const NftBoard = () => {
  const dispatch = useAppDispatch();
  const isLive = useAppSelector((state) => state.credpointsState.isLive);

  return (
    <div className="w-full px-4">
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
            onClick={() => dispatch(toggleNftList(true))}
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
      </div>
    </div>
  );
};

export default NftBoard;
