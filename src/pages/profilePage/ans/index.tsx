import { useEffect, useState } from "react";
import { useAppSelector } from "../../../state/hooks";
import { getMetadata } from "../../../api/metadata";
import { getImageURL } from "../../../util/url";
import LoadingState from "../../../components/loadingstate";
import LoadingImage from "../../../components/loadingImage";
import ConnectedButton from "../../../components/connectedButton";

const Ans = () => {
  const isLive = useAppSelector(state => state.credpointsState.isLive);
  // const connected= {nftName : "@handsomeX"};
  const connected = useAppSelector(state => state.credpointsState.longestNft);

  const [imageLink, setImageLink] = useState<string | undefined>(undefined);

  // useEffect(() => {
  //   const getImage = async () => {
  //     if (!connected) return;
  //     try {
  //       const res = await getMetadata(longest);
  //       setImageLink(getImageURL(res.image));
  //     } catch (e) {}
  //   };
  //   getImage();
  // }, [connected]);

  return (
    <>
      <div className="bg-[#1B1B1B] w-[460px] md:w-[890px] min-h-[144px] p-8 flex items-center border border-gray-light-2 rounded-xl mb-4 justify-between">
        {!connected ? (
          <>
            <div className="flex">
              <div className="justify-center items-center container-light border w-[80px] h-[80px] border-gray-light-2 rounded-full">
                <div className="top-0 left-0 w-[80px] h-[80px] group rounded-full flex justify-center items-center">
                  <img src="/credpoints/aptos.svg" alt="X" className="w-6 md:w-8 absolute" />
                </div>
              </div>
              <div className="grid items-center ml-8">
                <p className="text-[18px] md:text-[20px] font-bold whitespace-nowrap text-[#A3A1E2]">
                  Own Aptos name (ANS)
                </p>
                <p className="text-[18px] md:text-[20px] font-normal">
                  Reward: 50 &nbsp;
                  <img className="inline-block w-[24px]" src="credpoints/cred.svg" alt="copy" />
                  {" "}<img src="/credpoints/success.svg" className="w-[24px] h-[24px] inline-block" alt="cred" />
                </p>
                <p className="text-[18px] md:text-[20px] font-normal">
                  Aptos name: testaptos.apt
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="grid">
                <ConnectedButton />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex">
              <div className="justify-center items-center container-light border w-[80px] h-[80px] border-gray-light-2 rounded-full">
                <img src="/credpoints/icon-warning.svg" className="absolute left-[50px] -top-[6px] w-[32px] h-[32px]" alt="cred" />
                <div className="top-0 left-0 w-[80px] h-[80px] group rounded-full flex justify-center items-center">
                  <img src="/credpoints/aptos.svg" alt="X" className="w-6 md:w-8 absolute" />
                </div>
              </div>
              <div className="grid items-center ml-8">
                <p className="text-[18px] md:text-[20px] font-bold whitespace-nowrap text-[#A3A1E2]">
                  Own Aptos name ( ANS )
                </p>
                <p className="text-[18px] md:text-[20px] font-normal">
                  Reward: 50 &nbsp;
                  <img className="inline-block w-[24px]" src="credpoints/cred.svg" alt="copy" />
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="grid">
                <button className="bg-[#F5E27D] w-[200px] h-[51px] py-3 px-8 rounded-[200px] text-black font-bold text-[16px] text-center">
                  Get ANS &nbsp; <img className="mb-1 w-[16px] inline-block" src="/credpoints/external_link_black.svg" alt="swap" />
                </button>
                <div className="flex mt-4 justify-center">
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Ans;
