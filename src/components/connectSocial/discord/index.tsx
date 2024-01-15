import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { getImageURL } from "../../../util/url";
import LoadingState from "../../loadingstate";
import LoadingImage from "../../loadingImage";
import ConnectedButton from "../../connectedButton";
import axios from 'axios';
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useNavigate } from "react-router";
import { magic } from "../../../pages/lib/magic";


const Discord = ({ isProfileModal }: { isProfileModal: boolean }) => {

  const suggestVerifyModal = useAppSelector(state => state.dialogState.bSuggestVerifyModal);
  const firstVerifyModal = useAppSelector(state => state.dialogState.bFirstVerifyModal);

  const { connected, account } = useWallet();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initInviteCode = useAppSelector(
    (state) => state.credpointsState.initInviteCode
  );
  const initialized = useAppSelector(state => state.globalState.initialized);

  useEffect(() => {
    login();
  }, []);

  const isLive = useAppSelector(state => state.credpointsState.isLive);
  const [imageLink, setImageLink] = useState<string | undefined>(undefined);
  const [connected_discord, setConnected_discord] = useState(false);

  const login = async () => {
    try {
      const result = await magic.oauth.getRedirectResult();
      const discordAccessToken = result.oauth.accessToken;
      console.log(discordAccessToken);
    } catch {
      console.log("Not prepared yet");
    }
  }

  const authenticateWithDiscord = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "discord",
        redirectURI: new URL("/profile", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className={`${isProfileModal ? 'bg-[#1B1B1B] w-[90%] border py-8 px-4 md:px-8 md:h-[144px]' : ' bg-opacity-0 w-[100%] md:h-[91px]'} ${!connected_discord && suggestVerifyModal || firstVerifyModal ? 'h-[205px]' : 'h-[298px]'} grid md:flex items-center border-gray-light-2 rounded-xl mb-4 md:justify-between`}>
        {connected_discord ? (
          <>
            <div className="flex md:items-center w-[90%]">
              <div className="justify-center container-light border w-16 h-16 md:w-[80px] md:h-[80px] border-gray-light-2 rounded-full">
                <div className="top-0 left-0  w-16 h-16 md:w-[80px] md:h-[80px] group rounded-full flex justify-center items-center">
                  <img src="/credpoints/discord.svg" alt="X" className="w-8 absolute" />
                </div>
              </div>
              <div className="grid items-center ml-4 md:ml-8">
                <p className="text-[20px] font-bold md:whitespace-nowrap text-[#A3A1E2]">
                  Connect your Discord account
                </p>
                <p className="text-[20px] font-normal">
                  Reward: 50 &nbsp;
                  <img className="inline-block w-[24px]" src="/credpoints/cred.svg" alt="copy" />
                  {" "}<img src="/credpoints/success.svg" className="hidden w-[24px] h-[24px] md:inline-block" alt="cred" />
                </p>
                <div className="grid md:flex">
                  <p className="text-[20px] font-normal">
                    Verified:&nbsp;
                  </p>
                  <div className="flex items-center text-[20px]">
                    <LoadingImage url={"https://cred.townesquare.xyz/credpoints/default-avatar.svg"} className="w-[26px] h-[26px] inline-block rounded-full" />
                    &nbsp; @Test
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <ConnectedButton>Connected</ConnectedButton>
            </div>
          </>
        ) : (
          <>
            <div className="flex md:items-center w-[90%]">
              <div className="justify-center items-center bg-[#1B1B1B] border w-16 h-16 md:w-[80px] md:h-[80px] border-gray-light-2 rounded-full">
                {isProfileModal && <img src="/credpoints/icon-warning.svg" className="absolute left-[40px] md:left-[50px] -top-[6px] w-[32px] h-[32px]" alt="cred" />}
                <div className="container-light w-16 h-16 md:w-[78px] md:h-[78px] group rounded-full flex justify-center items-center">
                  <img src="/credpoints/discord.svg" alt="X" className="w-8 absolute" />
                </div>
              </div>
              <div className="grid items-center ml-4 md:ml-8">
                <p className="text-[18px] md:text-[20px] font-bold md:whitespace-nowrap text-[#A3A1E2]">
                  Connect your Discord account
                </p>
                <p className="text-[18px] md:text-[20px] font-normal">
                  Reward: 50 &nbsp;
                  <img className="inline-block w-[24px]" src="/credpoints/cred.svg" alt="copy" />
                </p>
                {isProfileModal && <p className="hidden md:block text-[20px] font-normal md:whitespace-nowrap text-[#B9B9B9]">
                  Active account verification
                </p>}
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <div className="grid w-full">
                <button onClick={authenticateWithDiscord} className="bg-[#F5E27D] md:w-[200px] h-[51px] py-3 px-8 rounded-[200px] text-black font-bold text-[16px] text-center">
                  Connect Discord
                </button>
                <div className="flex mt-4 justify-center">
                  <input
                    className="h-6 w-11 appearance-none rounded-[20px] bg-[#52BDB2] checked:bg-gray-light-2 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:mt-[3px] after:ml-[22px] after:h-[17px] after:w-[17px] after:rounded-full after:border-none after:bg-white after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:mt-[3px] checked:after:ml-1 checked:after:h-[17px] checked:after:w-[17px] checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[17px] focus:after:w-[17px] focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100  dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                    type="checkbox"
                    role="switch"
                    value="checked"
                    id="flexSwitchCheckDefault" />
                  <p className="ml-2 mt-1 text-center text-xs md:text-[16px]">
                    join Cred server
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Discord;
