import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CredPoints from "./pages/credPoints";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { fetchRankings } from "./state/leaderboard";
import { useEffect } from "react";
import Leaderboard from "./pages/leaderboard";
import About from "./pages/about";
import PrivacyPolicy from "./pages/privacyPolicy";
import Twitter from "./pages/twitter";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Sidebar from "./components/header/sidebar";
import WalletModal from "./components/header/walletModal";
import { fetchCredpoints } from "./state/credpoints";
import ActivityModal from "./pages/credPoints/defiActivity/activityModal";
import NftModal from "./pages/credPoints/nftBoard/nftModal";
import TermsOfService from "./pages/tos";
import { updateConnection, updateLive } from "./state/innerslice";

function App() {
  const dispatch = useAppDispatch();
  const { connected, account } = useWallet();

  useEffect(() => {
    dispatch(updateConnection(connected));
    
    if (connected && account) {
      dispatch(updateLive(connected));
      
      // dispatch(fetchCredpoints(account.address));
      // dispatch(fetchRankings(account.address));

      dispatch(
        fetchRankings(
          "0xaaf8822c3e95d511253e95335184cc42db5e039ccbd30203a59a59c941d9900e"
        )
      );
      dispatch(
        fetchCredpoints(
          "0xaaf8822c3e95d511253e95335184cc42db5e039ccbd30203a59a59c941d9900e"
        )
      );
    }
  }, [connected, account]);

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
    </div>
  );
}

export default App;
