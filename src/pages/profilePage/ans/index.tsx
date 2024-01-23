import { useEffect, useState } from "react";
import { useAppSelector } from "../../../state/hooks";
import { getMetadata } from "../../../api/metadata";
import { getImageURL } from "../../../util/url";
import LoadingState from "../../../components/loadingstate";
import LoadingImage from "../../../components/loadingImage";
import ConnectedButton from "../../../components/connectedButton";

const Ans = () => {
  const [imageLink, setImageLink] = useState<string | undefined>(undefined);
  const profileViewed = useAppSelector((state) => state.profileState.profileViewed);
  const ansList = useAppSelector((state) => state.profileState.ansName);
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
      <div className={`bg-[#1B1B1B] w-[90%] ${ansList.length != 0 ? 'h-[298px]' : 'h-[229px]'} md:h-[144px] py-8 px-4 md:px-8 grid md:flex items-center border border-gray-light-2 rounded-xl mb-4 md:justify-between`}>
        {ansList.length != 1 ? (
          <>
            <div className="flex md:items-center w-[90%]">
              <div className="justify-center container-light border w-16 h-16 md:w-[80px] md:h-[80px] border-gray-light-2 rounded-full">
                <div className="top-0 left-0  w-16 h-16 md:w-[80px] md:h-[80px] group rounded-full flex justify-center items-center">
                  <img src="/credpoints/aptos.svg" alt="X" className="w-8 absolute" />
                </div>
              </div>
              <div className="grid items-center ml-4 md:ml-8">
                <p className="text-[20px] font-bold md:whitespace-nowrap text-[#A3A1E2]">
                  Own Aptos name (ANS)
                </p>
                <p className="text-[20px] font-normal">
                  Reward: 50
                  <img className="inline-block w-7 ml-[5px]" src="/credpoints/cred.svg" alt="copy" />
                  {" "}<img src="/credpoints/success.svg" className="hidden w-[24px] h-[24px] md:inline-block" alt="cred" />
                </p>
                <div className="grid md:flex">
                  <p className="text-[20px] font-normal">
                    Aptos name:&nbsp;
                  </p>
                  <div className="flex items-center text-[20px]">
                    &nbsp; {ansList[0]}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <ConnectedButton>You own ANS</ConnectedButton>
            </div>
          </>
        ) : (
          <>
            <div className="flex md:items-center w-[90%]">
              <div className="justify-center items-center container-light border w-16 h-16 md:w-[80px] md:h-[80px] border-gray-light-2 rounded-full">
                {!profileViewed && <img src="/credpoints/icon-warning.svg" className="absolute left-[40px] md:left-[50px] -top-[6px] w-[32px] h-[32px]" alt="cred" />}
                <div className="top-0 left-0 w-16 h-16 md:w-[80px] md:h-[80px] group rounded-full flex justify-center items-center">
                  <img src="/credpoints/aptos.svg" alt="X" className="w-8 absolute" />
                </div>
              </div>
              <div className="grid items-center ml-4 md:ml-8">
                <p className="text-[18px] md:text-[20px] font-bold md:whitespace-nowrap text-[#A3A1E2]">
                  Own Aptos name (ANS)
                </p>
                <div className="flex items-center">
                  <p className="text-[18px] md:text-[20px] font-normal">
                    Reward: 50
                  </p>
                  <img className="inline-block w-6 ml-[5px]" src="/credpoints/cred.svg" alt="copy" />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <div className="grid w-full">
                <button className="bg-[#F5E27D] md:w-[200px] h-[51px] py-3 px-8 rounded-[200px] text-black font-bold text-[16px] text-center">
                  <a href="https://aptosnames.com" target="_blank" rel="noopener noreferrer">
                    Get ANS
                  </a>
                  <img className="inline-block w-[16px] ml-1 mb-1" src="/credpoints/external_link_black.svg" alt="copy" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Ans;
