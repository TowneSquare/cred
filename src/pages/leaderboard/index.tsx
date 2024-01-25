import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Header from "../../components/header";
import PrivacyPolicy from "../../components/privacyPolicy";
import InviteCode from "../../components/inviteCode";
import Cards from "./cards";
import MyRanking from "./myRanking";
import RankingList from "./rankingList";
import "./index.css";
import Banner from "./banner";
import { getInviteCode } from "../../api/invite";
import {
  fetchRankings,
  updateConnection,
  updateLeaderboardLive,
} from "../../state/leaderboard";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { updateVisitorMode } from "../../state/global";
import SuggestVerifyNavbar from "../../components/header/suggestVerifyNavbar";
import ConnectionList from "./connectionList";
import { updateLeaderboardTapIndex } from "../../state/leaderboard";
import LeaderboardTapItem from "../../components/leaderboardTapItem";
import { fetchCredpoints, updateCredPointsLive } from "../../state/credpoints";

const Leaderboard = () => {
  const { connected, account } = useWallet();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initInviteCode = useAppSelector(
    (state) => state.credpointsState.initInviteCode
  );
  const initialized = useAppSelector(state => state.globalState.initialized);
  const visitorMode = useAppSelector(state => state.globalState.visitorMode);
  const currentTap = useAppSelector(state => state.leaderboardState.leaderboardTapIndex);

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
    }, 4000);
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
      dispatch(updateLeaderboardLive(false));
      dispatch(updateCredPointsLive(false));
      dispatch(fetchRankings(account.address));
      dispatch(fetchCredpoints({ wallet: account.address, initInviteCode }));
    }
  }, [connected, account, initInviteCode]);


  return (
    <div className="relative">
      <Header />
      <Banner />
      <div className="parallax" id="leaderboard">
        <SuggestVerifyNavbar />
        <div className="parallax__group">
          <div className="parallax__layer effect1">
            <img src="/leaderboard/effect1.png" alt="effect1" />
          </div>
          <div className="parallax__layer effect3">
            <img src="/leaderboard/effect3.png" alt="effect3" />
          </div>
        </div>
        <div className="relative w-full flex justify-center z-10">
          <div className={`w-full md:w-[700px] flex flex-col items-center ${visitorMode ? 'mt-[70px]' : 'mt-[116px]'}  mb-10`}>
            <InviteCode />
            <MyRanking />
            <Cards />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-between w-[100%] md:hidden border-b-[1px] border-[#B9B9B9] z-50">
            <LeaderboardTapItem onClick={() => dispatch(updateLeaderboardTapIndex(0))} className={` font-bold ${currentTap == 0 && 'border-b-[3px]'} `}>
              {"Leaderboard"}
            </LeaderboardTapItem>
            <LeaderboardTapItem onClick={() => dispatch(updateLeaderboardTapIndex(1))} className={` font-bold ${currentTap == 1 && 'border-b-[3px]'} `}>
              {"Connect with X"}
            </LeaderboardTapItem>
          </div>
          <div className="flex justify-center">
            <div className={`w-full md:w-[70%] flex`}>
              <RankingList />
              <ConnectionList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
