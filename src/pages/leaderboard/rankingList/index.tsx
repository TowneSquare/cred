import { useAppSelector } from "../../../state/hooks";
import { RankingType } from "../../../type/rankingType";
import RankingItem from "./rankingItem";

const RankingList = () => {
  const topRankings = useAppSelector(
    (state) => state.leaderboardState.topRankings
  );
  const currentTap = useAppSelector(
    (state) => state.leaderboardState.leaderboardTapIndex
  );
  return (
    <div className={`${currentTap == 0 ? 'flex' : 'hidden md:flex'} mt-8 md:mt-32 md:py-5 md:w-[65%] w-full flex-col items-center`}>
      < p className="text-center text-[20px] md:text-3xl font-bold" > Top 500 addresses by CRED score</p >
      <div className="mt-2 w-8 h-px border border-secondary-default" />
      <div
        className="container mt-8 w-[95%] border border-gray-light-1 md:border-gray-light-4 rounded-2xl"
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <div className="">
          {topRankings.map((user, index) => (
            <RankingItem data={user} index={index} key={index} />
          ))}
        </div>
      </div>
    </div >
  );
};

export default RankingList;
