import { DefiIcon, DefiName } from "../../../../constants/defi";
import { useAppSelector } from "../../../../state/hooks";

const LiquidSwap = () => {
  const defiActivities = useAppSelector(state => state.credpointsState.defiActivities);
  const popularDefi = useAppSelector(state => state.credpointsState.popularDeFi);

  return (
    <div
      className="container w-[260px] md:w-[320px] min-h-[140px]  px-4 pt-4 flex flex-col items-center border border-gray-light-2 rounded-xl"
    >
      {defiActivities.length > 0 && popularDefi ? (
        <>
          <div className="flex items-center gap-2">
            <img src={DefiIcon[popularDefi.toLowerCase()]} alt="swap" />
            <p className="text-2xl font-bold">{DefiName[popularDefi.toLowerCase()]}</p>
          </div>
          <p className="mt-4 text-center text-sm md:text-base">
            is the DeFi platform
            <br /> that you like the most
          </p>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">Favourite DeFi</p>
          </div>
          <p className="mt-4 text-center text-xs md:text-sm">
            Here we’ll show what’s the DeFi you interacted the most
          </p>
        </>
      )}
    </div>
  );
};

export default LiquidSwap;
