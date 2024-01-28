import { useAppSelector } from "../../../state/hooks";

const MyRanking = () => {
  const myRanking = useAppSelector((state) => state.leaderboardState.myRank);
  const visitorMode = useAppSelector((state) => state.globalState.visitorMode);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold">MY RANKING</h1>
      <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="container px-8 py-1 w-auto flex gap-2 justify-center items-center border-[3px] md:border-4 border-secondary-default rounded-full ">
          <p className="text-[38px] md:text-[57px] font-semibold">
            {visitorMode ? "???" : myRanking.toLocaleString('en-US', { minimumIntegerDigits: 1 })}
          </p>
        </div>
      </div>
      <p className="mt-4 text-center text-sm md:text-base w-[80%] md:w-full">
        Rankings are based on your Cred points and activities.<br />
        Some activities may take longer for the blockchain to update.
      </p>
    </div>
  );
};

export default MyRanking;
