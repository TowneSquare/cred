import Share from "../../../components/share";
import { useAppSelector } from "../../../state/hooks";

const MyRanking = () => {
  const myRanking = useAppSelector(state => state.leaderboardState.myRank);
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold">MY RANKING</h1>
      <div
        className="relative mt-4 px-8 py-1 flex gap-2 justify-center items-center border-[3px] md:border-4 border-secondary-default rounded-full "
        style={{
          background:
            "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
        }}
      >
        <p className="text-[38px] md:text-[57px] font-semibold">{myRanking}</p>
        <div className="absolute -right-16 md:-right-20">
          <Share />
        </div>
      </div>
      <p className="mt-4 text-center text-sm md:text-base">ranks are updated daily at 00:00 UTC</p>
    </div>
  );
};

export default MyRanking;
