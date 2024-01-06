import { useEffect } from "react";
import Cookies from "js-cookie";
import { Route, Routes } from "react-router-dom";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

import Home from "./pages/home";
import CredPoints from "./pages/credPoints";
import Leaderboard from "./pages/leaderboard";
import ProfilePage from "./pages/profilePage";
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
import { updateInitialized } from "./state/global";
import ChangeAvatarModal from "./components/header/changeAvatarModal";
import RecapachaModal from "./components/header/recapachaModal";
import EmailVerifyModal from "./components/header/emailVerifyModal";

function App() {
  const dispatch = useAppDispatch();
  const { account } = useWallet();

  useEffect(() => {
    const storeInviteCode = async () => {
      if (account) {
        dispatch(updateInitialized(false))

        const res = await getInviteCode(account?.address);
        
        if (res.success == true) {
          dispatch(updateInitInviteCode(res.code));
        } 

        dispatch(updateInitialized(true))
      } else {
        dispatch(updateInitialized(false))
      }
    };
    storeInviteCode();
  }, [account]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credPoints" element={<CredPoints />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/twitter" element={<Twitter />} />
      </Routes>
      <Sidebar />
      <WalletModal />
      <ChangeAvatarModal />
      <RecapachaModal />
      <EmailVerifyModal />
      <ActivityModal />
      <NftModal />
      <ReferralModal />
    </div>
  );
}

export default App;
