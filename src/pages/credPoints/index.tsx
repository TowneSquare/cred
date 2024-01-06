import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

import Header from "../../components/header";
import InviteCode from "../../components/inviteCode";
import PrivacyPolicy from "../../components/privacyPolicy";

import Banner from "./banner";
import Cards from "./cards";
import DefiActivity from "./defiActivity";
import MyTotal from "./myTotal";
import NftBoard from "./nftBoard";
import Referral from "./referral";
import "./index.css";
import { getInviteCode } from "../../api/invite";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import {
  fetchCredpoints,
  updateConnection,
  updateCredPointsLive,
} from "../../state/credpoints";
import TokenBoard from "./tokenBoard";
import GameActivity from "./gameActivity";

const CredPoints = () => {
  const { connected, account } = useWallet();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initInviteCode = useAppSelector(
    (state) => state.credpointsState.initInviteCode
  );
  const initialized = useAppSelector(state => state.globalState.initialized);

  useEffect(() => {
    if (connected && account && initialized && initInviteCode == undefined) {
      navigate("/");
    }
  }, [account, initialized]);

  useEffect(() => {
    dispatch(updateConnection(connected));

    if (connected && account && initInviteCode) {
      dispatch(updateCredPointsLive(false));
      dispatch(fetchCredpoints({ wallet: account.address, initInviteCode }));
    }
  }, [connected, account, initInviteCode]);

  return (
    <div className="parallax" id="cred-point">
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
      <div className="relative w-full flex justify-center z-10 !bg-fixed">
        <div className="w-full md:w-[1000px] flex flex-col items-center mt-[116px] mb-10">
          <InviteCode />
          <MyTotal />
          <Cards />
          <DefiActivity />
          <NftBoard />
          <Referral />
          <TokenBoard />
          <GameActivity />
          <Banner />
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  );
};

export default CredPoints;
