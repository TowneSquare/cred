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
// import Moralis from "moralis";

function App() {
  const dispatch = useAppDispatch();
  const { connected, account } = useWallet();

  useEffect(() => {
    // if (account) {
    //   dispatch(fetchCredpoints(account.address));
    //   dispatch(fetchRankings(account.address));
    // }
    dispatch(
      fetchRankings(
        "0xb52363ed75f496448b691d33125bd1a866cf35a0132626074f59d4e07bb80234"
      )
    );
    dispatch(
      fetchCredpoints(
        "0x3bc474f3c3c37c9cdb6643c04e5004e5e03b17b1a4200ef807cd990f65b0e194"
      )
    );
  }, [connected, account]);

  // useEffect(() => {
  //   const init = async () => {
  //     if (!Moralis.Core.isStarted) {
  //       await Moralis.start({
  //         apiKey:
  //           "nmL7joMHVobMN3kzlygxYvy4TkHc5IN7VxbL8mvIO4l2QGrIWwQbySpp1eRUlL9d",
  //       });
  //     }
  //   };
  //   init();
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credPoints" element={<CredPoints />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
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
