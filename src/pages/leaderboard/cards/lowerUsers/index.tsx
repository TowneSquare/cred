import LoadingState from "../../../../components/loadingstate";
import { useAppSelector } from "../../../../state/hooks";

const Apt = () => {
  const lowerPercentage = useAppSelector((state) => state.leaderboardState.lowerPercentage);
  const visitorMode = useAppSelector((state) => state.globalState.visitorMode);
  const isLive = useAppSelector(state => state.leaderboardState.isLive);

  return (
    <>
      {!isLive ? (
        <div className="container w-[260px] md:w-[320px] min-h-[140px] px-10 md:px-20 flex flex-col justify-center items-center gap-4 border border-gray-light-2 rounded-xl">
          <div className="w-full h-9 flex gap-4">
            <LoadingState className="w-1/3" />
            <LoadingState className="w-full" />
          </div>
          <LoadingState className="w-full h-9" />
        </div>
      ) : (
        <div className="container w-[260px] md:w-[320px] min-h-[140px]  px-4 flex flex-col justify-center items-center border border-gray-light-2 rounded-xl">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">{visitorMode ? "78.52" : lowerPercentage}% of users</p>
          </div>
          <p className="mt-4 text-center text-sm md:text-base">
            have a lower ranking than you!
          </p>
        </div>
      )}
    </>
  );
};

export default Apt;
