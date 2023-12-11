import { useEffect } from "react";
import Cookies from "js-cookie";
import { Route, Routes } from "react-router-dom";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

import Home from "./pages/home";
import CredPoints from "./pages/credPoints";
import Leaderboard from "./pages/leaderboard";
import About from "./pages/about";
import PrivacyPolicy from "./pages/privacyPolicy";
import Twitter from "./pages/twitter";
import { useAppDispatch, useAppSelector } from "./state/hooks";

import Sidebar from "./components/header/sidebar";
import WalletModal from "./components/header/walletModal";
import {
  fetchCredpoints,
  updateConnection,
  updateCredPointsLive,
  updateInitInviteCode,
} from "./state/credpoints";
import {
  fetchRankings,
  updateConnection as updateLeaderboardConnection,
  updateLeaderboardLive,
} from "./state/leaderboard";
import ActivityModal from "./pages/credPoints/defiActivity/activityModal";
import NftModal from "./pages/credPoints/nftBoard/nftModal";
import ReferralModal from "./pages/credPoints/referral/referralModal";
import TermsOfService from "./pages/tos";
import { INVITE_CODE } from "./constants/inviteCode";
import "./App.css";
import { getInviteCode } from "./api/invite";

function App() {
  const dispatch = useAppDispatch();
  const { connected, account } = useWallet();
  const initInviteCode = useAppSelector(
    (state) => state.credpointsState.initInviteCode
  );

  useEffect(() => {
    const storeInviteCode = async () => {
      if (account) {
        const res = await getInviteCode(account?.address);
        if (res.success == true) {
          dispatch(updateInitInviteCode(res.code));
        } 
      }
    };
    storeInviteCode();
  }, [account]);

  useEffect(() => {
    dispatch(updateConnection(connected));
    dispatch(updateLeaderboardConnection(connected));

    if (connected && account && initInviteCode) {
      dispatch(updateCredPointsLive(false));
      dispatch(updateLeaderboardLive(false));

      dispatch(fetchCredpoints({ wallet: account.address, initInviteCode }));
      dispatch(fetchRankings(account.address));

      // dispatch(
      //   fetchRankings(
      //     "0xbfc249dfede8270c73233cdec078dd82b69d0800342cc6f22e639bc568a301a5"
      //   )
      // );
      // dispatch(
      //   fetchCredpoints(
      //     {
      //       wallet: "0xbfc249dfede8270c73233cdec078dd82b69d0800342cc6f22e639bc568a301a5",
      //       initInviteCode
      //     }
      //   )
      // );
    }
  }, [connected, account, initInviteCode]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credPoints" element={<CredPoints />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/twitter" element={<Twitter />} />
      </Routes>
      <Sidebar />
      <WalletModal />
      <ActivityModal />
      <NftModal />
      <ReferralModal />
    </div>
  );
}

export default App;
