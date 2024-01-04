import { useEffect, useState } from "react";
import { useAppSelector } from "../../../state/hooks";
import { getMetadata } from "../../../api/metadata";
import { getImageURL } from "../../../util/url";
import LoadingState from "../../../components/loadingstate";
import LoadingImage from "../../../components/loadingImage";
import BonusInfo from "../../../components/bonusInfo";
import ConnectedButton from "../../../components/connectedButton";

const Email = () => {
  const isLive = useAppSelector(state => state.credpointsState.isLive);
  // const connected= {nftName : "@handsomeX"};
  const connected = useAppSelector(state => state.credpointsState.longestNft);
  const [imageLink, setImageLink] = useState<string | undefined>(undefined);

  const [inputText, setInputText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleInputChange = (event: any) => {
    const email = event.target.value;
    setInputText(email);
    validateEmail(email);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(email));
  };

  return (
    <>
      <div className="bg-[#1B1B1B] w-[460px] md:w-[890px] min-h-[144px] p-8 grid items-center border border-gray-light-2 rounded-xl mb-4">
        {!connected ? (
          <>
            <div className="flex justify-between">
              <div className="flex">
                <div className="justify-center items-center container-light border w-[80px] h-[80px] border-gray-light-2 rounded-full">
                  <div className="top-0 left-0 w-[80px] h-[80px] group rounded-full flex justify-center items-center">
                    <img src="/credpoints/email.svg" alt="X" className="w-8 md:w-10 absolute" />
                  </div>
                </div>
                <div className="grid items-center ml-8">
                  <p className="text-[18px] md:text-[20px] font-bold whitespace-nowrap text-[#A3A1E2]">
                    Verify email used to join TowneSquare waitlist
                  </p>
                  <p className="text-[18px] md:text-[20px] font-normal">
                    Reward: 100 &nbsp;
                    <img className="inline-block w-[24px]" src="credpoints/cred.svg" alt="copy" />
                    {" "}<img src="/credpoints/success.svg" className="w-[24px] h-[24px] inline-block" alt="cred" />
                  </p>
                  <p className="text-[18px] md:text-[20px] font-normal">
                    Email: test@test.com
                  </p>
                </div>
              </div>
              <ConnectedButton />
            </div>
          </>
        ) : (
          <>
            <div className="flex ">
              <div className="justify-center items-center container-light border w-[80px] h-[80px] border-gray-light-2 rounded-full">
                <img src="/credpoints/icon-warning.svg" className="absolute left-[50px] -top-[6px] w-[32px] h-[32px]" alt="cred" />
                <div className="top-0 left-0 w-[80px] h-[80px] group rounded-full flex justify-center items-center">
                  <img src="/credpoints/email.svg" alt="X" className="w-8 md:w-10 absolute" />
                </div>
              </div>
              <div className="grid items-center ml-8">
                <p className="text-[18px] md:text-[20px] font-bold whitespace-nowrap text-[#A3A1E2]">
                  Verify email
                </p>
                <p className="text-[18px] md:text-[20px] font-normal">
                  Reward: 50 &nbsp;
                  <img className="inline-block w-[24px]" src="credpoints/cred.svg" alt="copy" />
                </p>
                <BonusInfo />
                <div className="flex justify-between">
                  <input
                    placeholder="Email"
                    className="bg-black w-[498px] h-[51px] border border-gray-light-2 rounded-[200px] pl-8"
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                  />
                  <button
                    className={`bg-[#F5E27D] w-[200px] h-[51px] py-3 px-8 rounded-[200px] text-black font-bold text-[16px] text-center ${isValidEmail ? '' : 'bg-[#79703c] cursor-not-allowed'
                      }`}
                  >
                    Verify email
                  </button>
                </div>
                {inputText && !isValidEmail && <p className="text-[#E12E2E] text-[16px]" >It seems your email address is not right fren</p>}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Email;
