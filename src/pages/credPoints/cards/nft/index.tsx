import { useAppSelector } from "../../../../state/hooks";

const LongestNft = () => {
  const isLive = useAppSelector((state) => state.credpointsState.isLive);
  return (
    <div
      className="w-[220px] md:w-[320px] min-h-[140px] px-4 pt-4 flex flex-col items-center border border-gray-light-2 rounded-xl"
      style={{
        background:
          "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
      }}
    >
      {isLive ? (
        <>
          <div className="flex items-center gap-2">
            <img src="/credpoints/longestNft.svg" alt="swap" className="" />
            <p className="text-xl md:text-2xl font-bold">Bruh Bear #8932</p>
          </div>
          <p className="mt-4 text-center text-sm md:text-base">
            is your longest-hodling NFT
          </p>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <p className="text-xl md:text-2xl font-bold">Longest hodling NFT</p>
          </div>
          <p className="mt-4 text-center text-xl md:text-sm">
            Here we’ll show what’s the NFT you’re
            <br /> hodling for the longest period of time
          </p>
        </>
      )}
    </div>
  );
};

export default LongestNft;
