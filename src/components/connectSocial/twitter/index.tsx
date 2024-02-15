import { useEffect, useState } from "react";
import { useAppSelector } from "../../../state/hooks";
import LoadingImage from "../../loadingImage";
import ConnectedButton from "../../connectedButton";
import { magic } from "../../../pages/lib/magic";
import { getBoringAvatar } from "../../../util/boringAvatar";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const Twitter = ({ isProfileModal }: { isProfileModal: boolean }) => {
  const { account, connected } = useWallet();
  const suggestVerifyModal = useAppSelector(state => state.dialogState.bSuggestVerifyModal);
  const firstVerifyModal = useAppSelector(state => state.dialogState.bFirstVerifyModal);
  const step = useAppSelector((state) => state.globalState.step);
  const profileViewed = useAppSelector(state => state.profileState.profileViewed);
  const twitterId = useAppSelector(state => state.profileState.twitterId);
  const twitterImage = useAppSelector(state => state.profileState.twitterImage);
  const [imageLink, setImageLink] = useState<string | undefined>(undefined);
  const [isChecked, setChecked] = useState(true);
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const authenticateWithTwitter = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "twitter",
        redirectURI: new URL(!isProfileModal ? '/' : '/profile', window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
    // console.log(isChecked)
  };

  return (
    <>
      <div className={`${isProfileModal ? 'bg-[#1B1B1B] md:h-[144px] w-[90%] border py-8 px-4 md:px-8 mb-4' : 'md:h-[91px] bg-opacity-0 w-[100%] mb-8'} ${!twitterId && suggestVerifyModal || firstVerifyModal ? 'h-[205px]' : 'h-[358px]'} grid md:flex items-center border-gray-light-2 rounded-xl md:justify-between`}>
        {twitterId ? (
          <>
            <div className="flex md:items-center w-[90%]">
              <div className="justify-center container-light border w-16 h-16 md:w-[80px] md:h-[80px] border-gray-light-2 rounded-full">
                <div className="top-0 left-0  w-16 h-16 md:w-[80px] md:h-[80px] group rounded-full flex justify-center items-center">
                  <img src="/credpoints/twitter.svg" alt="X" className="w-6 absolute" />
                </div>
              </div>
              <div className="grid items-center ml-4 md:ml-8">
                <p className="text-[20px] font-bold md:whitespace-nowrap text-[#A3A1E2]">
                  Connect your X account
                </p>
                <p className="text-[20px] font-normal">
                  Reward: 50
                  <img className="inline-block w-7 ml-[5px]" src="/credpoints/cred.svg" alt="copy" />
                  {" "}<img src="/credpoints/success.svg" className="hidden w-[24px] h-[24px] md:inline-block" alt="cred" />
                </p>
                <div className="grid md:flex">
                  <div className="flex items-center text-[20px]">
                    {"Verified: " + twitterId}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex justify-center mt-8 md:mt-0">
                <ConnectedButton>Connected</ConnectedButton>
              </div>
              <button className="md:mt-2 mt-4 bg-black bg-opacity-40 hover:bg-opacity-100 flex items-center justify-center text-white md:w-[200px] md:h-[44px] py-3 rounded-[200px] text-[16px] text-center">
                <a href="https://twitter.com/0xcred" target="_blank" >
                  <img className="inline-block w-[26px] mr-[5px]" src="/profile/0xcred.svg" alt="copy" />
                  Follow us on X
                  <img className="inline-block ml-[5px] w-4" src="/credpoints/arrow-right.svg" alt="copy" />
                </a>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex md:items-center w-[90%]">
              <div className="justify-center items-center bg-[#1B1B1B] border w-16 h-16 md:w-[80px] md:h-[80px] border-gray-light-2 rounded-full">
                <div className="container-light top-0 left-0 w-16 h-16 md:w-[78px] md:h-[78px] group rounded-full flex justify-center items-center">
                  {isProfileModal && !profileViewed && <img src="/credpoints/icon-warning.svg" className="absolute left-[40px] md:left-[50px] -top-[6px] w-[32px] h-[32px]" alt="cred" />}
                  <img src="/credpoints/twitter.svg" alt="X" className="w-6 absolute" />
                </div>
              </div>
              <div className="grid items-center ml-4 md:ml-8">
                <p className="text-[18px] md:text-[20px] font-bold md:whitespace-nowrap text-[#A3A1E2]">
                  Connect your X account
                </p>
                <div className="flex items-center">
                  <p className="text-[18px] md:text-[20px] font-normal">
                    Reward: 50
                  </p>
                  <img className="inline-block w-6 ml-[5px]" src="/credpoints/cred.svg" alt="copy" />
                </div>
                {isProfileModal && <p className="hidden md:block text-[20px] font-normal md:whitespace-nowrap text-[#B9B9B9]">
                  Active account verification
                </p>
                }
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <div className="grid w-full">
                <button onClick={authenticateWithTwitter} className="bg-[#F5E27D] md:w-[200px] h-[51px] py-3 px-8 rounded-[200px] text-black font-bold text-[16px] text-center">
                  Connect X
                </button>
                <button className="mt-4 md:mt-2 bg-black bg-opacity-40 hover:bg-opacity-100 flex items-center justify-center text-white md:w-[200px] md:h-[44px] py-3 rounded-[200px] text-[16px] text-center">
                  <a href="https://twitter.com/0xcred" target="_blank">
                    <img className="inline-block w-[22.5px] mr-[5px]" src="/profile/0xcred.svg" alt="copy" />
                    Follow us on X
                    <img className="inline-block ml-[5px] w-4" src="/credpoints/arrow-right.svg" alt="copy" />
                  </a>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Twitter;
