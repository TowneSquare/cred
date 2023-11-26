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

  return (
    <div
      className={`${
        scroll > 200 ? "h-[96px]" : "h-[0px]"
      } fixed z-50 transition-all duration-300 overflow-hidden w-full`}
    >
      <div className="px-2 md:px-0 w-full h-[96px] flex justify-center  bg-gray-dark-3">
        <div className="w-full md:w-[800px] flex justify-between">
          <div className="flex items-center gap-2">
            <p className="text-xl md:text-2xl font-semibold">My ranking</p>
            <MyRanking />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl md:text-2xl font-semibold">{myPoint.toLocaleString()}</p>
            <img
              src="/credpoints/cred.svg"
              className="w-6 h-6 md:w-8 md:h-8"
              alt="cred"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
