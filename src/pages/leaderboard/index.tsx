import { useNavigate } from "react-router";
import { useEffect } from "react";
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

const Leaderboard = () => {
  const { connected, account } = useWallet();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initInviteCode = useAppSelector(
    (state) => state.credpointsState.initInviteCode
  );
  const initialized = useAppSelector(state => state.globalState.initialized);
  const visitorMode = useAppSelector(state => state.globalState.visitorMode);

  useEffect(() => {
    if (connected && account && initialized && initInviteCode == undefined) {
      dispatch(updateVisitorMode(true));
    }
  }, [account, initialized]);

  useEffect(() => {
    dispatch(updateConnection(connected));

    if (connected && account && initInviteCode) {
      dispatch(updateLeaderboardLive(false));
      dispatch(fetchRankings(account.address));
    }
  }, [connected, account, initInviteCode]);

  return (
    <div className="relative">
      <Header />
      <Banner />
      <div className="parallax" id="leaderboard">
        {visitorMode && <SuggestVerifyNavbar />}
        <div className="parallax__group">
          <div className="parallax__layer effect1">
            <img src="/leaderboard/effect1.png" alt="effect1" />
          </div>
          <div className="parallax__layer effect2">
            <img src="/leaderboard/effect2.png" alt="effect2" />
          </div>
          <div className="parallax__layer effect3">
            <img src="/leaderboard/effect3.png" alt="effect3" />
          </div>
        </div>
        <div className="relative w-full flex justify-center z-10">
          <div className={`w-full md:w-[700px] flex flex-col items-center ${visitorMode ? 'mt-[20px]' : 'mt-[116px]'}  mb-10`}>
            <InviteCode />
            <MyRanking />
            <Cards />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className={`w-full md:w-[70%] flex items-center`}>
            <RankingList />
            <ConnectionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
