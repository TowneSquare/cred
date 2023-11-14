import { useAppSelector } from "../../../../state/hooks";

const Apt = () => {
  const isLive = useAppSelector((state) => state.credpointsState.isLive);
  return (
    <div
      className="container w-[220px] md:w-[320px] min-h-[140px]  px-4 pt-4 flex flex-col items-center border border-gray-light-2 rounded-xl"
    >
      {isLive ? (
        <>
          <div className="flex items-center gap-2">
            <img src="/credpoints/aptos.svg" alt="swap" />
            <p className="text-2xl font-bold">APT</p>
          </div>
          <p className="mt-4 text-center text-sm md:text-base">
            makes up 65% of your
            <br />
            overall transactions
          </p>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">Favourite token</p>
          </div>
          <p className="mt-4 text-center text-xl md:text-sm">
            Here we’ll show what’s the token you
            <br /> have interacted with the most
          </p>
        </>
      )}
    </div>
  );
};

export default Apt;
