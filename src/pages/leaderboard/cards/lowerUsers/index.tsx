import { useAppSelector } from "../../../../state/hooks";

const Apt = () => {
  const lowerPercentage = useAppSelector(state => state.leaderboardState.lowerPercentage);
  return (
    <div
      className="container w-[220px] md:w-[320px] min-h-[140px]  px-4 flex flex-col justify-center items-center border border-gray-light-2 rounded-xl"
    >
      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold">{lowerPercentage}% of users</p>
      </div>
      <p className="mt-4 text-center text-sm md:text-base">
        have a lower ranking than you!
      </p>
    </div>
  );
};

export default Apt;
