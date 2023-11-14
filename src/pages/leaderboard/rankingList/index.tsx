import { useAppSelector } from "../../../state/hooks";
import { RankingType } from "../../../type/rankingType";
import RankingItem from "./rankingItem";

const RankingList = () => {
  const topRankings = useAppSelector(state => state.leaderboardState.topRankings);
  return (
    <div className="mt-32  py-5 w-full  flex flex-col items-center">
      <p className="text-center text-3xl">Top 500 addresses by CRED score</p>
      <div className="mt-2 w-8 h-px border border-secondary-default" />
      <div className="mt-8 w-full border border-gray-light-1 rounded-md bg-black">
        <div className="w-full h-full flex flex-col">
          {topRankings.map((user, index) => (
            <RankingItem data={user} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankingList;
