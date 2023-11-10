import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../state/hooks";
import { toggleWalletPanel } from "../../state/dialog";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useEffect, useState } from "react";

import { Controller, Scene } from "react-scrollmagic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import "./index.css";
import Overlay from "./overlay";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { connected } = useWallet();

  // useEffect(() => {
  //   navigate("/credPoints");
  // }, []);

  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  return (
    <div className="features-wrapper bg-black" id="feature"  data-component="Features">
      <Controller>
        <Scene duration={4000} pin={true} offset={`${offset}px`}>
          <div className="w-full h-screen relative overflow-hidden ">
            <Screen1 />
            <Screen2 />
            <Screen3 />
            <Overlay />
          </div>
        </Scene>
      </Controller>
    </div>
  );
};

export default Home;
