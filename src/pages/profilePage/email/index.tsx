import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import ConnectedButton from "../../../components/connectedButton";
import { toggleEmailVerifyModal } from "../../../state/dialog";
import { emailVerify } from "../../../api/profile";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const Email = () => {
  const dispatch = useAppDispatch();
  const { connected, account } = useWallet();
  const [inputText, setInputText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailConnected, setEmailConnected] = useState(false);
  const profileViewed = useAppSelector((state) => state.profileState.profileViewed)
  const handleInputChange = (event: any) => {
    const email = event.target.value;
    setInputText(email);
    validateEmail(email);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(email));
  };

  const submitVerifyRequest = async () => {
    dispatch(toggleEmailVerifyModal(true));
    // const res = await emailVerify(inputText, account?.address);
    // console.log(res);
  };

  return (
    <>
      <div className={`bg-[#1B1B1B] w-[90%] ${emailConnected ? 'h-[216px]' : 'h-[357px]'} ${inputText && !isValidEmail ? 'md:h-[230px]' : 'md:h-[195px]'} py-8 px-4 md:px-8 grid md:flex items-center border border-gray-light-2 rounded-xl mb-4 md:justify-between`}>
        {emailConnected ? (
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
              <ConnectedButton>Email verified</ConnectedButton>
            </div>
          </>
        ) : (
          <>
            <p className="hidden md:flex z-50 text-[28px] font-[700] absolute ml-[300px]">Coming soon</p>
            <div className="md:absolute md:blur-[10px] md:w-[890px] md:h-[130px]">
              <div className="flex">
                <div className="justify-center items-center container-light border w-16 h-16 md:w-[80px] md:h-[80px] border-gray-light-2 rounded-full blur-[10px]">
                  {!profileViewed && <img src="/credpoints/icon-warning.svg" className="absolute left-10 md:left-[50px] -top-[6px] w-[32px] h-[32px]" alt="cred" />}
                  <div className="top-0 left-0 w-16 h-16 md:w-[80px] md:h-[80px] group rounded-full flex justify-center items-center">
                    <img src="/credpoints/email.svg" alt="X" className="w-8 md:w-10 absolute" />
                  </div>
                </div>
                <div className="grid items-center ml-4 md:ml-8 blur-[10px]">
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
                  <div className="hidden md:flex mt-4 items-center">
                    <input
                      className="h-6 w-11 appearance-none rounded-[20px] bg-[#52BDB2] checked:bg-gray-light-2 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:mt-[3px] after:ml-[22px] after:h-[17px] after:w-[17px] after:rounded-full after:border-none after:bg-white after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:mt-[3px] checked:after:ml-1 checked:after:h-[17px] checked:after:w-[17px] checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[17px] focus:after:w-[17px] focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100  dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                      type="checkbox"
                      role="switch"
                      value="checked"
                      id="flexSwitchCheckDefault" />
                    <p className="ml-2 mt-1 text-center text-xs md:text-[15px]">
                      subscribe email to the TowneSquare waitlist and earn 50
                      &nbsp;
                      <img className="inline-block w-7 ml-[5px]" src="/credpoints/cred.svg" alt="copy" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="md:hidden flex z-50 text-[28px] font-[700] absolute ml-[65px]">Coming soon</p>
            <div className="blur-[10px]">
              <div className="md:hidden justify-between mt-8 md:mt-[10px] md:w-[710px]">
                <input
                  placeholder="Email"
                  className="bg-black w-full md:w-[497px] h-[51px] border border-gray-light-2 rounded-[200px] pl-8"
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                />
                <div className="flex mt-4">
                  <div>
                    <input
                      className="h-6 w-11 appearance-none rounded-[20px] bg-[#52BDB2] checked:bg-gray-light-2 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:mt-[3px] after:ml-[22px] after:h-[17px] after:w-[17px] after:rounded-full after:border-none after:bg-white after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:mt-[3px] checked:after:ml-1 checked:after:h-[17px] checked:after:w-[17px] checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[17px] focus:after:w-[17px] focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100  dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                      type="checkbox"
                      role="switch"
                      value="checked"
                      id="flexSwitchCheckDefault" />
                  </div>
                  <p className="ml-3 text-xs text-[16px]">
                    subscribe email to the <br /> TowneSquare waitlist and earn 50
                    &nbsp;
                    <img className="inline-block w-[18px]" src="/credpoints/cred.svg" alt="copy" />
                  </p>
                </div>

                <button
                  onClick={() => { isValidEmail && submitVerifyRequest() }}
                  className={`bg-[#F5E27D] w-full md:w-[200px] mt-4 h-[51px] py-3 px-8 rounded-[200px] text-black font-bold text-[16px] text-center ${isValidEmail ? '' : ' opacity-50 cursor-not-allowed'
                    }`}
                >
                  Verify email
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Email;
