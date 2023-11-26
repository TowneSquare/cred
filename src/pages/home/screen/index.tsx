import { useEffect, useMemo, useState } from "react";
import Logo from "../logo";
import "./index.css";
import PrimaryButton from "../../../components/primaryButton";
import PrivacyPolicy from "../../../components/privacyPolicy";
import { useNavigate } from "react-router-dom";

const Screen = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % 3);
  //   }, 3500);
  //   return () => clearInterval(timer);
  // });

  const durations = [2500, 3100, 5500];

  useEffect(() => {
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, durations[current])
  }, [current]);

  const TextEffect = useMemo(() => {
    return (
      <>
        {current == 0 && (
          <div
            className={`flex flex-wrap justify-center gap-2 md:gap-4 text-white`}
          >
            <p className="split animate-fast text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-white">
              A
            </p>
            <p className="split animate-fast text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-white">
              loyalty
            </p>
            <p className="split animate-fast anim-speed text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-white">
              system
            </p>
          </div>
        )}
        {current == 1 && (
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-third-default">
            <p className="split animate-mid text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-third-default">
              that
            </p>
            <p className="split animate-mid text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-third-default">
              rewards
            </p>
            <p className="split animate-mid text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-third-default">
              you
            </p>
            <p className="split animate-mid text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-third-default">
              points
            </p>
          </div>
        )}
        {current == 2 && (
          <>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-white">
              <p className="split animate-low text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-white">
                for
              </p>
              <p className="split animate-low text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-white">
                your
              </p>
              <p className="split animate-low text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-white">
                on-chain
              </p>
              <p className="split animate-low text-[38px] md:text-[78px] leading-[100%] font-bold before:bg-white">
                activities!
              </p>
            </div>
          </>
        )}
      </>
    );
  }, [current]);

  return (
    <div className="absolute w-full h-screen flex flex-col items-center z-10">
      <div className="absolute top-16">
        <Logo />
      </div>
      <div className="mt-[250px] md:mt-[35vh] flex flex-col justify-center">
        {TextEffect}
      </div>
      <div className="connect-button mt-16 md:mt-[10vh] flex flex-col items-center">
        <div className="container connect-button mt-2 p-4 md:p-12  w-4/5 md:w-auto flex flex-col items-center border border-gray-light-2 rounded-xl">
          <p className="mt-4 text-center text-base md:text-xl">
            Connect wallet to check out your Cred points!
          </p>
          <PrimaryButton
            className="mt-2 md:mt-8 z-[4]"
            onClick={() => navigate("/credPoints")}
          >
            <span className="text-sm md:text-base">Connect Wallet</span>
          </PrimaryButton>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="text-base md:text-xl">Supporting&nbsp;</p>
          <img src="/home/aptos.svg" alt="aptos" className="h-4 md:h-6" />
          <p className="text-base md:text-xl">&nbsp;and more...</p>
        </div>
      </div>
      <div className="absolute bottom-8">
        <PrivacyPolicy />
      </div>
      <img
        src="/home/screen1/effect1.svg"
        alt="effect1"
        className="absolute bottom-16 -left-10 md:top-20 md:left-24 md:right-auto w-[150px] md:w-[250px] opacity-50 md:opacity-1 z-0"
      />

      <img
        src="/home/screen1/effect2.svg"
        alt="effect2"
        className="absolute top-10 right-0 md:top-[60%] md:left-auto md:right-16 w-[150px] md:w-[250px] opacity-50 md:opacity-1 z-0"
      />
    </div>
  );
};

export default Screen;
