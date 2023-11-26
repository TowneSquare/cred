import { useAppSelector } from "../../../../state/hooks";

const MyRanking = () => {
  const myRanking = useAppSelector((state) => state.leaderboardState.myRank);

  return (
    <div className="container px-6 py-1 w-auto flex gap-2 justify-center items-center border-[3px] md:border-4 border-secondary-default rounded-full ">
      <p className="text-xl md:text-2xl font-semibold">
        {myRanking.toLocaleString()}
      </p>
    </div>
  );
};

export default MyRanking;
