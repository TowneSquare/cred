import { useAppSelector } from "../../../../state/hooks";

const LiquidSwap = () => {
  const isLive = useAppSelector((state) => state.credpointsState.isLive);

  return (
    <div
      className="w-[220px] md:w-[320px] min-h-[140px]  px-4 pt-4 flex flex-col items-center border border-gray-light-2 rounded-xl"
      style={{
        background:
          "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
      }}
    >
      {isLive ? (
        <>
          <div className="flex items-center gap-2">
            <img src="/credpoints/liquidSwap.svg" alt="swap" />
            <p className="text-2xl font-bold">Liquidswap</p>
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
          <p className="mt-4 text-center text-xl md:text-sm">
            Here we’ll show what’s the DeFi you
            <br /> interacted the most
          </p>
        </>
      )}
    </div>
  );
};

export default LiquidSwap;
