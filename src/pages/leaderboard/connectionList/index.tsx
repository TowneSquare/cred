import { useAppSelector } from "../../../state/hooks";
import ConnectionItem from "./connectionItem";

const ConnectionList = () => {
  const twitterList = useAppSelector(
    (state) => state.leaderboardState.twitterList
  );
  const currentTap = useAppSelector(
    (state) => state.leaderboardState.leaderboardTapIndex
  );
  return (
    <div className={`${currentTap == 1 ? 'flex' : 'hidden md:flex'} mt-8 md:mt-32 md:py-5 md:w-[45%] w-full flex-col items-center`}>
      <p className="text-center text-[20px] md:text-3xl font-bold">Recent connections with X</p>
      <div className="mt-2 w-8 h-px border border-secondary-default" />
      <div
        className="container mt-8 w-[95%] border border-gray-light-1 md:border-gray-light-4 rounded-2xl"
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <div className="w-full h-full flex flex-col">
          {twitterList.map((user, index) => (
            <ConnectionItem data={user} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectionList;
