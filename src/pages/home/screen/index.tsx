import { useEffect, useMemo, useState } from "react";
import Logo from "../logo";
import "./index.css";
import PrimaryButton from "../../../components/primaryButton";
import { useNavigate } from "react-router-dom";

const Screen = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  });

  const TextEffect = useMemo(() => {
    return (
      <>
        {current == 0 && (
          <div
            className={`flex flex-wrap justify-center gap-2 md:gap-4 text-white`}
          >
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-white">
              A
            </p>
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-white">
              loyalty
            </p>
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-white">
              system
            </p>
          </div>
        )}
        {current == 1 && (
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-third-default">
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-third-default">
              that
            </p>
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-third-default">
              rewards
            </p>
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-third-default">
              you
            </p>
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-third-default">
              points
            </p>
          </div>
        )}
        {current == 2 && (
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-white">
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-white">
              for
            </p>
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-white">
              your
            </p>
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-white">
              on-chain
            </p>
            <p className="split text-[38px] md:text-[78px] font-bold before:bg-white">
              activities!
            </p>
          </div>
        )}
      </>
    );
  }, [current]);

  return (
    <div className="absolute w-full h-screen flex flex-col justify-center items-center z-10">
      <div className="absolute top-16">
        <Logo />
      </div>
      <div className="h-32 flex justify-center items-center">{TextEffect}</div>
      <div
        className="mt-2 md:mt-20 p-4 md:p-12  w-4/5 md:w-auto flex flex-col items-center border border-gray-light-2 rounded-xl"
        style={{
          background:
            "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
        }}
      >
        <p className="mt-4 text-center text-base md:text-xl">
          Connect wallet to check out your Cred points!
        </p>
        <PrimaryButton
          className="mt-2 md:mt-8 z-[4]"
          onClick={() => navigate("/credPoints")}
        >
          Connect Wallet
        </PrimaryButton>
      </div>
      <img
        src="/home/screen1/effect1.svg"
        alt="effect1"
        className="absolute top-16 -right-10 md:top-20 md:left-24 md:right-auto w-[150px] md:w-[250px] opacity-50 md:opacity-1 z-0"
      />
      <img
        src="/home/screen1/effect2.svg"
        alt="effect2"
        className="absolute bottom-10 left-0 md:bottom-16 md:left-auto md:right-32 w-[150px] md:w-[250px] opacity-50 md:opacity-1 z-0"
      />
    </div>
  );
};

export default Screen;
