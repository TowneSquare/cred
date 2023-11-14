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

import { Controller, Scene } from "react-scrollmagic";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Sidebar from "./components/header/sidebar";
import WalletModal from "./components/header/walletModal";

function App() {
  const dispatch = useAppDispatch();
  const { connected, account } = useWallet();

  useEffect(() => {
    // if (account) 
    // dispatch(fetchCredPoints(account.address));
    dispatch(fetchRankings("0xb52363ed75f496448b691d33125bd1a866cf35a0132626074f59d4e07bb80234"));
  }, [connected, account]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credPoints" element={<CredPoints />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Sidebar />
      <WalletModal />
    </div>
  );
}

export default App;
