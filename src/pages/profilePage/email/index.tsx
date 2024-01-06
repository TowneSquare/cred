import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { getMetadata } from "../../../api/metadata";
import { getImageURL } from "../../../util/url";
import LoadingState from "../../../components/loadingstate";
import LoadingImage from "../../../components/loadingImage";
import BonusInfo from "../../../components/bonusInfo";
import ConnectedButton from "../../../components/connectedButton";
import { toggleEmailVerifyModal } from "../../../state/dialog";

const Email = () => {
  const dispatch = useAppDispatch();
  const isLive = useAppSelector(state => state.credpointsState.isLive);
  // const connected= {nftName : "@handsomeX"};
  const connected = false;
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
      <div className={`bg-[#1B1B1B] w-[90%] ${connected ? 'h-[216px]' : 'h-[278px]'} md:h-[144px] py-8 px-4 md:px-8 grid md:flex items-center border border-gray-light-2 rounded-xl mb-4 md:justify-between`}>
        {connected ? (
          <>
            <div className="grid md:flex md:justify-between w-[100%]">
              <div className="flex mb-8 md:mb-0">
                <div className="justify-center items-center container-light border w-16 h-16 md:w-[80px] md:h-[80px] border-gray-light-2 rounded-full">
                  <div className="top-0 left-0 w-16 h-16 md:w-[80px] md:h-[80px] group rounded-full flex justify-center items-center">
                    <img src="/credpoints/email.svg" alt="X" className="w-8 md:w-10 absolute" />
                  </div>
                </div>
                <div className="grid items-center ml-4 md:ml-8">
                  <p className="text-[18px] md:text-[20px] font-bold md:whitespace-nowrap text-[#A3A1E2]">
                    Verify email
                  </p>
                  <div className="flex">
                    <p className="hidden md:block text-[18px] md:text-[20px] font-normal ">
                      Email:&nbsp;
                    </p>
                    <p className="text-[18px] md:text-[20px] font-normal">
                      test@test.com
                    </p>
                  </div>
                </div>
              </div>
              <ConnectedButton />
            </div>
          </>
        ) : (
          <>
            <div className="flex">
              <div className="justify-center items-center container-light border w-16 h-16 md:w-[80px] md:h-[80px] border-gray-light-2 rounded-full">
                <img src="/credpoints/icon-warning.svg" className="absolute left-10 md:left-[50px] -top-[6px] w-[32px] h-[32px]" alt="cred" />
                <div className="top-0 left-0 w-16 h-16 md:w-[80px] md:h-[80px] group rounded-full flex justify-center items-center">
                  <img src="/credpoints/email.svg" alt="X" className="w-8 md:w-10 absolute" />
                </div>
              </div>
              <div className="grid items-center ml-4 md:ml-8">
                <p className="text-[18px] md:text-[20px] font-bold whitespace-nowrap text-[#A3A1E2]">
                  Verify email
                </p>
                <div className="hidden md:flex justify-between mt-[10px] md:w-[710px]">
                  <input
                    placeholder="Email"
                    className="bg-black w-full md:w-[497px] h-[51px] border border-gray-light-2 rounded-[200px] pl-8"
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={() => { isValidEmail && dispatch(toggleEmailVerifyModal(true)) }}
                    className={`bg-[#F5E27D] md:w-[200px] h-[51px] py-3 px-8 rounded-[200px] text-black font-bold text-[16px] text-center ${isValidEmail ? '' : ' opacity-50 cursor-not-allowed'
                      }`}
                  >
                    Verify email
                  </button>
                </div>
                {inputText && !isValidEmail && <p className="text-[#E12E2E] text-[16px] mt-4" >It seems your email address is not right fren</p>}
              </div>
            </div>
                <div className="md:hidden justify-between mt-8 md:mt-[10px] md:w-[710px]">
                  <input
                    placeholder="Email"
                    className="bg-black w-full md:w-[497px] h-[51px] border border-gray-light-2 rounded-[200px] pl-8"
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={() => { isValidEmail && dispatch(toggleEmailVerifyModal(true)) }}
                    className={`bg-[#F5E27D] w-full md:w-[200px] mt-4 h-[51px] py-3 px-8 rounded-[200px] text-black font-bold text-[16px] text-center ${isValidEmail ? '' : ' opacity-50 cursor-not-allowed'
                      }`}
                  >
                    Verify email
                  </button>
                </div>
          </>
        )}
      </div>
    </>
  );
};

export default Email;
