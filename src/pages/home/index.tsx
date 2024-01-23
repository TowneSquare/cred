import { useEffect, useMemo, useState } from "react";
import Logo from "./logo";
import "./index.css";
import Box from "./box";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import ConnectButton from "../../components/header/connectButton";
import { toggleRecapachaModal, toggleSidebar } from "../../state/dialog";
import { debounce } from 'lodash';
import ReCAPTCHA from "react-google-recaptcha";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [boxVisible, setBoxVisible] = useState(false);
  const step = useAppSelector((state) => state.globalState.step);
  const durations = [2500, 3100, 5500];
  const dispatch = useAppDispatch();

  const handleEffect = debounce(() => {
    setCurrent((prev) => (prev + 1) % 3);
    if (current == 1 && boxVisible == false) {
      setBoxVisible(true);
    }
  }, 3500);

  useEffect(() => {

  if (step == 2)

      dispatch(toggleRecapachaModal(true));
  }, [step]);

  useEffect(() => {
    handleEffect();
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
    <div
      className={`relative w-full min-h-[800px] ${step == 0 ? "md:min-h-[1000px]" : "md:min-h-[1000px] lg:min-h-[800px]"
        } h-screen flex flex-col items-center justify-center md:justify-normal z-10`}
    >
      <div className="hidden md:block absolute top-8 right-8">
        <ConnectButton />
      </div>
      <div className="block md:hidden absolute top-8 right-2">
        <img
          className="w-8"
          src="/header/list.svg"
          alt="list"
          onClick={() => dispatch(toggleSidebar(true))}
        />
      </div>
      <div className="absolute top-16 w-[90%]">
        <div>
          <Logo />
        </div>
        <div className="mt-[51px] md:mt-[62px] min-h-[96px] md:min-h-[auto] flex flex-col justify-center">
          {TextEffect}
        </div>
        <Box boxVisible={boxVisible} />
      </div>
      <img
        src="/home/screen1/effect1.svg"
        alt="effect1"
        className="absolute bottom-16 -left-10 md:top-20 md:left-24 md:right-auto w-[150px] md:w-[250px] opacity-50 md:opacity-1 z-0"
      />
      <img
        src="/home/screen1/effect2.svg"
        alt="effect2"
        className="absolute top-16 right-10 md:top-[60%] md:left-auto md:right-16 w-[150px] md:w-[250px] opacity-50 md:opacity-1 z-[-1]"
      />
    </div>
  );
};

export default Home;
