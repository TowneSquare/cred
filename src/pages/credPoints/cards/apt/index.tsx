import LoadingState from "../../../../components/loadingstate";
import { useAppSelector } from "../../../../state/hooks";

const Apt = () => {
  const aptTxsPercentage = useAppSelector( (state) => state.credpointsState.aptTxsPercentage );
  const isLive = useAppSelector(state => state.credpointsState.isLive);

  return (
    <>
      {!isLive ? (
        <div className="container w-[260px] md:w-[320px] min-h-[140px] px-10 md:px-20 py-4 flex flex-col gap-4 justify-center items-center border border-gray-light-2 rounded-xl">
          <div className="w-full h-9 flex gap-4">
            <LoadingState className="w-1/3" />
            <LoadingState className="w-full" />
          </div>
          <LoadingState className="w-full h-9" />
        </div>
      ) : (
        <div className="container w-[260px] md:w-[320px] min-h-[140px]  px-4 pt-4 flex flex-col items-center border border-gray-light-2 rounded-xl">
          {aptTxsPercentage !== undefined && aptTxsPercentage !== 0 ?(
            <>
              <div className="flex items-center gap-2">
                <img src="/credpoints/aptos.svg" alt="swap" />
                <p className="text-2xl font-bold">APT</p>
              </div>
              <p className="mt-4 text-center text-sm md:text-base">
                makes up {`${aptTxsPercentage}`}% of your
                <br />
                overall transactions
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">Favourite token</p>
              </div>
              <p className="mt-4 text-center text-xs md:text-sm">
                Here we’ll show what’s the token you have interacted with the
                most
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Apt;
