import { useAppSelector } from "../../../state/hooks";
import MyRanking from "./myRanking";
import { useEffect, useState } from "react";

const Banner = () => {
  const myPoint = useAppSelector((state) => state.credpointsState.totalPoint);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const element = document.getElementById("leaderboard");
    if (element) {
      element.addEventListener("scroll", () => {
        setScroll(element.scrollTop);
      });
    }
  }, []);

  const visible = scroll > 200;

  const gotoTop = () => {
    const element = document.getElementById("leaderboard");
    if (element) element.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`top-[90px] ${
          visible ? "h-[96px]" : "h-[0px]"
        } fixed z-50 transition-all duration-300 overflow-hidden w-full`}
      >
        <div className="px-5 md:px-0 w-full h-[96px] flex justify-center  bg-gray-dark-3">
          <div className="w-full md:w-[700px] flex justify-between">
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl font-semibold">My ranking</p>
              <MyRanking />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl font-semibold">
                {myPoint.toLocaleString()}
              </p>
              <img
                src="/credpoints/cred.svg"
                className="w-6 h-6 md:w-8 md:h-8"
                alt="cred"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          visible ? "opacity-100" : "opacity-0"
        } absolute right-20 md:right-32 bottom-20 md:bottom-32 w-12 md:w-16 h-12 md:h-16 flex justify-center items-center border-2 border-[#D6D5FF] bg-secondary-default/90 hover:bg-secondary-default/50 rounded-full cursor-pointer z-50 transition-all duration-300`}
        onClick={() => gotoTop()}
      >
        <img src="/leaderboard/upwards.svg" alt="upwards" />
      </div>
    </>
  );
};

export default Banner;
