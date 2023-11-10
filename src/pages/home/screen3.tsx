import { useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Logo from "./logo";
import PrimaryButton from "../../components/primaryButton";
import { useNavigate } from "react-router-dom";

const Screen3 = () => {
  const navigate = useNavigate();
  const ref1 = useRef(null);

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-2600px",
      end: "top top+=-3400px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.opacity = self.progress * 1;
        }
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={ref1}
      className="absolute w-full h-screen flex flex-col justify-center items-center opacity-0"
    >
      <div className="absolute top-16">
        <Logo />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[78px] font-bold">for your on-chain activities!</p>
        <div
          className="mt-20 p-12 flex flex-col items-center border border-gray-light-2 rounded-xl"
          style={{
            background:
              "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
          }}
        >
          <p className="mt-4 text-center text-base md:text-xl">
            Connect wallet to check out your Cred points!
          </p>
          <PrimaryButton
            className="mt-8 z-[4]"
            onClick={() => navigate("/credPoints")}
          >
            Connect Wallet
          </PrimaryButton>
        </div>
      </div>
      <img
        src="/home/screen3/effect1.svg"
        alt="effect1"
        className="absolute top-20 left-24"
      />
      <img
        src="/home/screen3/effect2.svg"
        alt="effect2"
        className="absolute bottom-16 right-32"
      />
    </div>
  );
};

export default Screen3;
