import Share from "../../../components/share";
import { useAppSelector } from "../../../state/hooks";

const MyRanking = () => {
  const myRanking = useAppSelector(state => state.leaderboardState.myRank);
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold">MY RANKING</h1>
      <div
        className="container relative mt-4 px-8 py-1 flex gap-2 justify-center items-center border-[3px] md:border-4 border-secondary-default rounded-full "
      >
        <p className="text-[38px] md:text-[57px] font-semibold">{myRanking.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default MyRanking;
