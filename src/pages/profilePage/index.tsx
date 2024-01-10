import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

import Header from "../../components/header";
import PrivacyPolicy from "../../components/privacyPolicy";

import Discord from "../../components/connectSocial/discord";
import Twitter from "../../components/connectSocial/twitter";
import Ans from "./ans";
import Email from "./email";
import ConnectButton from "./connectButton";
import "./index.css";
import { getInviteCode } from "../../api/invite";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import {
  fetchCredpoints,
  updateConnection,
  updateCredPointsLive,
} from "../../state/credpoints";
import { toggleChangeAvatarPanel } from "../../state/dialog";

const ProfilePage = () => {
  const { connected, account } = useWallet();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initInviteCode = useAppSelector(
    (state) => state.credpointsState.initInviteCode
  );
  const initialized = useAppSelector(state => state.globalState.initialized);

  return (
    <div className="parallax font-[Inter]" id="cred-point">
      <Header />
      <div className="parallax__group">
        <div className="parallax__layer cred__effect1">
          <img src="/credpoints/effect1.png" alt="effect1" />
        </div>
        <div className="parallax__layer cred__effect2">
          <img src="/credpoints/effect2.png" alt="effect2" />
        </div>
        <div className="parallax__layer cred__effect3">
          <img src="/credpoints/effect3.png" alt="effect3" />
        </div>
      </div>
      <div className="relative w-full grid justify-center z-10 !bg-fixed">
        <div className="w-full md:w-[1000px] flex flex-col items-center mt-[172px] mb-10">
          <p className="text-2xl font-bold">MY PROFILE</p>
          <div className="flex justify-center mt-8 mb-4">
            <div className="relative border-[2px] border-[#F5E27D] rounded-full">
              {!initialized ? (
                <img className="w-[100px] h-[100px] rounded-full z-50" src="/default-image.png" alt="" />
              ) : (
                <img className="w-[100px] h-[100px] rounded-full z-50" src="/avatar1.png" alt="" />
              )}
              <div onClick={() => dispatch(toggleChangeAvatarPanel(true))} className="absolute top-0 left-0 w-[100px] h-[100px] group hover:bg-[black] hover:opacity-70 rounded-full flex justify-center items-center cursor-pointer">
                <p className="hidden group-hover:block text-white font-bold">Change</p>
              </div>
            </div>
          </div>
          <ConnectButton />
        </div>
        <div className="min-w-[320px] md:w-[989px] flex flex-col items-center mt-[40px] mb:mt-[116px] mb-10 justify-center">
          <Twitter isProfileModal={true} />
          <Discord isProfileModal={true} />
          <Ans />
          <Email />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
