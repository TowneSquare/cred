import { useEffect, useRef } from "react";
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
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import {
  fetchCredpoints,
  updateConnection,
  updateCredPointsLive,
} from "../../state/credpoints";
import TokenBoard from "./tokenBoard";
import GameActivity from "./gameActivity";
import { updateVisitorMode } from "../../state/global";
import SuggestVerifyNavbar from "../../components/header/suggestVerifyNavbar";
import Footer from "./footer";

const CredPoints = () => {
  const { connected, account } = useWallet();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initInviteCode = useAppSelector(
    (state) => state.credpointsState.initInviteCode
  );
  const initialized = useAppSelector(state => state.globalState.initialized);
  const visitorMode = useAppSelector(state => state.globalState.visitorMode);

  const initInviteCodeRef = useRef(initInviteCode);
  const visitorModeRef = useRef(visitorMode);

  useEffect(() => {
    initInviteCodeRef.current = initInviteCode;
    visitorModeRef.current = visitorMode;
  }, [initInviteCode, account, visitorMode]);

  useEffect(() => {
    const fetchData = async () => {
      if (!initInviteCodeRef.current && !visitorModeRef.current) {
        navigate('/')
      }
    };
    const fetchDataTimeout = setTimeout(() => {
      fetchData();
    }, 5000);
    return () => {
      clearTimeout(fetchDataTimeout);
    };
  }, [initInviteCodeRef, visitorModeRef]);


  useEffect(() => {
    if (connected && account && initialized && initInviteCode == undefined) {
      dispatch(updateVisitorMode(true));
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
        <div className="parallax__layer cred__effect4 z-[100]">
          <img src="/credpoints/transparent_text.svg" />
        </div>
        <div className="parallax__layer cred__effect2">
          <img src="/credpoints/effect2.png" alt="effect2" />
        </div>
        <div className="parallax__layer cred__effect3">
          <img src="/credpoints/effect3.png" alt="effect3" />
        </div>
      </div>
      <SuggestVerifyNavbar />
      <div className="relative w-full flex justify-center z-10 !bg-fixed">
        <div className={`w-full md:w-[1000px] flex flex-col items-center ${visitorMode ? 'mt-[70px]' : 'mt-[116px]'} mb-10`}>
          <InviteCode />
          <MyTotal />
          <Cards />
          <DefiActivity />
          <NftBoard />
          <Referral />
          <TokenBoard />
          <GameActivity />
          <Banner />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CredPoints;
