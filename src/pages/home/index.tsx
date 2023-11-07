import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import { useAppDispatch } from "../../state/hooks";
import { toggleWalletPanel } from "../../state/dialog";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { connected } = useWallet();

  useEffect(() => {
    navigate("/credPoints");
  }, []);

  return null;
};

export default Home;
